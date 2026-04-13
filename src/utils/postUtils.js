import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Helper function to get post by slug in a specific locale
async function getPostBySlug(slug, locale) {
  try {
    const postsDirectory = path.join(process.cwd(), 'src', 'posts', locale);
    const postPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(postPath)) {
      return null;
    }

    const fileContent = fs.readFileSync(postPath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContent);

    return { frontmatter, content };
  } catch (error) {
    console.error(`Error reading post ${slug} in ${locale}:`, error);
    return null;
  }
}

// Helper function to find cross-language post using slug references
async function getCrossLanguagePost(postData, targetLocale) {
  if (!postData || !postData.frontmatter) return null;

  const { frontmatter } = postData;
  let targetSlug = null;

  // Determine the target slug based on locale
  if (targetLocale === 'en' && frontmatter.englishSlug) {
    targetSlug = frontmatter.englishSlug;
  } else if (targetLocale === 'es' && frontmatter.spanishSlug) {
    targetSlug = frontmatter.spanishSlug;
  }

  if (!targetSlug) return null;

  return await getPostBySlug(targetSlug, targetLocale);
}

export async function getPostData(slug, locale = 'en') {
  try {
    // Primero, intentar buscar el post en el locale solicitado
    let post = await getPostBySlug(slug, locale);
    let actualLocale = locale;

    // Si no se encuentra en el locale solicitado, buscar en el otro locale
    if (!post) {
      const otherLocale = locale === 'en' ? 'es' : 'en';
      post = await getPostBySlug(slug, otherLocale);

      if (!post) {
        throw new Error(`Post not found: ${slug} in any locale`);
      }

      // El post fue encontrado en el otro locale
      // Esto significa que el slug que estamos buscando es en realidad un slug de traducción
      // Por ejemplo: buscamos 'consejos-utiles...' en 'en', pero existe en 'es'
      // Esto está bien, solo actualizamos el actualLocale
      actualLocale = otherLocale;
    }

    // Verificar que el post esté publicado
    if (post.frontmatter.published === false) {
      throw new Error(`Post not published: ${slug}`);
    }

    // Obtener la versión en el otro idioma
    const otherLocale = actualLocale === 'en' ? 'es' : 'en';
    const crossLanguagePost = await getCrossLanguagePost(post, otherLocale);

    // Estructurar la respuesta basándose en el locale original solicitado
    if (locale === 'en') {
      if (actualLocale === 'en') {
        // Post encontrado en inglés
        return {
          frontmatter: post.frontmatter,
          content: post.content,
          spanishFrontmatter: crossLanguagePost?.frontmatter || null,
          spanishContent: crossLanguagePost?.content || null,
        };
      } else {
        // Post encontrado en español, pero se solicitó en inglés
        return {
          frontmatter: crossLanguagePost?.frontmatter || null,
          content: crossLanguagePost?.content || null,
          spanishFrontmatter: post.frontmatter,
          spanishContent: post.content,
        };
      }
    } else {
      if (actualLocale === 'es') {
        // Post encontrado en español
        return {
          frontmatter: crossLanguagePost?.frontmatter || null,
          content: crossLanguagePost?.content || null,
          spanishFrontmatter: post.frontmatter,
          spanishContent: post.content,
        };
      } else {
        // Post encontrado en inglés, pero se solicitó en español
        return {
          frontmatter: post.frontmatter,
          content: post.content,
          spanishFrontmatter: crossLanguagePost?.frontmatter || null,
          spanishContent: crossLanguagePost?.content || null,
        };
      }
    }
  } catch (error) {
    console.error(`Error reading post data for slug: ${slug}`, error);
    throw new Error(`Post not found: ${slug}`);
  }
}

export async function getAllPostsMetadata(locale = 'en') {
  try {
    const postsDirectory = path.join(process.cwd(), 'src', 'posts', locale);
    const filenames = fs.readdirSync(postsDirectory);
    const posts = [];

    for (const filename of filenames) {
      if (filename.endsWith('.md')) {
        try {
          const postPath = path.join(postsDirectory, filename);
          const fileContent = fs.readFileSync(postPath, 'utf-8');
          const { data: frontmatter } = matter(fileContent);

          if (frontmatter.published !== false) {
            posts.push({
              slug: filename.replace('.md', ''),
              date: frontmatter.date || null,
              englishSlug: frontmatter.englishSlug || null,
              spanishSlug: frontmatter.spanishSlug || null,
            });
          }
        } catch (error) {
          console.error(`Error reading file ${filename}:`, error);
        }
      }
    }

    return posts;
  } catch (error) {
    console.error(`Error reading posts directory for ${locale}:`, error);
    return [];
  }
}

