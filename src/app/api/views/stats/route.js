import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { ViewsMonitor } from '@/lib/monitoring';

const VIEWS_FILE = path.join(process.cwd(), 'data', 'views.json');

// Configuración de reglas para badges
const BADGE_RULES = {
  NEW_DAYS: 7, // Posts nuevos: menos de 7 días
  POPULAR_THRESHOLD: 50, // Popular: más de 50 vistas
  TRENDING_THRESHOLD: 10, // Trending: más de 10 vistas en últimos 7 días
  TRENDING_DAYS: 7, // Período para calcular trending
};

// Función para leer datos de vistas
function readViewsData() {
  try {
    if (!fs.existsSync(VIEWS_FILE)) {
      return { posts: {}, metadata: { lastUpdated: new Date().toISOString() } };
    }
    const data = fs.readFileSync(VIEWS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading views data:', error);
    return { posts: {}, metadata: { lastUpdated: new Date().toISOString() } };
  }
}

// Función para calcular si un post es "nuevo"
function isNewPost(createdAt) {
  if (!createdAt) return false;
  const created = new Date(createdAt);
  const now = new Date();
  const daysDiff = (now - created) / (1000 * 60 * 60 * 24);
  return daysDiff <= BADGE_RULES.NEW_DAYS;
}

// Función para calcular vistas recientes (trending)
function getRecentViews(postData, days = BADGE_RULES.TRENDING_DAYS) {
  if (!postData.dailyViews) return 0;

  const now = new Date();
  let recentViews = 0;

  for (let i = 0; i < days; i++) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    recentViews += postData.dailyViews[dateStr] || 0;
  }

  return recentViews;
}

// Función para determinar el badge de un post
function calculateBadge(slug, postData, allPosts) {
  // 1. Verificar si es nuevo (prioridad más alta)
  if (isNewPost(postData.createdAt)) {
    return {
      type: 'new',
      priority: 1,
      views: postData.views || 0,
      recentViews: getRecentViews(postData),
    };
  }

  // 2. Encontrar el post con más vistas para "top"
  const maxViews = Math.max(...Object.values(allPosts).map((p) => p.views || 0));
  if (postData.views === maxViews && maxViews > 0) {
    return {
      type: 'top',
      priority: 2,
      views: postData.views,
      recentViews: getRecentViews(postData),
    };
  }

  // 3. Verificar si es trending
  const recentViews = getRecentViews(postData);
  if (recentViews >= BADGE_RULES.TRENDING_THRESHOLD) {
    return {
      type: 'trending',
      priority: 3,
      views: postData.views || 0,
      recentViews: recentViews,
    };
  }

  // 4. Verificar si es popular
  if ((postData.views || 0) >= BADGE_RULES.POPULAR_THRESHOLD) {
    return {
      type: 'popular',
      priority: 4,
      views: postData.views,
      recentViews: recentViews,
    };
  }

  // 5. Por defecto: imperdible (para posts que no califican para otros badges)
  return {
    type: 'must-read',
    priority: 5,
    views: postData.views || 0,
    recentViews: recentViews,
  };
}

// Función para generar mapeo dinámico de slugs leyendo frontmatters
async function generateSlugMapping() {
  try {
    const fs = await import('fs');
    const matter = await import('gray-matter');
    const path = await import('path');

    const postsDirectory = path.default.join(process.cwd(), 'src', 'posts');
    const slugMapping = {}; // español -> inglés
    const reverseMapping = {}; // inglés -> español

    // Leer archivos en español
    const esDir = path.default.join(postsDirectory, 'es');
    if (fs.default.existsSync(esDir)) {
      const esFiles = fs.default.readdirSync(esDir).filter((file) => file.endsWith('.md'));

      for (const file of esFiles) {
        try {
          const filePath = path.default.join(esDir, file);
          const fileContents = fs.default.readFileSync(filePath, 'utf8');
          const { data: frontmatter } = matter.default(fileContents);

          const esSlug = file.replace(/\.md$/, '');
          const enSlug = frontmatter.englishSlug;

          if (enSlug) {
            slugMapping[esSlug] = enSlug;
            reverseMapping[enSlug] = esSlug;
          }
        } catch (error) {
          console.error(`Error reading ${file}:`, error);
        }
      }
    }

    // Verificar archivos en inglés para completar mapeo
    const enDir = path.default.join(postsDirectory, 'en');
    if (fs.default.existsSync(enDir)) {
      const enFiles = fs.default.readdirSync(enDir).filter((file) => file.endsWith('.md'));

      for (const file of enFiles) {
        try {
          const filePath = path.default.join(enDir, file);
          const fileContents = fs.default.readFileSync(filePath, 'utf8');
          const { data: frontmatter } = matter.default(fileContents);

          const enSlug = file.replace(/\.md$/, '');
          const esSlug = frontmatter.spanishSlug;

          // Solo agregar si no existe ya (prioridad a los archivos ES)
          if (esSlug && !slugMapping[esSlug]) {
            slugMapping[esSlug] = enSlug;
            reverseMapping[enSlug] = esSlug;
          }
        } catch (error) {
          console.error(`Error reading ${file}:`, error);
        }
      }
    }

    return { slugMapping, reverseMapping };
  } catch (error) {
    console.error('Error generating slug mapping:', error);
    // Fallback a mapeo estático si hay error
    return {
      slugMapping: {
        'consejos-utiles-para-configurar-tu-visual-studio-code': 'useful-tips-to-configure-your-visual-studio-code',
        'te-cuento-sobre-mi-juego-favorito-no-mans-sky': 'let-me-tell-you-about-my-favorite-game-no-mans-sky',
      },
      reverseMapping: {
        'useful-tips-to-configure-your-visual-studio-code': 'consejos-utiles-para-configurar-tu-visual-studio-code',
        'let-me-tell-you-about-my-favorite-game-no-mans-sky': 'te-cuento-sobre-mi-juego-favorito-no-mans-sky',
      },
    };
  }
}

