export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es'],
};

// Diccionarios de idiomas
export const dictionaries = {
  en: {
    navigation: {
      posts: 'Posts',
      home: 'Home',
      about: 'About',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
    },
    posts: {
      title: 'Blog Posts',
      returnToPosts: 'Return to Posts',
      translateTo: 'Ver en Español',
      filters: 'Filters:',
      byCategory: 'By Category',
      byTag: 'By Tag',
      clearFilters: 'Clear Filters',
      orderBy: 'Order By',
      newestFirst: 'Newest First',
      oldestFirst: 'Oldest First',
      author: 'Author',
      postedIn: 'Posted in:',
      category: 'Category',
      tags: 'Tags',
      notFound: 'Post not found',
      notFoundDescription: "The post you're looking for doesn't exist.",
      badges: {
        new: 'New',
        top: 'Top',
        trending: 'Trending',
        popular: 'Popular',
        mustRead: 'Must Read'
      }
    },
    errors: {
      notFound: 'Page Not Found',
      notFoundDescription: "The page you're looking for doesn't exist.",
      clientError: 'Something went wrong!',
      clientErrorDescription: 'An unexpected error occurred. Please try again.',
      globalError: 'Critical Error',
      globalErrorDescription: 'A critical error occurred. Please refresh the page.',
      goHome: 'Go Home',
      tryAgain: 'Try Again',
      refresh: 'Refresh Page',
    },
    cookies: {
      title: '🍪 Cookie Settings',
      description: 'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. You can accept all cookies or customize your preferences.',
      disclaimer: 'By continuing to browse, you accept our cookie policy.',
      customize: 'Customize',
      necessaryOnly: 'Necessary Only',
      acceptAll: 'Accept All',
      detailedTitle: 'Detailed Cookie Settings',
      required: 'Required',
      cancel: 'Cancel',
      savePreferences: 'Save Preferences',
      cookiesLabel: 'Cookies:',
      cookies: {
        necessary: {
          name: 'Necessary',
          description: 'Required for basic website functionality'
        },
        preferences: {
          name: 'Preferences', 
          description: 'Remember your settings and preferences'
        },
        analytics: {
          name: 'Analytics',
          description: 'Help us understand how you use our website'
        },
        marketing: {
          name: 'Marketing',
          description: 'Used to track visitors and display personalized ads'
        }
      }
    },
    legal: {
      cookiePolicy: {
        title: 'Cookie Policy',
        lastUpdated: 'Last Updated',
        sections: {
          whatAreCookies: {
            title: 'What are Cookies?',
            content: 'Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.'
          },
          howWeUseCookies: {
            title: 'How We Use Cookies',
            content: 'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. This helps us understand how visitors interact with our website and improve our services.'
          },
          typesOfCookies: {
            title: 'Types of Cookies We Use',
            necessary: 'Necessary cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas.',
            preferences: 'Preference cookies allow the website to remember information that changes the way it behaves, such as your preferred language.',
            analytics: 'Analytics cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
            marketing: 'Marketing cookies are used to track visitors across websites to display relevant and engaging advertisements.',
            cookieTypes: {
              necessary: 'Necessary Cookies',
              preferences: 'Preference Cookies', 
              analytics: 'Analytics Cookies',
              marketing: 'Marketing Cookies'
            }
          },
          manageCookies: {
            title: 'Managing Your Cookies',
            content: 'You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.',
            note: 'Note:',
            noteContent: 'You can manage your cookie preferences at any time using our cookie banner or by contacting us directly.'
          },
          contact: {
            title: 'Contact Us',
            content: 'If you have any questions about this Cookie Policy, please contact us.'
          },
          finalNote: {
            content: 'This cookie policy is part of our privacy policy and is subject to the same terms and conditions.',
            website: 'Website'
          }
        }
      },
      privacyPolicy: {
        title: 'Privacy Policy',
        lastUpdated: 'Last Updated',
        sections: {
          informationWeCollect: {
            title: 'Information We Collect',
            content: 'At DelRio Dev Blog, we respect your privacy. This website is primarily informational and does not collect personally identifiable data, except through the use of technical cookies necessary for site functionality.'
          },
          useOfCookies: {
            title: 'Use of Cookies',
            content: 'We use technical cookies necessary for website functionality, including language preference management. For detailed information, please see our',
            linkText: 'Cookie Policy'
          },
          contact: {
            title: 'Contact',
            content: 'If you have questions about this privacy policy, you can contact us at:',
            email: 'Email',
            website: 'Website'
          },
          updates: {
            content: 'This privacy policy may be updated periodically. We recommend reviewing it occasionally.'
          }
        }
      }
    },
    metadata: {
      title: 'Mauricio Del Río | Web Developer',
      description: 'Personal blog about web development, programming, React, Next.js, and technology.',
      keywords: 'web development, programming, React, Next.js, JavaScript, TypeScript, blog',
      postNotFound: 'Post Not Found',
      postNotFoundDescription: 'The requested blog post could not be found.',
    }
  },
  es: {
    navigation: {
      posts: 'Posts',
      home: 'Inicio',
      about: 'Acerca de',
      privacy: 'Política de Privacidad',
      cookies: 'Política de Cookies',
    },
    posts: {
      title: 'Posts del Blog',
      returnToPosts: 'Volver a Posts',
      translateTo: 'View in English',
      filters: 'Filtros:',
      byCategory: 'Por Categoría',
      byTag: 'Por Tags',
      clearFilters: 'Limpiar Filtros',
      orderBy: 'Ordenar Por:',
      newestFirst: 'Nuevos Primeros',
      oldestFirst: 'Antiguos Primeros',
      author: 'Autor',
      postedIn: 'Posteado en:',
      category: 'Categoría',
      tags: 'Etiquetas',
      notFound: 'Post no encontrado',
      notFoundDescription: 'El post que buscas no existe.',
      badges: {
        new: 'Nuevo',
        top: 'Top',
        trending: 'Tendencia',
        popular: 'Popular',
        mustRead: 'Imperdible'
      }
    },
    errors: {
      notFound: 'Página No Encontrada',
      notFoundDescription: 'La página que buscas no existe.',
      clientError: '¡Algo salió mal!',
      clientErrorDescription: 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo.',
      globalError: 'Error Crítico',
      globalErrorDescription: 'Ocurrió un error crítico. Por favor, recarga la página.',
      goHome: 'Ir al Inicio',
      tryAgain: 'Intentar de Nuevo',
      refresh: 'Recargar Página',
    },
    cookies: {
      title: '🍪 Configuración de Cookies',
      description: 'Utilizamos cookies para mejorar tu experiencia de navegación, mostrar contenido personalizado y analizar el tráfico del sitio. Puedes aceptar todas las cookies o personalizar tus preferencias.',
      disclaimer: 'Al continuar navegando, aceptas nuestra política de cookies.',
      customize: 'Personalizar',
      necessaryOnly: 'Solo Necesarias',
      acceptAll: 'Aceptar Todas',
      detailedTitle: 'Configuración Detallada de Cookies',
      required: 'Requerida',
      cancel: 'Cancelar',
      savePreferences: 'Guardar Preferencias',
      cookiesLabel: 'Cookies:',
      cookies: {
        necessary: {
          name: 'Necesarias',
          description: 'Necesarias para el funcionamiento básico del sitio web'
        },
        preferences: {
          name: 'Preferencias',
          description: 'Recordar tu configuración y preferencias'
        },
        analytics: {
          name: 'Analíticas',
          description: 'Nos ayudan a entender cómo usas nuestro sitio web'
        },
        marketing: {
          name: 'Marketing',
          description: 'Usadas para rastrear visitantes y mostrar anuncios personalizados'
        }
      }
    },
    legal: {
      cookiePolicy: {
        title: 'Política de Cookies',
        lastUpdated: 'Última Actualización',
        sections: {
          whatAreCookies: {
            title: '¿Qué son las Cookies?',
            content: 'Las cookies son pequeños archivos de texto que se colocan en tu computadora o dispositivo móvil cuando visitas un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente y para proporcionar información a los propietarios del sitio.'
          },
          howWeUseCookies: {
            title: 'Cómo Utilizamos las Cookies',
            content: 'Utilizamos cookies para mejorar tu experiencia de navegación, servir contenido personalizado y analizar nuestro tráfico. Esto nos ayuda a entender cómo los visitantes interactúan con nuestro sitio web y mejorar nuestros servicios.'
          },
          typesOfCookies: {
            title: 'Tipos de Cookies que Utilizamos',
            necessary: 'Las cookies necesarias son esenciales para que el sitio web funcione correctamente. Permiten funciones básicas como navegación de páginas y acceso a áreas seguras.',
            preferences: 'Las cookies de preferencias permiten que el sitio web recuerde información que cambia la forma en que se comporta, como tu idioma preferido.',
            analytics: 'Las cookies analíticas nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web recopilando y reportando información de forma anónima.',
            marketing: 'Las cookies de marketing se utilizan para rastrear visitantes en sitios web para mostrar anuncios relevantes y atractivos.',
            cookieTypes: {
              necessary: 'Cookies Necesarias',
              preferences: 'Cookies de Preferencias',
              analytics: 'Cookies Analíticas', 
              marketing: 'Cookies de Marketing'
            }
          },
          manageCookies: {
            title: 'Gestionar tus Cookies',
            content: 'Puedes controlar y/o eliminar cookies como desees. Puedes eliminar todas las cookies que ya están en tu computadora y puedes configurar la mayoría de los navegadores para evitar que se coloquen.',
            note: 'Nota:',
            noteContent: 'Puedes gestionar tus preferencias de cookies en cualquier momento usando nuestro banner de cookies o contactándonos directamente.'
          },
          contact: {
            title: 'Contáctanos',
            content: 'Si tienes alguna pregunta sobre esta Política de Cookies, por favor contáctanos.'
          },
          finalNote: {
            content: 'Esta política de cookies forma parte de nuestra política de privacidad y está sujeta a las mismas condiciones.',
            website: 'Sitio web'
          }
        }
      },
      privacyPolicy: {
        title: 'Política de Privacidad',
        lastUpdated: 'Última Actualización',
        sections: {
          informationWeCollect: {
            title: 'Información que Recopilamos',
            content: 'En DelRio Dev Blog, respetamos tu privacidad. Este sitio web es principalmente informativo y no recopila datos personales identificables, excepto a través del uso de cookies técnicas necesarias para el funcionamiento del sitio.'
          },
          useOfCookies: {
            title: 'Uso de Cookies',
            content: 'Utilizamos cookies técnicas necesarias para el funcionamiento del sitio web, incluyendo la gestión de preferencias de idioma. Para más información detallada, consulta nuestra',
            linkText: 'Política de Cookies'
          },
          contact: {
            title: 'Contacto',
            content: 'Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en:',
            email: 'Email',
            website: 'Sitio web'
          },
          updates: {
            content: 'Esta política de privacidad puede ser actualizada periódicamente. Te recomendamos revisarla ocasionalmente.'
          }
        }
      }
    },
    metadata: {
      title: 'Mauricio Del Río | Desarrollador Web',
      description: 'Blog personal sobre desarrollo web, programación, React, Next.js y tecnología.',
      keywords: 'desarrollo web, programación, React, Next.js, JavaScript, TypeScript, blog',
      postNotFound: 'Post No Encontrado',
      postNotFoundDescription: 'El post solicitado no pudo ser encontrado.',
    }
  }
};

export const getDictionary = (locale) => dictionaries[locale] || dictionaries.en;