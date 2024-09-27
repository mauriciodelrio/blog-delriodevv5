import React from "react";
import Link from "next/link";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm';

const Card = ({posts, translated}) => {
  return (
    <> 
      {posts.map((post, index) => (
        <div className="col-auto p-3 shadow-md hover:shadow-xl rounded-lg" key={index}>
          <Link className="block h-full" href={`posts/${post.frontmatter.slug}`} key={index}>
            <div className="flex flex-row flex-wrap h-full relative content-between" key={index}>
              <div className="h-56 w-full bg-cover" style={{backgroundImage: `url(${post.frontmatter.bannerImage})`}}/>
              <div className="relative bottom-0">
                <h1 className="text-xl font-bold mt-2">{post.frontmatter.title}</h1>
                <p className="my-1 italic text-sm">{translated ? "Posteado en:" : "Posted in:"} {post.frontmatter.date}</p>
                <Markdown className="prose" remarkPlugins={[remarkGfm]}>{post.frontmatter.overview}</Markdown>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}

export default Card;