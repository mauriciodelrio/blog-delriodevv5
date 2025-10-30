'use client';

import { useState, useEffect } from 'react';

export function usePostsActions(posts, spanishPosts, categorization, locale) {
  // Determinar contenido inicial basado en el locale
  const initialPosts = locale === 'es' ? spanishPosts : posts;
  const initialCategorization = {
    categories: locale === 'es' ? categorization.categoriesSpanish : categorization.categories,
    tags: locale === 'es' ? categorization.tagsSpanish : categorization.tags,
  };

  const [contentToRender, setContentToRender] = useState(initialPosts);
  const [categorizationToRender, setCategorizationToRender] = useState(initialCategorization);
  const [showCategories, setShowCategories] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [changedOrder, setChangedOrder] = useState(true);

  // Actualizar contenido cuando cambie el locale
  useEffect(() => {
    const newPosts = locale === 'es' ? spanishPosts : posts;
    const newCategorization = {
      categories: locale === 'es' ? categorization.categoriesSpanish : categorization.categories,
      tags: locale === 'es' ? categorization.tagsSpanish : categorization.tags,
    };
    
    setContentToRender(newPosts);
    setCategorizationToRender(newCategorization);
    setSelectedCategories([]);
    setSelectedTags([]);
  }, [locale, posts, spanishPosts, categorization]);

  const selectTag = (tag) => {
    let newTags = [];
    let filteredPosts = [];
    let ids = [];

    const currentPosts = locale === 'es' ? spanishPosts : posts;

    if (!selectedTags.includes(tag)) {
      newTags = [...selectedTags, tag];
      setSelectedTags([...selectedTags, tag]);
      
      newTags.forEach(tag =>
        currentPosts.forEach(post => {
          post.frontmatter.tags.includes(tag) && filteredPosts.push(post);
        })
      );
      
      ids = filteredPosts.map(post => post.frontmatter.title);
      filteredPosts = filteredPosts.filter(({ frontmatter }, index) => 
        !ids.includes(frontmatter.title, index + 1)
      );
      setContentToRender(filteredPosts);
    } else {
      newTags = selectedTags.filter(t => t !== tag);
      
      if (newTags.length === 0) {
        setSelectedTags([]);
        setContentToRender(currentPosts);
        return;
      }
      
      setSelectedTags(selectedTags.filter(t => t !== tag));
      
      newTags.forEach(tag =>
        currentPosts.forEach(post => {
          post.frontmatter.tags.includes(tag) && filteredPosts.push(post);
        })
      );
      
      ids = filteredPosts.map(post => post.frontmatter.title);
      filteredPosts = filteredPosts.filter(({ frontmatter }, index) => 
        !ids.includes(frontmatter.title, index + 1)
      );
      setContentToRender(filteredPosts);
    }
  };

  const selectCategory = (category) => {
    const filteredPosts = [];
    const currentPosts = locale === 'es' ? spanishPosts : posts;
    
    if (selectedCategories.includes(category)) {
      setSelectedCategories([]);
      setContentToRender(currentPosts);
      setShowCategories(false);
      return;
    } else {
      setSelectedCategories([category]);
      
      currentPosts.forEach(post => {
        post.frontmatter.category === category && filteredPosts.push(post);
      });
      
      setShowCategories(false);
      setContentToRender(filteredPosts);
    }
  };

  const handleClickCategories = () => {
    setShowCategories(!showCategories);
    setShowTags(false);
  };

  const handleClickTags = () => {
    setShowTags(!showTags);
    setShowCategories(false);
  };

  const closeAllBoxes = () => {
    setShowCategories(false);
    setShowTags(false);
  };

  const handleOrder = () => {
    const ordered = [...contentToRender];
    
    if (!changedOrder) {
      ordered.sort((a, b) => {
        return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
      });
    } else {
      ordered.sort((a, b) => {
        return new Date(a.frontmatter.date) - new Date(b.frontmatter.date);
      });
    }
    
    setContentToRender(ordered);
    setChangedOrder(!changedOrder);
  };

  const clearAllFilters = () => {
    const currentPosts = locale === 'es' ? spanishPosts : posts;
    setSelectedCategories([]);
    setSelectedTags([]);
    setContentToRender(currentPosts);
    setShowCategories(false);
    setShowTags(false);
    // Mantener el orden actual
  };

  return {
    contentToRender,
    categorizationToRender,
    showCategories,
    showTags,
    selectedTags,
    selectedCategories,
    changedOrder,
    selectTag,
    selectCategory,
    handleClickCategories,
    handleClickTags,
    closeAllBoxes,
    handleOrder,
    clearAllFilters
  };
}