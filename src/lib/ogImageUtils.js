/**
 * Utility para generar URLs de imágenes OpenGraph dinámicas
 */

export function generateOGImageUrl({
  locale = 'en',
  type = 'home',
  title = null,
  date = null,
  baseUrl = process.env.local ? 'http://localhost:3000' : 'https://delrio.dev',
}) {
  const params = new URLSearchParams({
    locale,
    type,
  });

  if (title) {
    params.append('title', title);
  }

  if (date) {
    params.append('date', date);
  }

  return `${baseUrl}/api/og?${params.toString()}`;
}

/**
 * Helper para posts de blog
 */
export function generatePostOGImage({
  title,
  date,
  locale = 'en',
  baseUrl = process.env.local ? 'http://localhost:3000' : 'https://delrio.dev',
}) {
  return generateOGImageUrl({
    locale,
    type: 'post',
    title,
    date,
    baseUrl,
  });
}

/**
 * Helper para homepage
 */
export function generateHomeOGImage({
  locale = 'en',
  baseUrl = process.env.local ? 'http://localhost:3000' : 'https://delrio.dev',
}) {
  return generateOGImageUrl({
    locale,
    type: 'home',
    baseUrl,
  });
}
