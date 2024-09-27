import Link from "next/link"
import React from "react"

export default function Header (props){
    return <>
        <header className="flex gap-4 items-center justify-end w-full h-fit border-b bg-gray-100/50 text-center p-6">
            <div>
                <Link className="p-7 hover:shadow-md rounded-lg" href="/">
                    Home
                </Link>
            </div>
            <div>
                <Link className="p-7 hover:shadow-md rounded-lg" href="/posts">
                    Posts
                </Link>
            </div>
        </header>
    </>
}