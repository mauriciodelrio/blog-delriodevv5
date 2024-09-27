import fs from "fs";
import React, {useEffect} from "react";
import matter from "gray-matter";
import Link from "next/link";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import { FaArrowLeft } from 'react-icons/fa';
import { MdGTranslate } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// The page for each post
export default function Post({frontmatter, content, spanishFrontmatter, spanishContent}) {

    const [translated, setTranslated] = React.useState(false)
    const [contentToRender, setContentToRender] = React.useState(content)
    const [frontmatterToRender, setFrontmatterToRender] = React.useState(frontmatter)
    const {title, author, category, date, bannerImage, tags, images} = frontmatterToRender
    const [imgs, setImgs] = React.useState([])
    React.useEffect(() => {
      if (images && images.length > 0) {
        setImgs(images.split(",").map((img, index) => (
        <div>
          <img key={index} src={img} className="w-fit h-auto"/>
        </div>
      )))
    }
    }, [images])

    const handleTranslate = () => {
      if (translated) {
        setContentToRender(content)
        setFrontmatterToRender(frontmatter)
        setTranslated(false)
      } else {
        setContentToRender(spanishContent)
        setFrontmatterToRender(spanishFrontmatter)
        setTranslated(true)
      }
    }
    return (<>
      <div className="flex flex-wrap justify-center w-full h-max">
        <div className="flex flex-wrap justify-between m-4 mobile:m-0 w-full max-w-[1440px] mobile:text-sm">
          <div className="w-fit max-w-[1440px]">
              <Link className="flex items-center gap-4 text-md mx-8 mobile:mx-2 px-2 py-4 w-fit hover:shadow-md rounded-lg" href="/posts">
                <FaArrowLeft/> {translated ? "Volver a Posts" : "Return to Posts"}
              </Link>
          </div>
          <div className="w-fit max-w-[1440px] ">
              <button className="flex items-center gap-4 text-md mx-8 mobile:mx-2 px-2 py-4 w-fit hover:shadow-md rounded-lg" onClick={handleTranslate}>
                <MdGTranslate/> {translated ? "Traducir al Inglés" : "Translate to Spanish"}
              </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full mb-32 h-max">
        <div className="flex flex-wrap justify-center mx-4 mobile:mx-0 w-full max-w-[1440px] px-8">
          <div className="flex flex-wrap flex-row w-auto max-w-[1440px] rounded-lg shadow-md">
            <div className="flex w-full justify-center bg-fixed h-144 mobile:h-80 tablet:h-96 rounded bg-no-repeat bg-contain" style={{backgroundImage: `url(${bannerImage})`}}>
              <div className="flex items-start p-8 w-full bg-gradient-to-b from-gray-100/95 to-gray-100/15 rounded">
                <h1 className="w-full text-7xl mobile:text-5xl font-bold py-4 text-center text-gray-950">{title}</h1>
              </div>
            </div>
            <div className="p-8 mobile:m-2 mobile:p-0">
              <h2 className="italic text-md">{translated ? "Autor" : "Author"}: {author}</h2>
              <h2 className="italic text-md">{translated ? "Posteado en:" : "Posted in:"} {date}</h2>
              <div className="flex mb-8 pb-8 border-b-2 border-gray-100">
                <h3 className="mt-4 font-bold">{translated ? "Categoría" : "Category"}: <span className="bg-gray-200/50 text-gray-950 p-2 m-2 rounded font-medium">{category}</span></h3>
                <h3 className="mt-4 font-bold">
                  {translated ? "Etiquetas" : "Tags"}: 
                  {
                    tags.map((tag, index) => (
                      <span key={index} className="bg-gray-200/50 text-gray-950 p-2 m-2 rounded font-medium">{tag}</span>
                    ))
                  }
                </h3>
              </div>
              <Markdown className="prose" remarkPlugins={[remarkGfm]}>{contentToRender}</Markdown>
              <div className="mobile:max-w-[300px] mt-16">
                {imgs && imgs.length > 0 && 
                  <Carousel
                    showArrows={true}
                    autoPlay
                    interval={5000}
                    infiniteLoop
                  >
                  {imgs}
                </Carousel>
                }
              </div>
              
            </div>
          </div>
          </div>
        </div>
    </>)
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}


// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const spanishFileName = fs.readFileSync(`posts/${slug}-spanish.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    const { data: spanishFrontmatter, content: spanishContent } = matter(spanishFileName);
    console.log(slug, "dvsberdf")
    return {
      props: {
        frontmatter,
        content,
        spanishFrontmatter,
        spanishContent
      },
    };
  }