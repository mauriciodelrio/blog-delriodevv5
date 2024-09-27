import React from 'react'

export default function Footer (props){
    const date = new Date()
    return <>
        <footer className="flex flex-col items-center justify-center w-full h-20 border-t bg-gray-50 fixed bottom-0">
            <p>©{date.getFullYear()} - Mauricio Del Río</p>
        </footer>
    </>
}