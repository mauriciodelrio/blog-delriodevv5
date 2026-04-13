import { getAllPostsMetadata } from '@/utils/postUtils';

export default async function sitemap() {
  const baseUrl = 'https://delrio.dev';

  // Obtener metadata de todos los posts (slug, date, slugs alternativos)
  const englishPosts = await getAllPostsMetadata('en');
  const spanishPosts = await getAllPostsMetadata('es');

  // URLs estáticas principales
  const staticUrls = [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/en/posts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/es/posts`,
          en: `${baseUrl}/en/posts`,
        },
      },
    },
    {
      url: `${baseUrl}/es/posts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/es/posts`,
          en: `${baseUrl}/en/posts`,
        },
      },
    },
  ];

  // URLs de posts en inglés con fecha real y hreflang al equivalente en español
  const englishPostUrls = englishPosts.map(({ slug, date, spanishSlug }) => ({
    url: `${baseUrl}/en/posts/${slug}`,
    lastModified: date ? new Date(date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
    ...(spanishSlug && {
      alternates: {
        languages: {
          en: `${baseUrl}/en/posts/${slug}`,
          es: `${baseUrl}/es/posts/${spanishSlug}`,
        },
      },
    }),
  }));

  // URLs de posts en español con fecha real y hreflang al equivalente en inglés
  const spanishPostUrls = spanishPosts.map(({ slug, date, englishSlug }) => ({
    url: `${baseUrl}/es/posts/${slug}`,
    lastModified: date ? new Date(date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
    ...(englishSlug && {
      alternates: {
        languages: {
          es: `${baseUrl}/es/posts/${slug}`,
          en: `${baseUrl}/en/posts/${englishSlug}`,
        },
      },
    }),
  }));

  return [...staticUrls, ...englishPostUrls, ...spanishPostUrls];
}