export async function getAllPostSlugs(locale = 'en') {
  try {
    const postsDirectory = path.join(process.cwd(), 'src', 'posts', locale);
    const filenames = fs.readdirSync(postsDirectory);

    const publishedSlugs = [];

    for (const filename of filenames) {
      if (filename.endsWith('.md')) {
        try {
          const postPath = path.join(postsDirectory, filename);
          const fileContent = fs.readFileSync(postPath, 'utf-8');
          const { data: frontmatter } = matter(fileContent);

          // Solo incluir si está publicado (si published no está definido, lo consideramos como true por compatibilidad)
          if (frontmatter.published !== false) {
            publishedSlugs.push(filename.replace('.md', ''));
          }
        } catch (error) {
          console.error(`Error reading file ${filename}:`, error);
        }
      }
    }

    return publishedSlugs;
  } catch (error) {
    console.error(`Error reading posts directory for ${locale}:`, error);
    return [];
  }
}

export async function getAllPosts() {
  try {
    const enPostsDirectory = path.join(process.cwd(), 'src', 'posts', 'en');
    const esPostsDirectory = path.join(process.cwd(), 'src', 'posts', 'es');

    // Verificar que los directorios existen
    if (!fs.existsSync(enPostsDirectory)) {
      throw new Error(`English posts directory not found: ${enPostsDirectory}`);
    }

    if (!fs.existsSync(esPostsDirectory)) {
      throw new Error(`Spanish posts directory not found: ${esPostsDirectory}`);
    }

    const categories = [];
    const categoriesSpanish = [];
    const tags = [];
    const tagsSpanish = [];

    // Procesar posts en inglés
    const enFiles = fs.readdirSync(enPostsDirectory);
    const posts = enFiles
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        try {
          const postContent = fs.readFileSync(path.join(enPostsDirectory, file), 'utf8');
          const { data, content } = matter(postContent);

          // Verificar que el post tiene los campos necesarios
          if (!data.title || !data.slug) {
            console.warn(`Post ${file} missing required fields:`, { title: data.title, slug: data.slug });
          }

          // Recopilar categorías y tags únicos
          if (data.category && !categories.includes(data.category)) {
            categories.push(data.category);
          }

          data.tags?.forEach((tag) => {
            if (!tags.includes(tag)) {
              tags.push(tag);
            }
          });

          return {
            frontmatter: data,
            content,
          };
        } catch (fileError) {
          console.error(`Error processing EN file ${file}:`, fileError);
          return null;
        }
      })
      .filter((post) => post !== null && post.frontmatter.published !== false);

    // Procesar posts en español
    const esFiles = fs.readdirSync(esPostsDirectory);

    const spanishPosts = esFiles
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        try {
          const postContent = fs.readFileSync(path.join(esPostsDirectory, file), 'utf8');
          const { data, content } = matter(postContent);

          // Verificar que el post tiene los campos necesarios
          if (!data.title || !data.slug) {
            console.warn(`Post ${file} missing required fields:`, { title: data.title, slug: data.slug });
          }

          // Recopilar categorías y tags únicos para español
          if (data.category && !categoriesSpanish.includes(data.category)) {
            categoriesSpanish.push(data.category);
          }

          data.tags?.forEach((tag) => {
            if (!tagsSpanish.includes(tag)) {
              tagsSpanish.push(tag);
            }
          });

          return {
            frontmatter: data,
            content,
          };
        } catch (fileError) {
          console.error(`Error processing ES file ${file}:`, fileError);
          return null;
        }
      })
      .filter((post) => post !== null && post.frontmatter.published !== false);

    const result = {
      posts,
      spanishPosts,
      categorization: {
        categories,
        categoriesSpanish,
        tags,
        tagsSpanish,
      },
    };

    return result;
  } catch (error) {
    console.error('getAllPosts: Critical error:', error);
    console.error('getAllPosts: Stack trace:', error.stack);

    // Retornar estructura vacía pero válida en caso de error
    return {
      posts: [],
      spanishPosts: [],
      categorization: {
        categories: [],
        categoriesSpanish: [],
        tags: [],
        tagsSpanish: [],
      },
    };
  }
}
