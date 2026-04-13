/**
 * Obtiene los datos del frontmatter de un post desde el cliente
 * @param {string} slug - El slug del post
 * @param {string} locale - El idioma ('en' o 'es')
 * @returns {Promise<Object|null>} - Los datos del frontmatter o null si no existe
 */
async function getPostFrontmatter(slug, locale) {
  try {
    // Hacer una petición al API route que creamos para obtener datos del post
    const response = await fetch(`/api/posts/${slug}?locale=${locale}`);

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.frontmatter;
  } catch (error) {
    console.warn(`Could not fetch post data for slug: ${slug}`, error);
    return null;
  }
}

/**
 * Obtiene el slug de traducción para un post dado
 * @param {string} currentSlug - El slug actual del post
 * @param {string} currentLocale - El idioma actual ('en' o 'es')
 * @param {string} targetLocale - El idioma objetivo ('en' o 'es')
 * @returns {string|null} - El slug traducido o null si no existe
 */
export async function getTranslatedSlug(currentSlug, currentLocale, targetLocale) {
  try {
    // Obtener los datos del post actual
    const frontmatter = await getPostFrontmatter(currentSlug, currentLocale);

    if (!frontmatter) {
      return null;
    }

    // Determinar el slug de traducción basado en el idioma objetivo
    if (targetLocale === 'es' && frontmatter.spanishSlug) {
      return frontmatter.spanishSlug;
    } else if (targetLocale === 'en' && frontmatter.englishSlug) {
      return frontmatter.englishSlug;
    }

    return null;
  } catch (error) {
    console.warn(`Could not find translation for slug: ${currentSlug}`, error);
    return null;
  }
}

/**
 * Construye la URL de traducción para un post
 * @param {string} currentPath - La ruta actual
 * @param {string} targetLocale - El idioma objetivo
 * @returns {Promise<string>} - La nueva URL con el slug traducido
 */
export async function buildTranslatedUrl(currentPath, targetLocale) {
  // Extraer información de la ruta actual
  const pathSegments = currentPath.split('/').filter(Boolean);

  // Verificar si estamos en una página de post
  if (pathSegments.length >= 3 && pathSegments[1] === 'posts') {
    const currentLocale = pathSegments[0];
    const currentSlug = pathSegments[2];

    // Obtener el slug traducido
    const translatedSlug = await getTranslatedSlug(currentSlug, currentLocale, targetLocale);

    if (translatedSlug) {
      return `/${targetLocale}/posts/${translatedSlug}`;
    }
  }

  // Si no es una página de post o no hay traducción, usar la URL básica
  const nonLocaleSegments = pathSegments.slice(1); // Remover el locale actual
  return `/${targetLocale}/${nonLocaleSegments.join('/')}`;
}
