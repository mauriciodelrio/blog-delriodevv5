'use client';

import Link from "next/link";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaArrowLeft, FaUser, FaCalendarAlt, FaHashtag } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useBlogActions } from '@/hooks/useBlogActions';
import { usePostBadges } from '@/hooks/usePostBadges';
import { useImageColors } from '@/hooks/useImageColors';
import { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';

export default function BlogPostClient({ frontmatter, content, spanishFrontmatter, spanishContent, locale, dictionary }) {
  const params = useParams();
  const { trackView } = usePostBadges(); // Cambiar a usar el hook principal
  const hasTrackedView = useRef(false);
  const trackingTimeoutRef = useRef(null);
  
  const {
    contentToRender,
    imgs,
    postData,
    goBack
  } = useBlogActions(frontmatter, content, spanishFrontmatter, spanishContent, locale);

  const { title, author, category, date, bannerImage, tags } = postData;
  
  // Extraer colores dinámicos de la imagen
  const { colors, gradientStyle, textColors, isLoading } = useImageColors(bannerImage);

  // Track view when component mounts
  useEffect(() => {
    const sessionKey = `tracked-${params.slug}`;
    const hasTrackedInSession = typeof window !== 'undefined' && 
                                sessionStorage.getItem(sessionKey) === 'true';
    
    if (params.slug && !hasTrackedView.current && !hasTrackedInSession) {
      hasTrackedView.current = true;
      
      // Marcar en sessionStorage para persistir entre re-mounts
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(sessionKey, 'true');
      }
      
      // Limpiar timeout anterior si existe
      if (trackingTimeoutRef.current) {
        clearTimeout(trackingTimeoutRef.current);
      }
      
      // Pequeño delay para asegurar que la página se cargó completamente
      trackingTimeoutRef.current = setTimeout(() => {
        trackView(params.slug);
      }, 1000);

      return () => {
        if (trackingTimeoutRef.current) {
          clearTimeout(trackingTimeoutRef.current);
          trackingTimeoutRef.current = null;
        }
      };
    }
  }, [params.slug, trackView]); // Incluir trackView que es estable por useCallback

  // Estilo de gradiente dinámico o fallback whisper-suave
  const overlayStyle = gradientStyle || {
    background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.4), rgba(91, 33, 182, 0.3), rgba(17, 24, 39, 0.45))'
  };

  return (
    <>
      <div className="flex flex-wrap justify-center w-full h-max">
        <div className="flex flex-wrap justify-start m-4 mobile:m-0 w-full max-w-[1280px] mobile:text-sm">
          <div className="w-fit max-w-[1280px] mt-1 mb-1">
            <Link 
              className="flex items-center gap-4 text-md mx-4 mobile:mx-2 px-2 py-3 w-fit hover:shadow-md rounded-lg" 
              href={`/${locale}/posts`}
            >
              <FaArrowLeft /> {dictionary.posts.returnToPosts}
            </Link>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center w-full mb-32 h-max">
        <div className="flex flex-wrap justify-center desktop:mx-4 mobile:mx-0 w-full max-w-[1280px] mobile:px-2 tablet:px-4 desktop:px-12">
          <div className="flex flex-wrap flex-row w-auto max-w-[1280px] rounded-lg shadow-md">
            <div 
              className="flex w-full justify-center bg-fixed h-144 mobile:h-80 tablet:h-96 desktop:h-144 rounded bg-no-repeat bg-cover bg-center relative overflow-hidden" 
              style={{ backgroundImage: `url(${bannerImage})` }}
            >
              {/* Overlay con gradiente dinámico basado en la imagen */}
              <div 
                className="absolute inset-0 transition-all duration-1000"
                style={overlayStyle}
              ></div>
              
              {/* Patrón de dots para textura */}
              <div className="absolute inset-0 opacity-20" 
                   style={{
                     backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                     backgroundSize: '20px 20px'
                   }}>
              </div>
              
              <div className="relative flex items-center justify-center desktop:p-8 mobile:p-4 w-full">
                <div className="text-center">
                  {/* Badge/Category pequeño arriba */}
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform">
                      {category}
                    </span>
                  </div>
                  
                  {/* Título principal con colores dinámicos */}
                  <h1 className={`w-full desktop:text-6xl mobile:text-4xl tablet:text-5xl font-black desktop:py-4 text-center bg-gradient-to-r bg-clip-text text-transparent drop-shadow-2xl leading-tight ${gradientStyle ? `from-white via-blue-100 to-purple-100` : `${textColors.titleGradient || 'from-white via-blue-100 to-purple-100'}`}`}>
                    {title}
                  </h1>
                  
                  {/* Subtítulo/metadata con colores adaptativos */}
                  <div className={`mt-6 flex flex-wrap items-center justify-center gap-4 ${textColors.secondary}`}>
                    <span className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                      <FaUser className={`${textColors.accent || 'text-blue-300'}`} /> {author}
                    </span>
                    <span className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                      <FaCalendarAlt className={`${textColors.accent || 'text-purple-300'}`} /> {date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 mobile:m-2 mobile:p-4 flex flex-col w-full flex-1 justify-center items-center">
              {/* Tags section con mejor diseño */}
              <div className="flex flex-wrap items-center justify-between mb-8 pb-6 border-b border-gradient-to-r from-blue-200 to-purple-200">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                    <FaHashtag className={`${textColors.accent || 'text-blue-500'}`} />
                    Tags:
                  </span>
                  {tags && tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium border border-blue-200 hover:shadow-md transition-shadow"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <Markdown className="prose desktop:mx-20" remarkPlugins={[remarkGfm]}>
                {contentToRender}
              </Markdown>
              
              <div className="mobile:max-w-[300px] desktop:max-w-[750px] flex flex-wrap justify-center mt-16">
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