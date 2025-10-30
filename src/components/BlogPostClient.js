'use client';

import Link from "next/link";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaArrowLeft } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useBlogActions } from '@/hooks/useBlogActions';
import { usePostTracking } from '@/hooks/usePostBadges';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function BlogPostClient({ frontmatter, content, spanishFrontmatter, spanishContent, locale, dictionary }) {
  const params = useParams();
  const { trackView } = usePostTracking();
  
  const {
    contentToRender,
    imgs,
    postData,
    goBack
  } = useBlogActions(frontmatter, content, spanishFrontmatter, spanishContent, locale);

  // Track view when component mounts
  useEffect(() => {
    if (params.slug) {
      // Pequeño delay para asegurar que la página se cargó completamente
      const timer = setTimeout(() => {
        trackView(params.slug);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [params.slug, trackView]);

  const { title, author, category, date, bannerImage, tags } = postData;

  return (
    <>
      <div className="flex flex-wrap justify-center w-full h-max">
        <div className="flex flex-wrap justify-start m-4 mobile:m-0 w-full max-w-[1440px] mobile:text-sm">
          <div className="w-fit max-w-[1440px]">
            <Link 
              className="flex items-center gap-4 text-md mx-8 mobile:mx-2 px-2 py-4 w-fit hover:shadow-md rounded-lg" 
              href={`/${locale}/posts`}
            >
              <FaArrowLeft /> {dictionary.posts.returnToPosts}
            </Link>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center w-full mb-32 h-max">
        <div className="flex flex-wrap justify-center mx-4 mobile:mx-0 w-full max-w-[1440px] px-8">
          <div className="flex flex-wrap flex-row w-auto max-w-[1440px] rounded-lg shadow-md">
            <div 
              className="flex w-full justify-center bg-fixed h-144 mobile:h-80 tablet:h-96 rounded bg-no-repeat bg-contain" 
              style={{ backgroundImage: `url(${bannerImage})` }}
            >
              <div className="flex items-start p-8 w-full bg-gradient-to-b from-gray-100/95 to-gray-100/15 rounded">
                <h1 className="w-full text-7xl mobile:text-5xl font-bold py-4 text-center text-gray-950">
                  {title}
                </h1>
              </div>
            </div>
            
            <div className="p-8 mobile:m-2 mobile:p-0">
              <h2 className="italic text-md">
                {dictionary.posts.author}: {author}
              </h2>
              <h2 className="italic text-md">
                {dictionary.posts.postedIn} {date}
              </h2>
              
              <div className="flex mb-8 pb-8 border-b-2 border-gray-100">
                <h3 className="mt-4 font-bold">
                  {dictionary.posts.category}: 
                  <span className="bg-gray-200/50 text-gray-950 p-2 m-2 rounded font-medium">
                    {category}
                  </span>
                </h3>
                <h3 className="mt-4 font-bold">
                  {dictionary.posts.tags}: 
                  {tags && tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-200/50 text-gray-950 p-2 m-2 rounded font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </h3>
              </div>
              
              <Markdown className="prose" remarkPlugins={[remarkGfm]}>
                {contentToRender}
              </Markdown>
              
              <div className="mobile:max-w-[300px] mt-16">
                {imgs && imgs.length > 0 && (
                  <Carousel
                    showArrows={true}
                    autoPlay
                    interval={5000}
                    infiniteLoop
                  >
                    {imgs}
                  </Carousel>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}