// Función para obtener información detallada de posts desde frontmatter
async function getPostDetails() {
  try {
    const fs = await import('fs');
    const matter = await import('gray-matter');
    const path = await import('path');

    const postsDirectory = path.default.join(process.cwd(), 'src', 'posts');
    const postDetails = {};

    // Generar mapeo dinámico
    const { slugMapping } = await generateSlugMapping();

    // Función para obtener slug canónico (siempre usar el inglés como referencia)
    const getCanonicalSlug = (slug) => {
      // Si el slug está en el mapeo (es español), devolver el inglés
      if (slugMapping[slug]) {
        return slugMapping[slug];
      }
      // Si no está en el mapeo, probablemente ya es el slug inglés
      return slug;
    };

    // Leer archivos en español para obtener fechas de publicación
    const esDir = path.default.join(postsDirectory, 'es');
    if (fs.default.existsSync(esDir)) {
      const esFiles = fs.default.readdirSync(esDir).filter((file) => file.endsWith('.md'));

      for (const file of esFiles) {
        try {
          const filePath = path.default.join(esDir, file);
          const fileContents = fs.default.readFileSync(filePath, 'utf8');
          const { data: frontmatter } = matter.default(fileContents);

          const slug = file.replace(/\.md$/, '');
          const canonicalSlug = getCanonicalSlug(slug);

          // Usar slug canónico para unificar tracking
          postDetails[canonicalSlug] = {
            publishedAt: frontmatter.date || new Date().toISOString(),
            title: frontmatter.title,
            category: frontmatter.category,
            slugs: {
              es: slug,
              en: canonicalSlug,
            },
          };
        } catch (error) {
          console.error(`Error reading ${file}:`, error);
        }
      }
    }

    // Leer archivos en inglés para completar información faltante
    const enDir = path.default.join(postsDirectory, 'en');
    if (fs.default.existsSync(enDir)) {
      const enFiles = fs.default.readdirSync(enDir).filter((file) => file.endsWith('.md'));

      for (const file of enFiles) {
        try {
          const filePath = path.default.join(enDir, file);
          const fileContents = fs.default.readFileSync(filePath, 'utf8');
          const { data: frontmatter } = matter.default(fileContents);

          const slug = file.replace(/\.md$/, '');
          const canonicalSlug = getCanonicalSlug(slug);

          // Solo agregar si no existe ya (prioridad a archivos en español para fechas)
          if (!postDetails[canonicalSlug]) {
            postDetails[canonicalSlug] = {
              publishedAt: frontmatter.date || new Date().toISOString(),
              title: frontmatter.title,
              category: frontmatter.category,
              slugs: {
                en: slug,
                es: null, // Se completará si existe
              },
            };
          } else {
            // Completar información del inglés
            postDetails[canonicalSlug].slugs.en = slug;
          }
        } catch (error) {
          console.error(`Error reading ${file}:`, error);
        }
      }
    }

    return postDetails;
  } catch (error) {
    console.error('Error getting post details:', error);
    // Fallback a datos estáticos si hay error
    return {
      'useful-tips-to-configure-your-visual-studio-code': {
        publishedAt: '2025-10-20T00:00:00Z',
        slugs: {
          es: 'consejos-utiles-para-configurar-tu-visual-studio-code',
          en: 'useful-tips-to-configure-your-visual-studio-code',
        },
      },
      'let-me-tell-you-about-my-favorite-game-no-mans-sky': {
        publishedAt: '2025-10-25T00:00:00Z',
        slugs: {
          es: 'te-cuento-sobre-mi-juego-favorito-no-mans-sky',
          en: 'let-me-tell-you-about-my-favorite-game-no-mans-sky',
        },
      },
    };
  }
}

