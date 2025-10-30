import { getPostData, getAllPostSlugs } from '@/utils/postUtils';
import BlogPostClient from '@/components/BlogPostClient';
import { getDictionary } from '@/lib/i18n';

// Generate static params for all post slugs in all locales
export async function generateStaticParams() {
  const params = [];
  const locales = ['en', 'es'];
  
  for (const locale of locales) {
    const slugs = await getAllPostSlugs(locale);
    slugs.forEach(slug => {
      params.push({ locale, slug });
    });
  }
  
  return params;
}

// Server Component - maneja la lógica del servidor
export default async function PostPage({ params }) {
  const { locale, slug } = params;
  const dict = getDictionary(locale);
  
  try {
    const { frontmatter, content, spanishFrontmatter, spanishContent } = await getPostData(slug, locale);
    
    return (
      <BlogPostClient
        frontmatter={frontmatter}
        content={content}
        spanishFrontmatter={spanishFrontmatter}
        spanishContent={spanishContent}
        locale={locale}
        dictionary={dict}
      />
    );
  } catch (error) {
    console.error('Error loading post:', error);
    return (
      <div className="flex flex-wrap justify-center w-full h-max p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {dict.posts.notFound}
          </h1>
          <p>
            {dict.posts.notFoundDescription}
          </p>
        </div>
      </div>
    );
  }
}

// Generar metadata para SEO (reemplaza getStaticProps para metadata)
export async function generateMetadata({ params }) {
  const { locale, slug } = params;
  
  try {
    const { frontmatter, spanishFrontmatter } = await getPostData(slug, locale);
    const postData = locale === 'es' ? spanishFrontmatter : frontmatter;
    
    return {
      title: postData.title + ' | DelRio Dev',
      description: postData.excerpt || `Blog post about ${postData.category}`,
      authors: [{ name: postData.author }],
      keywords: postData.tags || [],
      openGraph: {
        title: postData.title,
        description: postData.excerpt || `Blog post about ${postData.category}`,
        images: postData.bannerImage ? [postData.bannerImage] : [],
        type: 'article',
        publishedTime: postData.date,
        authors: [postData.author],
        locale: locale === 'en' ? 'en_US' : 'es_ES',
      },
      alternates: {
        canonical: `/${locale}/posts/${slug}`,
        languages: {
          'en': `/en/posts/${slug}`,
          'es': `/es/posts/${slug}`,
        },
      },
    };
  } catch (error) {
    const dict = getDictionary(locale);
    return {
      title: dict.metadata.postNotFound,
      description: dict.metadata.postNotFoundDescription,
    };
  }
}