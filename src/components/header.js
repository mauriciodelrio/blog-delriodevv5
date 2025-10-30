'use client';

import Link from "next/link"
import React from "react"
import { MdGTranslate } from "react-icons/md"
import { useLocaleManager } from '@/hooks/useLocaleManager'
import { getDictionary } from '@/lib/i18n'

export default function Header ({ locale = 'en' }){
    const { changeLocale } = useLocaleManager(locale);
    const dict = getDictionary(locale);
    
    const handleLanguageToggle = async () => {
        const targetLocale = locale === 'en' ? 'es' : 'en';
        await changeLocale(targetLocale, window.location.pathname);
    };

    return <>
        <header className="w-full border-b bg-gray-100/50">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Navigation Links */}
                    <nav className="flex gap-2 sm:gap-4">
                        <Link 
                            className="px-3 py-2 sm:px-4 sm:py-2 hover:bg-white hover:shadow-sm rounded-lg transition-all duration-200 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900" 
                            href={`/${locale}`}
                        >
                            {dict.navigation.home}
                        </Link>
                        <Link 
                            className="px-3 py-2 sm:px-4 sm:py-2 hover:bg-white hover:shadow-sm rounded-lg transition-all duration-200 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900" 
                            href={`/${locale}/posts`}
                        >
                            {dict.navigation.posts}
                        </Link>
                    </nav>
                    
                    {/* Language Toggle */}
                    <button
                        onClick={handleLanguageToggle}
                        className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 hover:bg-white hover:shadow-sm rounded-lg transition-all duration-200 text-gray-700 hover:text-gray-900"
                        title={locale === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
                    >
                        <MdGTranslate className="text-lg" />
                        <span className="text-sm font-medium">
                            {locale === 'es' ? 'EN' : 'ES'}
                        </span>
                    </button>
                </div>
            </div>
        </header>
    </>
}