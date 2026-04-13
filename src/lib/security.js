// Middleware de seguridad para las APIs de views
import fs from 'fs';
import path from 'path';

// Rate limiting simple en memoria (para desarrollo)
// En producción con múltiples instancias, usar Redis o base de datos
const rateLimitStore = new Map();

// Limpiar entries antiguos cada 5 minutos
setInterval(
  () => {
    const now = Date.now();
    for (const [key, data] of rateLimitStore.entries()) {
      if (now - data.resetTime > 0) {
        rateLimitStore.delete(key);
      }
    }
  },
  5 * 60 * 1000,
);

// Función de rate limiting simple
const checkRateLimit = (identifier, windowMs = 4 * 60 * 60 * 1000, maxRequests = 10) => {
  const now = Date.now();
  const key = identifier;

  if (!rateLimitStore.has(key)) {
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  const data = rateLimitStore.get(key);

  if (now > data.resetTime) {
    // Ventana expirada, resetear
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  if (data.count >= maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: data.resetTime,
    };
  }

  data.count++;
  return {
    allowed: true,
    remaining: maxRequests - data.count,
  };
};

// Rate limiting exports para uso en APIs
export const checkViewTrackingRateLimit = (identifier) => {
  return checkRateLimit(identifier, 15 * 60 * 1000, 100); // 15 min, 100 requests
};

export const checkStatsRateLimit = (identifier) => {
  return checkRateLimit(identifier, 1 * 60 * 1000, 30); // 1 min, 30 requests
};

// Validación de slugs
export function validateSlug(slug) {
  if (!slug || typeof slug !== 'string') {
    return { valid: false, error: 'Slug must be a non-empty string' };
  }

  // Solo permitir caracteres alfanuméricos, guiones y guiones bajos
  const slugRegex = /^[a-zA-Z0-9\-_]+$/;
  if (!slugRegex.test(slug)) {
    return { valid: false, error: 'Slug contains invalid characters' };
  }

  // Longitud máxima razonable
  if (slug.length > 200) {
    return { valid: false, error: 'Slug too long' };
  }

  // Prevenir path traversal
  if (slug.includes('..') || slug.includes('/') || slug.includes('\\')) {
    return { valid: false, error: 'Slug contains forbidden patterns' };
  }

  return { valid: true };
}

// Sanitización de datos
export function sanitizeViewsData(data) {
  const sanitized = {
    posts: {},
    metadata: {
      lastUpdated: new Date().toISOString(),
      totalViews: 0,
      version: '1.0.0',
    },
  };

  if (data && typeof data === 'object') {
    // Sanitizar posts
    if (data.posts && typeof data.posts === 'object') {
      Object.keys(data.posts).forEach((key) => {
        const validation = validateSlug(key);
        if (validation.valid && data.posts[key] && typeof data.posts[key] === 'object') {
          const post = data.posts[key];
          sanitized.posts[key] = {
            views: Math.max(0, parseInt(post.views) || 0),
            lastViewed: post.lastViewed || null,
            dailyViews: post.dailyViews && typeof post.dailyViews === 'object' ? post.dailyViews : {},
            weeklyViews: post.weeklyViews && typeof post.weeklyViews === 'object' ? post.weeklyViews : {},
            createdAt: post.createdAt || new Date().toISOString(),
          };
        }
      });
    }

    // Sanitizar metadata
    if (data.metadata && typeof data.metadata === 'object') {
      sanitized.metadata = {
        lastUpdated: data.metadata.lastUpdated || new Date().toISOString(),
        totalViews: Math.max(0, parseInt(data.metadata.totalViews) || 0),
        version: data.metadata.version || '1.0.0',
      };
    }
  }

  return sanitized;
}

// Verificación de integridad del archivo
export function verifyFileIntegrity(data) {
  try {
    if (!data || typeof data !== 'object') {
      return { valid: false, error: 'Invalid data structure' };
    }

    if (!data.posts || typeof data.posts !== 'object') {
      return { valid: false, error: 'Missing or invalid posts object' };
    }

    if (!data.metadata || typeof data.metadata !== 'object') {
      return { valid: false, error: 'Missing or invalid metadata object' };
    }

    // Verificar que las vistas totales coincidan
    const calculatedTotal = Object.values(data.posts).reduce((sum, post) => sum + (parseInt(post.views) || 0), 0);

    const storedTotal = parseInt(data.metadata.totalViews) || 0;

    if (Math.abs(calculatedTotal - storedTotal) > 10) {
      // Permitir pequeñas diferencias
      console.warn('Total views mismatch:', { calculated: calculatedTotal, stored: storedTotal });
      // No fallar, solo advertir
    }

    return { valid: true };
  } catch (error) {
    return { valid: false, error: error.message };
  }
}

// Lock simple para evitar escrituras concurrentes
class FileLock {
  constructor() {
    this.locked = false;
    this.queue = [];
  }

  async acquire() {
    return new Promise((resolve) => {
      if (!this.locked) {
        this.locked = true;
        resolve();
      } else {
        this.queue.push(resolve);
      }
    });
  }

  release() {
    this.locked = false;
    if (this.queue.length > 0) {
      const next = this.queue.shift();
      this.locked = true;
      next();
    }
  }
}

export const viewsFileLock = new FileLock();
