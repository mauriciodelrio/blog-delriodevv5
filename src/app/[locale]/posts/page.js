import { getAllPosts } from '@/utils/postUtils';
import PostsClient from '@/components/PostsClient';
import { getDictionary } from '@/lib/i18n';

// Server Component - maneja la lógica del servidor
export default async function PostsPage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  
  try {
    const { posts, spanishPosts, categorization } = await getAllPosts();
    
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
    console.error('Error loading posts:', error);
    return (
      <div className="flex flex-wrap justify-center w-full h-max p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {locale === 'es' ? 'Error cargando posts' : 'Error loading posts'}
          </h1>
          <p>
            {locale === 'es' 
              ? 'Hubo un error cargando los posts del blog. Por favor intenta más tarde.' 
              : 'There was an error loading the blog posts. Please try again later.'
            }
          </p>
        </div>
      </div>
    );
  }
}

// Generar metadata para SEO
export async function generateMetadata({ params }) {
  const { locale } = params;
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
          'en': '/en/posts',
          'es': '/es/posts',
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