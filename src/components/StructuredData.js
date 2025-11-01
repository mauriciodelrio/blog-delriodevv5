'use client';

export default function StructuredData({ type = 'website', data = {} }) {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
    };

    switch (type) {
      case 'website':
        return {
          ...baseData,
          '@type': 'WebSite',
          name: 'DelRio Dev',
          alternateName: 'Mauricio Del Río Blog',
          url: 'https://delrio.dev',
          description: 'Senior Web Developer blog about React, Next.js, Node.js, and modern web technologies',
          inLanguage: ['en', 'es'],
          author: {
            '@type': 'Person',
            name: 'Mauricio Del Río',
            url: 'https://delrio.dev',
            jobTitle: 'Senior Web Developer',
            worksFor: {
              '@type': 'Organization',
              name: 'Globant',
            },
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://delrio.dev/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
          ...data,
        };
      
      case 'person':
        return {
          ...baseData,
          '@type': 'Person',
          name: 'Mauricio Del Río Zorrilla',
          alternateName: 'Mauricio Del Río',
          url: 'https://delrio.dev',
          image: 'https://delrio.dev/profile-image.jpg',
          jobTitle: 'Senior Web Developer & Technical Lead',
          description: 'Senior Web Developer with 9+ years of experience in React, Next.js, Node.js, and modern web technologies',
          worksFor: {
            '@type': 'Organization',
            name: 'Globant',
            url: 'https://www.globant.com/',
          },
          knowsAbout: [
            'JavaScript',
            'React',
            'Next.js',
            'Node.js',
            'TypeScript',
            'Web Development',
            'Frontend Architecture',
            'Team Leadership',
            'Agile Methodologies',
          ],
          alumniOf: [
            {
              '@type': 'Organization',
              name: 'Universidad Técnica Federico Santa María',
            },
            {
              '@type': 'Organization',
              name: 'Universidad de Santiago de Chile',
            },
          ],
          nationality: {
            '@type': 'Country',
            name: 'Chile',
          },
          ...data,
        };
      
      case 'blog':
        return {
          ...baseData,
          '@type': 'Blog',
          name: 'DelRio Dev Blog',
          description: 'Tech blog about web development, React, Next.js, and programming best practices',
          url: 'https://delrio.dev/posts',
          inLanguage: ['en', 'es'],
          author: {
            '@type': 'Person',
            name: 'Mauricio Del Río',
            url: 'https://delrio.dev',
          },
          publisher: {
            '@type': 'Person',
            name: 'Mauricio Del Río',
            url: 'https://delrio.dev',
          },
          ...data,
        };
      
      case 'article':
        return {
          ...baseData,
          '@type': 'BlogPosting',
          headline: data.title,
          description: data.description,
          image: data.image,
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          author: {
            '@type': 'Person',
            name: 'Mauricio Del Río',
            url: 'https://delrio.dev',
          },
          publisher: {
            '@type': 'Person',
            name: 'Mauricio Del Río',
            url: 'https://delrio.dev',
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data.url,
          },
          keywords: data.keywords,
          inLanguage: data.language || 'en',
          ...data,
        };
      
      default:
        return baseData;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
    />
  );
}