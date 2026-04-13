import { getAllPosts } from '@/utils/postUtils';
import PostsClient from '@/components/PostsClient';
import { getDictionary } from '@/lib/i18n';

// Server Component - maneja la lógica del servidor
export default async function PostsPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  try {
    const { posts, spanishPosts, categorization } = await getAllPosts();

    // Verificar si hay posts disponibles
    const currentPosts = locale === 'es' ? spanishPosts : posts;

    if (currentPosts.length === 0) {
      return (
        <div className="flex flex-wrap justify-center w-full h-max p-8">
          <div className="text-center max-w-2xl">
            <h1 className="text-3xl font-bold mb-4">
              {locale === 'es' ? 'No hay posts disponibles' : 'No posts available'}
            </h1>
            <p className="text-gray-600 mb-4">
              {locale === 'es'
                ? 'No se encontraron posts del blog. Esto puede ser un problema temporal.'
                : 'No blog posts were found. This might be a temporary issue.'}
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-left">
              <p className="text-sm text-gray-700">
                <strong>Debug info:</strong>
                <br />• Total EN posts: {posts.length}
                <br />• Total ES posts: {spanishPosts.length}
                <br />• Current locale: {locale}
              </p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <PostsClient
        posts={posts}
        spanishPosts={spanishPosts}
        categorization={categorization}
        locale={locale}
        dictionary={dict}
      />
    );
  } catch (error) {
    return (
      <div className="flex flex-wrap justify-center w-full h-max p-8">
        <div className="text-center max-w-2xl">
          <h1 className="text-2xl font-bold mb-4">
            {locale === 'es' ? 'Error cargando posts' : 'Error loading posts'}
          </h1>
          <p className="text-gray-600 mb-4">
            {locale === 'es'
              ? 'Hubo un error cargando los posts del blog. Por favor intenta más tarde.'
              : 'There was an error loading the blog posts. Please try again later.'}
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-left">
            <p className="text-sm text-gray-700">
              <strong>Error details:</strong>
              <br />
              {error.message}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

// Generar metadata para SEO
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  try {
    return {
      title: dict.posts.title + ' | DelRio Dev',
      description: dict.metadata.description,
      keywords: dict.metadata.keywords.split(', '),
      openGraph: {
        title: dict.posts.title + ' | DelRio Dev',
        description: dict.metadata.description,
        type: 'website',
        locale: locale === 'en' ? 'en_US' : 'es_ES',
      },
      alternates: {
        canonical: `/${locale}/posts`,
        languages: {
          en: '/en/posts',
          es: '/es/posts',
        },
      },
    };
  } catch (error) {
    return {
      title: dict.posts.title + ' | DelRio Dev',
      description: dict.metadata.description,
    };
  }
}
