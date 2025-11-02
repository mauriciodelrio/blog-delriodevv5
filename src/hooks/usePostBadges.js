'use client';

import { useState, useEffect, useCallback } from 'react';
import { 
  FaStar, 
  FaFire, 
  FaChartLine, 
  FaLightbulb, 
  FaCrown 
} from 'react-icons/fa';

// Track de views ya procesadas para evitar duplicados
const processedViews = new Set();

export function usePostBadges() {
  const [badges, setBadges] = useState({});
  const [stats, setStats] = useState({});
  const [slugMapping, setSlugMapping] = useState({}); // Para mapear slugs
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBadges = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/views/stats');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setBadges(data.badges || {});
      setStats(data.stats || {});
      
      // Extraer el mapeo de slugs para usar en getBadge
      const mapping = {};
      if (data.slugMapping) {
        Object.entries(data.slugMapping).forEach(([canonicalSlug, details]) => {
          if (details.slugs) {
            // Mapear español -> canónico
            if (details.slugs.es) {
              mapping[details.slugs.es] = canonicalSlug;
            }
            // Mapear inglés -> canónico (aunque debería ser igual)
            if (details.slugs.en) {
              mapping[details.slugs.en] = canonicalSlug;
            }
          }
        });
      }
      setSlugMapping(mapping);
      setError(null);
    } catch (err) {
      console.error('Error fetching badges:', err);
      setError(err.message);
      setBadges({});
      setStats({});
      setSlugMapping({});
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBadges();
  }, []);

  // Función para obtener badge de un post específico
  const getBadge = (slug) => {
    // Primero intentar obtener el slug canónico usando el mapeo
    const canonicalSlug = slugMapping[slug] || slug;
    
    // Buscar badge usando slug canónico
    return badges[canonicalSlug] || null;
  };

  // Función para obtener estadísticas de un post específico
  const getStats = (slug) => {
    // Primero intentar obtener el slug canónico usando el mapeo
    const canonicalSlug = slugMapping[slug] || slug;
    
    // Buscar stats usando slug canónico
    return stats[canonicalSlug] || { views: 0, recentViews: 0 };
  };

  // Función para refrescar datos (útil después de agregar una vista)
  const refreshBadges = () => {
    fetchBadges();
  };

  return {
    badges,
    stats,
    loading,
    error,
    getBadge,
    getStats,
    refreshBadges
  };
}

// Hook específico para tracking de vistas
export function usePostTracking() {
  const [isTracking, setIsTracking] = useState(false);

  const trackView = useCallback(async (slug) => {
    // Verificar si ya se procesó esta vista
    if (!slug || processedViews.has(slug)) {
      return null;
    }

    try {
      setIsTracking(true);
      
      // Marcar como procesado antes de hacer la llamada
      processedViews.add(slug);
      
      const response = await fetch(`/api/views/${slug}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error tracking view:', error);
      // Si hay error, remover de la lista para permitir retry
      processedViews.delete(slug);
      return null;
    } finally {
      setIsTracking(false);
    }
  }, []); // Sin dependencias

  return {
    trackView,
    isTracking
  };
}

// Función utilitaria para obtener configuración de badge por tipo
export function getBadgeConfig(badgeType, locale = 'en') {
  const configs = {
    new: {
      icon: FaStar,
      colors: {
        bg: 'bg-green-100',
        text: 'text-green-800',
        border: 'border-green-200'
      },
      labels: {
        en: 'New',
        es: 'Nuevo'
      }
    },
    top: {
      icon: FaCrown,
      colors: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
        border: 'border-yellow-200'
      },
      labels: {
        en: 'Top',
        es: 'Top'
      }
    },
    trending: {
      icon: FaFire,
      colors: {
        bg: 'bg-orange-100',
        text: 'text-orange-800',
        border: 'border-orange-200'
      },
      labels: {
        en: 'Trending',
        es: 'Tendencia'
      }
    },
    popular: {
      icon: FaChartLine,
      colors: {
        bg: 'bg-blue-100',
        text: 'text-blue-800',
        border: 'border-blue-200'
      },
      labels: {
        en: 'Popular',
        es: 'Popular'
      }
    },
    'must-read': {
      icon: FaLightbulb,
      colors: {
        bg: 'bg-purple-100',
        text: 'text-purple-800',
        border: 'border-purple-200'
      },
      labels: {
        en: 'Must Read',
        es: 'Imperdible'
      }
    }
  };

  return configs[badgeType] || null;
}