export async function GET(request) {
  try {
    ViewsMonitor.info('Stats API request');

    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    const viewsData = readViewsData();
    const postDetails = await getPostDetails();
    const { slugMapping } = await generateSlugMapping();

    // Función para normalizar slug a canónico usando mapeo dinámico
    const getCanonicalSlug = (inputSlug) => {
      // Si es slug español, convertir a inglés
      if (slugMapping[inputSlug]) {
        return slugMapping[inputSlug];
      }

      // Buscar el slug en los detalles de posts como fallback
      for (const [canonicalSlug, details] of Object.entries(postDetails)) {
        if (details.slugs?.es === inputSlug || details.slugs?.en === inputSlug || canonicalSlug === inputSlug) {
          return canonicalSlug;
        }
      }
      return inputSlug; // Fallback al slug original si no se encuentra
    };

    // Si se solicita un slug específico
    if (slug) {
      const canonicalSlug = getCanonicalSlug(slug);
      const postData = viewsData.posts[canonicalSlug] || { views: 0, dailyViews: {}, weeklyViews: {} };

      // Usar fecha de publicación real o fecha de creación en views
      const publishedAt = postDetails[canonicalSlug]?.publishedAt || postData.createdAt;
      const enrichedPostData = { ...postData, createdAt: publishedAt };

      const badge = calculateBadge(canonicalSlug, enrichedPostData, viewsData.posts);

      return NextResponse.json({
        slug: canonicalSlug,
        originalSlug: slug,
        badge,
        stats: {
          views: postData.views || 0,
          recentViews: getRecentViews(postData),
          dailyViews: postData.dailyViews || {},
          weeklyViews: postData.weeklyViews || {},
        },
      });
    }

    // Si no se especifica slug, devolver badges de todos los posts
    const badges = {};
    const stats = {};

    // Primero, enriquecer datos con fechas de publicación usando slugs canónicos
    const enrichedPosts = {};

    // Procesar posts existentes en viewsData
    Object.keys(viewsData.posts).forEach((postSlug) => {
      const canonicalSlug = getCanonicalSlug(postSlug);
      const postData = viewsData.posts[postSlug];
      const publishedAt = postDetails[canonicalSlug]?.publishedAt || postData.createdAt;
      enrichedPosts[canonicalSlug] = { ...postData, createdAt: publishedAt };
    });

    // Agregar posts que existen en archivos pero no en viewsData
    Object.keys(postDetails).forEach((canonicalSlug) => {
      if (!enrichedPosts[canonicalSlug]) {
        enrichedPosts[canonicalSlug] = {
          views: 0,
          dailyViews: {},
          weeklyViews: {},
          createdAt: postDetails[canonicalSlug].publishedAt,
        };
      }
    });

    // Calcular badges para todos los posts usando slugs canónicos
    Object.keys(enrichedPosts).forEach((canonicalSlug) => {
      const postData = enrichedPosts[canonicalSlug];
      badges[canonicalSlug] = calculateBadge(canonicalSlug, postData, enrichedPosts);
      stats[canonicalSlug] = {
        views: postData.views || 0,
        recentViews: getRecentViews(postData),
        dailyViews: postData.dailyViews || {},
        weeklyViews: postData.weeklyViews || {},
      };
    });

    // Estadísticas globales
    const totalViews = Object.values(enrichedPosts).reduce((sum, post) => sum + (post.views || 0), 0);
    const totalPosts = Object.keys(enrichedPosts).length;

    return NextResponse.json({
      badges,
      stats,
      slugMapping: postDetails, // Incluir mapeo para debugging
      global: {
        totalViews,
        totalPosts,
        lastUpdated: viewsData.metadata?.lastUpdated || new Date().toISOString(),
      },
      rules: BADGE_RULES,
    });
  } catch (error) {
    ViewsMonitor.error('Error in GET /api/views/stats', {
      error: error.message,
      stack: error.stack,
    });
    console.error('Error in GET /api/views/stats:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
