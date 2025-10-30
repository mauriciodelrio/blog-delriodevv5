'use client';
import { useState, useEffect } from 'react';

export function useBlogActions(frontmatter, content, spanishFrontmatter, spanishContent, locale) {
  // Determinar contenido inicial basado en el locale
  const initialContent = locale === 'es' ? spanishContent : content;
  const initialFrontmatter = locale === 'es' ? spanishFrontmatter : frontmatter;
  
  const [contentToRender, setContentToRender] = useState(initialContent);
  const [frontmatterToRender, setFrontmatterToRender] = useState(initialFrontmatter);
  const [imgs, setImgs] = useState([]);

  const { title, author, category, date, bannerImage, tags, images } = frontmatterToRender;

  // Effect para manejar las imágenes
  useEffect(() => {
    if (images && images.length > 0) {
      const imageElements = images.split(",").map((img, index) => (
        <div key={index}>
          <img src={img} className="w-fit h-auto" alt={`Image ${index + 1}`} />
        </div>
      ));
      setImgs(imageElements);
    }
  }, [images]);

  // Actualizar contenido cuando cambie el locale
  useEffect(() => {
    if (locale === 'es') {
      setContentToRender(spanishContent);
      setFrontmatterToRender(spanishFrontmatter);
    } else {
      setContentToRender(content);
      setFrontmatterToRender(frontmatter);
    }
  }, [locale, content, spanishContent, frontmatter, spanishFrontmatter]);

  return {
    contentToRender,
    frontmatterToRender,
    imgs,
    postData: {
      title,
      author,
      category,
      date,
      bannerImage,
      tags
    },
    translationSlugs: {
      englishSlug: frontmatter?.slug || spanishFrontmatter?.englishSlug,
      spanishSlug: spanishFrontmatter?.slug || frontmatter?.spanishSlug
    },
    goBack: () => window.history.back()
  };
}