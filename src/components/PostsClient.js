'use client';
import Link from 'next/link';
import { MdGTranslate } from "react-icons/md";
import Card from '@/components/Card';
import { usePostsActions } from '@/hooks/usePostsActions';

export default function PostsClient({ posts, spanishPosts, categorization, locale, dictionary }) {
  const {
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
  } = usePostsActions(posts, spanishPosts, categorization, locale);

  const CategoryBox = ({ categories }) => {
    return (
      <div className="z-10 fixed mt-2 rounded-lg shadow-md p-1 bg-white">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className={`justify-start w-full max-w-[250px] hover:bg-gray-100 py-2 px-4 cursor-pointer ${
              selectedCategories.includes(category) ? 'bg-gray-100' : 'bg-white'
            }`}
          >
            <div className="my-2" onClick={() => selectCategory(category)}>
              <p className="text-md">{category}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const TagBox = ({ tags }) => {
    return (
      <div className="z-10 fixed mt-2 rounded-lg shadow-md p-1 bg-white">
        {tags.map((tag, index) => (
          <div 
            key={index} 
            className={`justify-start w-full max-w-[250px] hover:bg-gray-100 py-2 px-4 cursor-pointer ${
              selectedTags.includes(tag) ? 'bg-gray-100' : 'bg-white'
            }`} 
            onClick={() => selectTag(tag)}
          >
            <div className="my-2">
              <p className="text-md">{tag}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {(showCategories || showTags) && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-transparent z-10" 
          onClick={closeAllBoxes}
        />
      )}
      
      <div className="flex flex-col w-full justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16 relative" style={{maxWidth: '1440px'}}>
        <div className="flex flex-col tablet:flex-row tablet:justify-between tablet:items-center w-full mb-8 bg-gray-50 rounded-lg p-6 gap-4">
          <div className="flex flex-col mobile:flex-row mobile:flex-wrap items-start mobile:items-center gap-4">
            <h2 className="text-xl font-bold mobile:text-lg">
              {dictionary.posts.filters} 
            </h2>
            
            <div className="flex flex-wrap gap-4">
              <button 
                className="flex items-center gap-2 text-sm px-4 py-2 hover:bg-white hover:shadow-md rounded-lg transition-all duration-200 bg-white/50" 
                onClick={handleClickCategories}
              >
                {dictionary.posts.byCategory}
              </button>
              {showCategories && <CategoryBox categories={categorizationToRender.categories} />}
              
              <button 
                className="flex items-center gap-2 text-sm px-4 py-2 hover:bg-white hover:shadow-md rounded-lg transition-all duration-200 bg-white/50" 
                onClick={handleClickTags}
              >
                {dictionary.posts.byTag}
              </button>
              {showTags && <TagBox tags={categorizationToRender.tags} />}
              
              {(selectedCategories.length > 0 || selectedTags.length > 0) && (
                <button 
                  className="flex items-center gap-2 text-sm px-4 py-2 hover:bg-white hover:shadow-md rounded-lg transition-all duration-200 bg-white/70 border border-gray-200" 
                  onClick={clearAllFilters}
                >
                  {dictionary.posts.clearFilters}
                </button>
              )}
            </div>
          </div>
          
          <div className="flex flex-col mobile:flex-row mobile:items-center gap-4">
            <h3 className="text-lg font-semibold mobile:text-base">
              {dictionary.posts.orderBy}
            </h3>
            <button 
              className="flex items-center gap-2 text-sm px-4 py-2 hover:bg-white hover:shadow-md rounded-lg transition-all duration-200 bg-white/50" 
              onClick={handleOrder}
            >
              {!changedOrder ? 
                dictionary.posts.newestFirst : 
                dictionary.posts.oldestFirst
              }
            </button>
          </div>
        </div>
        
        <div className="grid gap-8 w-full mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 justify-center">
          <Card posts={contentToRender} locale={locale} />
        </div>
      </div>
    </>
  );
}