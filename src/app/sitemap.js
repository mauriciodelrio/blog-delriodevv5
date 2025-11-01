import { getAllPosts } from '@/lib/markdownReader';

export default function sitemap() {
  const baseUrl = 'https://delrio.dev';
  
  // Obtener todos los posts para incluir en el sitemap
  const { posts: englishPosts } = getAllPosts('en');
  const { posts: spanishPosts } = getAllPosts('es');
  
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
  const englishPostUrls = englishPosts.map((post) => ({
    url: `${baseUrl}/en/posts/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: 'monthly',
    priority: 0.7,
    alternates: {
      languages: {
        en: `${baseUrl}/en/posts/${post.slug}`,
        es: post.frontmatter.spanishSlug 
          ? `${baseUrl}/es/posts/${post.frontmatter.spanishSlug}`
          : undefined,
      },
    },
  }));
  
  // URLs de posts en español
  const spanishPostUrls = spanishPosts.map((post) => ({
    url: `${baseUrl}/es/posts/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: 'monthly',
    priority: 0.7,
    alternates: {
      languages: {
        es: `${baseUrl}/es/posts/${post.slug}`,
        en: post.frontmatter.englishSlug 
          ? `${baseUrl}/en/posts/${post.frontmatter.englishSlug}`
          : undefined,
      },
    },
  }));
  
  return [...staticUrls, ...englishPostUrls, ...spanishPostUrls];
}