import { getAllPostSlugs } from '@/utils/postUtils';

export default async function sitemap() {
  const baseUrl = 'https://delrio.dev';
  
  // Obtener todos los slugs de posts
  const englishSlugs = await getAllPostSlugs('en');
  const spanishSlugs = await getAllPostSlugs('es');
  
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
  
  // URLs de posts en inglés
  const englishPostUrls = englishSlugs.map((slug) => ({
    url: `${baseUrl}/en/posts/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  
  // URLs de posts en español
  const spanishPostUrls = spanishSlugs.map((slug) => ({
    url: `${baseUrl}/es/posts/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  
  return [...staticUrls, ...englishPostUrls, ...spanishPostUrls];
}