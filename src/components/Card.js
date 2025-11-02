import React from "react";
import Link from "next/link";
import { CardBadge } from '@/components/Badge';

const Card = ({posts, locale, getBadge, badgesLoading}) => {
  return (
    <> 
      {posts.map((post, index) => {
        const badge = getBadge ? getBadge(post.frontmatter.slug) : null;
        
        return (
          <div className="h-[420px] w-full" key={index}>
            <article className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col relative">
              {/* Badge - Only show if not loading and badge exists */}
              {!badgesLoading && badge && (
                <CardBadge type={badge.type} locale={locale} />
              )}
              
              <Link href={`/${locale}/posts/${post.frontmatter.slug}`} className="block h-full flex flex-col">
                {/* Image Section - Fixed Height */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100 flex-shrink-0">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{backgroundImage: `url(${post.frontmatter.bannerImage})`}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content Section - Remaining Height */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Category Badge */}
                  {post.frontmatter.category && (
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                        {post.frontmatter.category}
                      </span>
                    </div>
                  )}
                  
                  {/* Title - Fixed Height */}
                  <div className="mb-2">
                    <h2 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                      {post.frontmatter.title}
                    </h2>
                  </div>
                  
                  {/* Date - Fixed Height */}
                  <div className="mb-2">
                    <p className="text-sm text-gray-500">
                      {locale === 'es' ? "Publicado el" : "Published on"} {post.frontmatter.date}
                    </p>
                  </div>
                  
                  {/* Overview - Flexible Height */}
                  <div className="flex-1 mb-4">
                    <div className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      {post.frontmatter.overview}
                    </div>
                  </div>
                  
                  {/* Read More - Fixed at bottom */}
                  <div className="pt-2 flex items-center border-t border-gray-100">
                    <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                      {locale === 'es' ? 'Leer más →' : 'Read more →'}
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          </div>
        );
      })}
    </>
  );
};

export default Card;