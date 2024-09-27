import fs from "fs";
import React from "react";
import matter from 'gray-matter';
import { MdGTranslate } from "react-icons/md";
import Card from "../../app/components/Card";

export default function Posts({ posts, spanishPosts, categorization }) {  // Render the posts
  const [translated, setTranslated] = React.useState(false)
  const [contentToRender, setContentToRender] = React.useState(posts)
  const [categorizationToRender, setCategorizationToRender] = React.useState(categorization)
  const [showCategories, setShowCategories] = React.useState(false)
  const [showTags, setShowTags] = React.useState(false)
  const [selectedTags, setSelectedTags] = React.useState([])
  const [selectedCategories, setSelectedCategories] = React.useState([])
  const [changedOrder, setChangedOrder] = React.useState(true)

  const CategoryBox = ({categories}) => {
    return (
      <div className="z-10 fixed mt-2 rounded-lg shadow-md p-1 bg-white">
        {categories.map((category, index) => (
          <div key={index} className={`justify-start w-full max-w-[250px] hover:bg-gray-100 py-2 px-4 cursor-pointer ${selectedCategories.includes(category) ? 'bg-gray-100' : 'bg-white'}`}>
            <div className="my-2" onClick={() => selectCategory(category)}>
                <p className="text-md">{category}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const TagBox = ({tags}) => {
    return (
      <div className="z-10 fixed mt-2 rounded-lg shadow-md p-1 bg-white">
        {tags.map((tag, index) => (
          <div key={index} className={`justify-start w-full max-w-[250px] hover:bg-gray-100 py-2 px-4 cursor-pointer ${selectedTags.includes(tag) ? 'bg-gray-100' : 'bg-white'}`} onClick={() => selectTag(tag)}>
            <div className="my-2">
                <p className="text-md">{tag}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const selectTag = (tag) => {
    let newTags = []
    let filteredPosts = []
    let ids = []
    if(!selectedTags.includes(tag)) {
      newTags = [...selectedTags, tag]
      setSelectedTags([...selectedTags, tag])
      if(translated == true) {
        newTags.forEach(tag =>
          spanishPosts.forEach(post => {
            post.frontmatter.tags.includes(tag) && filteredPosts.push(post)
        }))
      } else {
        newTags.forEach(tag =>
          posts.forEach(post => {
            post.frontmatter.tags.includes(tag) && filteredPosts.push(post)
        }))
      }
      ids = filteredPosts.map(post => post.frontmatter.title)
      filteredPosts = filteredPosts.filter(({ frontmatter }, index) => !ids.includes(frontmatter.title, index + 1))
      setContentToRender(filteredPosts)
    
    } else {
      newTags = selectedTags.filter(t => t !== tag)
      if(newTags.length === 0) {
        setSelectedTags([])
        if (!translated) {
          setContentToRender(spanishPosts)
        } else {
          setContentToRender(posts)
        }
        return;
      }
      setSelectedTags(selectedTags.filter(t => t !== tag))
      if(translated == true) {
        newTags.forEach(tag =>
          spanishPosts.forEach(post => {
            post.frontmatter.tags.includes(tag) && filteredPosts.push(post)
        }))
        
      } else {
        newTags.forEach(tag =>
          posts.forEach(post => {
            post.frontmatter.tags.includes(tag) && filteredPosts.push(post)
        }))
      }
      ids = filteredPosts.map(post => post.frontmatter.title)
      filteredPosts = filteredPosts.filter(({ frontmatter }, index) => !ids.includes(frontmatter.title, index + 1))
      setContentToRender(filteredPosts)
    }
  }

  const selectCategory = (category) => {
    const filteredPosts = []
    if(selectedCategories.includes(category)) {
      setSelectedCategories([])
      if (translated) {
        setContentToRender(spanishPosts)
      } else {
        setContentToRender(posts)
      }
      setShowCategories(false)
      return;
    } else {
      setSelectedCategories([category])
      if(translated == true) {
        spanishPosts.forEach(post => {
          post.frontmatter.category === category && filteredPosts.push(post)
        })
      } else {
        posts.forEach(post => {
          post.frontmatter.category === category && filteredPosts.push(post)
        })
      }
      setShowCategories(false)
      setContentToRender(filteredPosts)
    }
  }

  const handleTranslate = () => {
    if (translated) {
      setContentToRender(posts)
      setCategorizationToRender({
        categories: categorization.categories,
        tags: categorization.tags,
      })
      setTranslated(false)
    } else {
      setContentToRender(spanishPosts)
      setCategorizationToRender({
        categories: categorization.categoriesSpanish,
        tags: categorization.tagsSpanish,
      })
      setTranslated(true)
    }
    setSelectedCategories([])
    setSelectedTags([])
  }

  const handleClickCategories = () => {
    setShowCategories(!showCategories)
    setShowTags(false)
  }

  const handleClickTags = () => {
    setShowTags(!showTags)
    setShowCategories(false)
  }

  const closeAllBoxes = () => {
    setShowCategories(false)
    setShowTags(false)
  }

  const handleOrder = () => {
    const ordered = contentToRender
    // order witout using sort function and by date
    if(!changedOrder) {
      ordered.sort((a, b) => {
        return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
      })
    } else {
      ordered.sort((a, b) => {
        return new Date(a.frontmatter.date) - new Date(b.frontmatter.date)
      })
    }
    
    setContentToRender(ordered)
    setChangedOrder(!changedOrder)
  }

  return (
    <>
      {
        showCategories || showTags ? <div className="fixed top-0 left-0 w-full h-full bg-transparent z-10" onClick={closeAllBoxes}></div> : null
      }
      <div className="flex flex-wrap justify-center m-4 mb-24 relative">
        <div className="flex flex-wrap justify-between w-full max-w-[1440px] mb-4">
          <div className="flex place-content-start max-w-[1440px] items-center"> 
            <h1 className="text-5xl font-bold w-full mobile:text-4xl">Posts</h1>
          </div>
          <div className="flex gap-4 place-content-start max-w-[1440px] w-fit"> 
            <button className="flex items-center gap-4 text-md px-2 py-4 w-fit hover:shadow-md rounded-lg" onClick={handleTranslate}>
              <MdGTranslate/> {translated ? "Traducir al Inglés" : "Translate to Spanish"}
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mobile:justify-start w-full max-w-[1440px] mb-4 mx-2">
          <div className="flex flex-wrap justify-start w-fit max-w-[1440px] items-center">
            <div className="flex place-content-start max-w-[1440px] items-center"> 
              <h1 className="text-xl font-bold w-full mobile:text-lg">{translated ? "Filtros:" : "Filters:"} </h1>
            </div>
            <div className="gap-4 place-content-start max-w-[1440px] w-fit mx-4 z-100 mobile:mx-2"> 
              <button className="flex items-center gap-4 text-md px-2 py-2 w-fit hover:shadow-md rounded-lg" onClick={handleClickCategories}>
                {translated ? "Por Categoría" : "By Category"}
              </button>
              {
                showCategories && <CategoryBox categories={categorizationToRender.categories} />
              }
            </div>
            <div className="gap-4 place-content-start max-w-[1440px] w-fit mx-4 z-10 mobile:mx-2"> 
              <button className="flex items-center gap-4 text-md px-4 py-2 w-fit hover:shadow-md rounded-lg" onClick={handleClickTags}>
                {
                  translated ? "Por Tags" : "By Tag"
                }
              </button>
              {
                showTags && <TagBox tags={categorizationToRender.tags} />
              }
            </div>
          </div>
          <div className="flex flex-wrap justify-end w-fit max-w-[1440px] mx-0">
            <div className="flex place-content-start max-w-[1440px] items-center mx-4 mobile:mx-0 mobile:mr-4">
              <h1 className="text-xl font-bold w-full mobile:text-lg">
                {translated ? "Ordenar Por:" : "Order By"}
              </h1>
            </div>
            <div className="flex gap-4 place-content-start max-w-[1440px] w-fit">
              <button className="flex items-center gap-4 text-md px-4 py-2 w-fit hover:shadow-md rounded-lg" onClick={handleOrder}>
                {
                  !changedOrder ? 
                  (translated ? "Nuevos Primeros" : "Newest First") : 
                  (translated ? "Antiguos Primeros" : "Oldest First")
                }
              </button>
            </div>
          </div>
        </div>
        <div className="grid desktop:grid-cols-3 gap-4 place-content-start w-full max-w-[1440px] mobile:grid-cols-1  tablet:grid-cols-2 ">
          <Card posts={contentToRender} translated={translated} />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({}) {
  const postsDirectory = 'posts/en';
  const spanishPostsDirectory = 'posts/es';
  const categories = []
  const categoriesSpanish = []
  const tags = []
  const tagsSpanish = []
  const posts = fs.readdirSync(postsDirectory).map((file) => {
    const postContent = fs.readFileSync(`${postsDirectory}/${file}`, 'utf8');
    const { data, content } = matter(postContent);

    categories.find(category => category === data.category) ? null : categories.push(data.category)
    data.tags.map(tag => tags.find(t => t === tag) ? null : tags.push(tag))
    return {
      frontmatter: data,
      content,
    };
    
  }).filter((post) => post !== undefined);
  const spanishPosts = fs.readdirSync(spanishPostsDirectory).map((file) => {
    const postContent = fs.readFileSync(`${spanishPostsDirectory}/${file}`, 'utf8');
    const { data, content } = matter(postContent);
    categoriesSpanish.find(category => category === data.category) ? null : categoriesSpanish.push(data.category)
    data.tags.map(tag => tagsSpanish.find(t => t === tag) ? null : tagsSpanish.push(tag))
    return {
      frontmatter: data,
      content,
    };
    
  }).filter((post) => post !== undefined);
  return {
    props: {
      posts,
      spanishPosts,
      categorization: {
        categories,
        categoriesSpanish,
        tags,
        tagsSpanish
      }
    },
  };
}