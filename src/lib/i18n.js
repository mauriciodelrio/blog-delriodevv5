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
      projects: 'Projects',
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
        mustRead: 'Must Read',
      },
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
      title: 'Cookie Settings',
      description:
        'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. You can accept all cookies or customize your preferences.',
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
          description: 'Required for basic website functionality',
        },
        preferences: {
          name: 'Preferences',
          description: 'Remember your settings and preferences',
        },
        analytics: {
          name: 'Analytics',
          description: 'Help us understand how you use our website',
        },
        marketing: {
          name: 'Marketing',
          description: 'Used to track visitors and display personalized ads',
        },
      },
    },
    legal: {
      cookiePolicy: {
        title: 'Cookie Policy',
        lastUpdated: 'Last Updated',
        sections: {
          whatAreCookies: {
            title: 'What are Cookies?',
            content:
              'Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.',
          },
          howWeUseCookies: {
            title: 'How We Use Cookies',
            content:
              'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. This helps us understand how visitors interact with our website and improve our services.',
          },
          typesOfCookies: {
            title: 'Types of Cookies We Use',
            necessary:
              'Necessary cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas.',
            preferences:
              'Preference cookies allow the website to remember information that changes the way it behaves, such as your preferred language.',
            analytics:
              'Analytics cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
            marketing:
              'Marketing cookies are used to track visitors across websites to display relevant and engaging advertisements.',
            cookieTypes: {
              necessary: 'Necessary Cookies',
              preferences: 'Preference Cookies',
              analytics: 'Analytics Cookies',
              marketing: 'Marketing Cookies',
            },
          },
          manageCookies: {
            title: 'Managing Your Cookies',
            content:
              'You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.',
            note: 'Note:',
            noteContent:
              'You can manage your cookie preferences at any time using our cookie banner or by contacting us directly.',
          },
          contact: {
            title: 'Contact Us',
            content: 'If you have any questions about this Cookie Policy, please contact us.',
          },
          finalNote: {
            content:
              'This cookie policy is part of our privacy policy and is subject to the same terms and conditions.',
            website: 'Website',
          },
        },
      },
      privacyPolicy: {
        title: 'Privacy Policy',
        lastUpdated: 'Last Updated',
        sections: {
          informationWeCollect: {
            title: 'Information We Collect',
            content:
              'At DelRio Dev Blog, we respect your privacy. This website is primarily informational and does not collect personally identifiable data, except through the use of technical cookies necessary for site functionality.',
          },
          useOfCookies: {
            title: 'Use of Cookies',
            content:
              'We use technical cookies necessary for website functionality, including language preference management. For detailed information, please see our',
            linkText: 'Cookie Policy',
          },
          contact: {
            title: 'Contact',
            content: 'If you have questions about this privacy policy, you can contact us at:',
            email: 'Email',
            website: 'Website',
          },
          updates: {
            content: 'This privacy policy may be updated periodically. We recommend reviewing it occasionally.',
          },
        },
      },
    },
    metadata: {
      title: 'Mauricio Del Río | Senior Web Developer & Technical Lead',
      description:
        'Senior Web Developer with 9+ years of experience in React, Next.js, Node.js, and modern web technologies. Technical Lead specializing in frontend architecture, team management, and agile methodologies.',
      keywords: [
        'senior web developer',
        'react expert',
        'next.js specialist',
        'javascript developer',
        'typescript expert',
        'frontend architect',
        'technical lead',
        'node.js developer',
        'full stack engineer',
        'agile methodology',
        'software engineering',
        'ui/ux development',
        'responsive design',
        'web performance optimization',
        'code review',
        'team leadership',
        'remote developer',
        'freelance consultant',
        'chile developer',
        'latin america tech',
        'react hooks',
        'redux expert',
        'tailwind css',
        'github actions',
        'ci/cd',
        'storybook',
        'jest testing',
        'sonarqube',
        'aws cloud',
        'postgresql',
        'mongodb',
      ],
      postNotFound: 'Post Not Found',
      postNotFoundDescription: 'The requested blog post could not be found.',
    },
    home: {
      title: 'Mauricio Del Río Zorrilla',
      subtitle: 'Software developer, IT consultant and Human.',
      contact: {
        openToWork: 'Open to work:',
        workLocation: 'Working From Home (Global) | Hybrid (Santiago)',
        salaryRange: '75,000 - 120,000 USD/Yr',
        relocation: 'Yes: CA, NZ',
      },
      sidebar: {
        skills: 'Skills',
        frontendDev: 'Frontend Development',
        backendDev: 'Backend & Databases',
        devTools: 'Development Tools & DevOps',
        testing: 'Testing & Quality',
        otherTech: 'Other Technologies',
        managementTools: 'Management & Design Tools',
        leadership: 'Leadership & Soft Skills',
        aiTools: 'AI Tools',
        languages: 'Languages',
        education: 'Education',
        additionalInfo: 'Additional Info',
        salaryRangeTitle: 'Salary Range',
        possibleRelocation: 'Possible Relocation',
        native: 'Native',
        ielts: 'IELTS B2',
      },
      overview: {
        title: 'Overview',
        paragraph1:
          "Hi there! I'm Mauricio, a JavaScript enthusiast with 9+ years of experience. React has shaped a big part of my career, but it's purely circumstantial. Also, I am more than a frontend developer or TL, I love computer science. Programming? It's just a tool. I want to design, build, think and create solutions that make me feel proud of my work.",
        paragraph2:
          "For me, it's more important to value the ability to say NO, while also proposing alternatives that can help the team achieve its goals.",
        paragraph3:
          "I'm trying to think outside the box. I love to learn other stuff that's not necessarily related to programming, like philosophy, psychology, art, music, cooking, etc. I believe that a well-rounded individual can bring a unique perspective to software development, leading to more innovative and effective solutions.",
      },
      experience: {
        title: 'Experience',
        freelanceTitle: 'Freelance Experiences',
        technologies: 'Technologies:',
        methodology: 'Methodology:',
      },
      learning: {
        title: 'Learning Now',
      },
      education: {
        utfsm: {
          university: 'Universidad Técnica Federico Santa María',
          degree: 'Ingeniería Civil Informática',
          period: '2010 - 2015 (Incomplete)',
        },
        usach: {
          university: 'Universidad de Santiago de Chile',
          degree: "Bachelor's Degree in Computer Science",
          period: '2015 - 2020 (Incomplete)',
        },
      },
      jobs: [
        {
          company: 'Globant',
          url: 'https://www.globant.com/',
          title: 'Tech Lead',
          startDate: '2026-03-30',
          endDate: 'Current',
          description:
            "As the Tech Lead for the web Design System of a major airline client, I direct the end-to-end lifecycle of their primary visual component library. My focus is on scaling the web and webview architecture while ensuring high standards in accessibility, visual consistency, and dependency usability. I coordinate the technical roadmap, manage release workflows across diverse environments, and oversee production support, ensuring our components serve as a reliable, high-performance foundation for the entire frontend team.",
          keywords: [
            'Javascript',
            'React',
            'Typescript',
            'TailwindCSS',
            'Jest',
            'Eslint',
            'Shell',
            'CI/CD',
            'Storybook',
            'Design Systems',
            'Frontend Architecture',
            'Accessibility',
            'Leadership',
          ],
          methodology: ['Agile', 'Scrum'],
        },
        {
          company: 'Globant',
          url: 'https://www.globant.com/',
          title: 'Senior Web Developer',
          startDate: '2025-02-02',
          endDate: '2026-03-30',
          description:
            'I worked as a Senior Web Developer for a major airline client. My team developed cross-functional tools for over 30 web artifacts built with Next.js. My objectives were: Creating packages and utilities for cross-product use. Establishing and supporting standard code quality rules. Automating and defining product delivery processes. Planning and implementing methods for optimizing and updating critical dependencies across all supported artifacts. Defining security rules and vulnerability management processes.',
          keywords: [
            'Javascript',
            'React',
            'Typescript',
            'Next JS',
            'TailwindCSS',
            'Vite',
            'Jest',
            'Eslint',
            'Shell',
            'Snyk',
            'SonarQube',
            'CI/CD',
            'CSP',
            'Storybook',
          ],
          methodology: ['Agile', 'Scrum'],
        },
        {
          company: 'Perficient',
          url: 'https://www.perficient.com/',
          title: 'Senior Software Engineer',
          startDate: '2022-11-02',
          endDate: '2024-06-01',
          description:
            'I worked as a senior software developer, specializing in frontend development. I focused on building a product that rewarded car salespeople across multiple companies in the USA and Europe. My role required a high degree of skill and reliability, given the complexity of the product.',
          keywords: ['Javascript', 'React', 'Typescript', 'Next JS', 'Jest', 'Storybook'],
          methodology: ['Agile', 'Scrum'],
        },
        {
          company: '1Health',
          url: 'https://www.1health.io/',
          title: 'Technical Lead',
          startDate: '2021-04-01',
          endDate: '2022-10-31',
          description:
            'I was the technical lead for a team of five, where I was responsible for ensuring the quality and guiding the delivery of health exam results. This role honed my leadership skills and attention to detail, which are essential in a demanding industry.',
          keywords: ['Javascript', 'React', 'Jest', 'Python', 'Django', 'AWS', 'PostgreSQL', 'Storybook'],
          methodology: ['Agile', 'Kanban'],
        },
        {
          company: '1Health',
          url: 'https://www.1health.io/',
          title: 'Senior Software Engineer',
          startDate: '2019-07-15',
          endDate: '2021-03-31',
          description:
            'I worked as a senior software developer, specializing in frontend development. I focused on a product that specialized in genetic analysis and family tree tracking. I used an own AI model to analyze data and create intuitive, user-friendly interfaces. My ability to design interactive visualizations for complex datasets demonstrated my attention to detail and dedication to delivering high-quality products.',
          keywords: ['Javascript', 'React', 'Jest', 'Python', 'Django', 'AWS', 'PostgreSQL'],
          methodology: ['Agile', 'Kanban'],
        },
        {
          company: 'Open Green Road',
          url: 'https://www.opengreenroad.com/',
          title: 'Software Engineer',
          startDate: '2017-09-01',
          endDate: '2019-07-02',
          description:
            'I worked as a senior software developer, focused on developing interactive user interfaces for educational platforms. My experience in creating engaging interfaces showcased my expertise in software development and my commitment to delivering high-quality products.',
          keywords: ['Javascript', 'React', 'Jest', 'JQuery', 'Node JS', 'Express JS', 'MongoDB'],
          methodology: ['Agile', 'Kanban'],
        },
        {
          company: 'Nursoft',
          url: 'https://www.nursoft.cl/',
          title: 'Software Engineer',
          startDate: '2017-04-01',
          endDate: '2017-08-20',
          description:
            'I worked as a software developer on various agile projects for different clients. In this role, I also provided technical support to internal squads. My ability to work effectively on different teams and adapt to new challenges demonstrates my skills in software development.',
          keywords: ['Javascript', 'React', 'Jest', 'JQuery', 'React Native', 'Electron'],
          methodology: ['Agile', 'Scrum'],
        },
        {
          company: 'Mediastream',
          url: 'https://www.mediastream.co/',
          title: 'Jr Software Engineer',
          startDate: '2016-09-22',
          endDate: '2017-03-25',
          description:
            'I started my career as a junior developer at a streaming services company that served clients throughout Latin America. My primary role was to support the development team with various tasks related to content visualization on Over-the-Top (OTT) platforms. This experience gave me a solid foundation in software development and taught me how to work effectively within a team.',
          keywords: ['Javascript', 'React', 'Node JS', 'Express JS', 'JQuery', 'MongoDB'],
          methodology: ['Agile', 'Scrum', 'Kanban'],
        },
      ],
      freelanceExperiences: [
        {
          company: 'Aevum',
          url: 'https://www.aevum.cl/',
          title: 'Senior Frontend Developer (freelance)',
          startDate: '2022-04-01',
          endDate: '2024-07-01',
          description:
            'I was a frontend developer at a company that specialized in providing economic projections for both individual and large-scale corporate investors. My role involved optimizing and implementing highly functional and efficient visual interfaces, using data visualization and real-time updating tools.',
          keywords: ['Javascript', 'React', 'Storybook'],
          methodology: ['Agile', 'Scrum'],
        },
        {
          company: '4Geeks Academy (freelance)',
          url: 'https://www.4geeksacademy.com/',
          title: 'Teacher (freelance)',
          startDate: '2021-03-01',
          endDate: '2021-12-31',
          description:
            'I worked as a full-stack mentor, primarily teaching keywords such as JavaScript, React, Python, and Flask.',
          keywords: ['Javascript', 'React', 'Python', 'Flask', 'PostgreSQL'],
          methodology: ['online sessions'],
        },
        {
          company: 'Desafío Latam (freelance)',
          url: 'https://www.desafiolatam.com/',
          title: 'Content Creator (freelance)',
          startDate: '2019-23-08',
          endDate: '2020-04-01',
          description: 'I was a content creator, where I developed content for their JavaScript and React courses.',
          keywords: ['Javascript', 'React'],
          methodology: ['online sessions'],
        },
      ],
    },
    projects: {
      title: 'My Projects',
      subtitle: 'A selection of personal projects I actively develop and maintain.',
      visitProject: 'Visit Project',
      viewOnGitHub: 'View on GitHub',
      status: {
        active: 'Active',
        beta: 'Beta',
        openSource: 'Open Source',
      },
      items: [
        {
          name: 'Buscoabogados',
          description:
            'Legal directory connecting people with verified lawyers in Chile. Search by specialty, compare real profiles, and contact directly — no intermediaries or hidden fees.',
          url: 'https://buscoabogados.cl',
          github: null,
          status: 'beta',
          tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Turborepo', 'Node.js', 'Express', 'Python'],
        },
        {
          name: 'FluxWind UI',
          description:
            'Open-source React component library with Tailwind CSS 4 and WCAG 2.2 AA accessibility. Built for speed, industry theming, and great developer experience.',
          url: 'https://fluxwind.delrio.dev',
          github: 'https://github.com/mauriciodelrio/fluxwind-ui',
          status: 'openSource',
          tags: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'Storybook', 'Vitest'],
        },
        {
          name: 'DelRio Dev Blog',
          description:
            'Personal tech blog with articles on software development, React, TypeScript, engineering culture, and more — available in English and Spanish.',
          url: 'https://www.delrio.dev',
          github: null,
          status: 'active',
          tags: ['Next.js', 'Markdown', 'i18n', 'Tailwind CSS'],
        },
        {
          name: 'Tutorías DelRio',
          description:
            'One-on-one programming tutoring sessions. Learn React, TypeScript, Node.js, Next.js and more with an experienced mentor. $15,000 CLP / 45 min.',
          url: 'https://tutorias.delrio.dev',
          github: null,
          status: 'active',
          tags: ['React', 'TypeScript', 'Node.js', 'Next.js', 'JavaScript'],
        },
        {
          name: 'DelRio Dev Skills',
          description:
            'A collection of 50+ GitHub Copilot skills covering frontend, backend, architecture, security (OWASP, GDPR, PCI, SOC2) and agent workflow — installable in one command via the CLI wizard.',
          url: 'https://www.npmjs.com/package/delriodev-skills',
          github: 'https://github.com/mauriciodelrio/delriodev-skills',
          status: 'openSource',
          tags: ['GitHub Copilot', 'TypeScript', 'CLI', 'npm', 'Open Source'],
        },
      ],
    },
  },
  es: {
    navigation: {
      posts: 'Posts',
      home: 'Inicio',
      about: 'Acerca de',
      projects: 'Proyectos',
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
        mustRead: 'Imperdible',
      },
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
      title: 'Configuración de Cookies',
      description:
        'Utilizamos cookies para mejorar tu experiencia de navegación, mostrar contenido personalizado y analizar el tráfico del sitio. Puedes aceptar todas las cookies o personalizar tus preferencias.',
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
          description: 'Necesarias para el funcionamiento básico del sitio web',
        },
        preferences: {
          name: 'Preferencias',
          description: 'Recordar tu configuración y preferencias',
        },
        analytics: {
          name: 'Analíticas',
          description: 'Nos ayudan a entender cómo usas nuestro sitio web',
        },
        marketing: {
          name: 'Marketing',
          description: 'Usadas para rastrear visitantes y mostrar anuncios personalizados',
        },
      },
    },
    legal: {
      cookiePolicy: {
        title: 'Política de Cookies',
        lastUpdated: 'Última Actualización',
        sections: {
          whatAreCookies: {
            title: '¿Qué son las Cookies?',
            content:
              'Las cookies son pequeños archivos de texto que se colocan en tu computadora o dispositivo móvil cuando visitas un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente y para proporcionar información a los propietarios del sitio.',
          },
          howWeUseCookies: {
            title: 'Cómo Utilizamos las Cookies',
            content:
              'Utilizamos cookies para mejorar tu experiencia de navegación, servir contenido personalizado y analizar nuestro tráfico. Esto nos ayuda a entender cómo los visitantes interactúan con nuestro sitio web y mejorar nuestros servicios.',
          },
          typesOfCookies: {
            title: 'Tipos de Cookies que Utilizamos',
            necessary:
              'Las cookies necesarias son esenciales para que el sitio web funcione correctamente. Permiten funciones básicas como navegación de páginas y acceso a áreas seguras.',
            preferences:
              'Las cookies de preferencias permiten que el sitio web recuerde información que cambia la forma en que se comporta, como tu idioma preferido.',
            analytics:
              'Las cookies analíticas nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web recopilando y reportando información de forma anónima.',
            marketing:
              'Las cookies de marketing se utilizan para rastrear visitantes en sitios web para mostrar anuncios relevantes y atractivos.',
            cookieTypes: {
              necessary: 'Cookies Necesarias',
              preferences: 'Cookies de Preferencias',
              analytics: 'Cookies Analíticas',
              marketing: 'Cookies de Marketing',
            },
          },
          manageCookies: {
            title: 'Gestionar tus Cookies',
            content:
              'Puedes controlar y/o eliminar cookies como desees. Puedes eliminar todas las cookies que ya están en tu computadora y puedes configurar la mayoría de los navegadores para evitar que se coloquen.',
            note: 'Nota:',
            noteContent:
              'Puedes gestionar tus preferencias de cookies en cualquier momento usando nuestro banner de cookies o contactándonos directamente.',
          },
          contact: {
            title: 'Contáctanos',
            content: 'Si tienes alguna pregunta sobre esta Política de Cookies, por favor contáctanos.',
          },
          finalNote: {
            content:
              'Esta política de cookies forma parte de nuestra política de privacidad y está sujeta a las mismas condiciones.',
            website: 'Sitio web',
          },
        },
      },
      privacyPolicy: {
        title: 'Política de Privacidad',
        lastUpdated: 'Última Actualización',
        sections: {
          informationWeCollect: {
            title: 'Información que Recopilamos',
            content:
              'En DelRio Dev Blog, respetamos tu privacidad. Este sitio web es principalmente informativo y no recopila datos personales identificables, excepto a través del uso de cookies técnicas necesarias para el funcionamiento del sitio.',
          },
          useOfCookies: {
            title: 'Uso de Cookies',
            content:
              'Utilizamos cookies técnicas necesarias para el funcionamiento del sitio web, incluyendo la gestión de preferencias de idioma. Para más información detallada, consulta nuestra',
            linkText: 'Política de Cookies',
          },
          contact: {
            title: 'Contacto',
            content: 'Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en:',
            email: 'Email',
            website: 'Sitio web',
          },
          updates: {
            content:
              'Esta política de privacidad puede ser actualizada periódicamente. Te recomendamos revisarla ocasionalmente.',
          },
        },
      },
    },
    metadata: {
      title: 'Mauricio Del Río | Desarrollador Web Senior y Líder Técnico',
      description:
        'Desarrollador Web Senior con más de 9 años de experiencia en React, Next.js, Node.js y tecnologías web modernas. Líder Técnico especializado en arquitectura frontend, gestión de equipos y metodologías ágiles.',
      keywords: [
        'desarrollador web senior',
        'experto react',
        'especialista next.js',
        'desarrollador javascript',
        'experto typescript',
        'arquitecto frontend',
        'líder técnico',
        'desarrollador node.js',
        'ingeniero full stack',
        'metodología ágil',
        'ingeniería de software',
        'desarrollo ui/ux',
        'diseño responsivo',
        'optimización web',
        'revisión de código',
        'liderazgo de equipos',
        'desarrollador remoto',
        'consultor freelance',
        'desarrollador chile',
        'tech latinoamérica',
        'react hooks',
        'experto redux',
        'tailwind css',
        'github actions',
        'ci/cd',
        'storybook',
        'testing jest',
        'sonarqube',
        'aws cloud',
        'postgresql',
        'mongodb',
      ],
      postNotFound: 'Post No Encontrado',
      postNotFoundDescription: 'El post solicitado no pudo ser encontrado.',
    },
    home: {
      title: 'Mauricio Del Río Zorrilla',
      subtitle: 'Desarrollador de software, consultor TI y Humano.',
      contact: {
        openToWork: 'Disponible para trabajar:',
        workLocation: 'Trabajo Remoto (Global) | Híbrido (Santiago)',
        salaryRange: '75,000 - 120,000 USD/Año',
        relocation: 'Sí: CA, NZ',
      },
      sidebar: {
        skills: 'Habilidades',
        frontendDev: 'Desarrollo Frontend',
        backendDev: 'Backend y Bases de Datos',
        devTools: 'Herramientas y DevOps',
        testing: 'Testing y Calidad',
        otherTech: 'Otras Tecnologías',
        managementTools: 'Herramientas de Gestión y Diseño',
        leadership: 'Liderazgo y Habilidades Blandas',
        aiTools: 'Herramientas IA',
        languages: 'Idiomas',
        education: 'Educación',
        additionalInfo: 'Información Adicional',
        salaryRangeTitle: 'Rango Salarial',
        possibleRelocation: 'Posible Relocalización',
        native: 'Nativo',
        ielts: 'IELTS B2',
      },
      overview: {
        title: 'Resumen',
        paragraph1:
          '¡Hola! Soy Mauricio, un entusiasta de JavaScript con más de 9 años de experiencia. React ha marcado gran parte de mi carrera, pero es puramente circunstancial. Además, soy más que un desarrollador frontend o TL, me apasionan las ciencias de la computación. ¿Programación? Es solo una herramienta. Quiero diseñar, construir, pensar y crear soluciones que me hagan sentir orgulloso de mi trabajo.',
        paragraph2:
          'Para mí, es más importante valorar la capacidad de decir NO, proponiendo también alternativas que puedan ayudar al equipo a lograr sus objetivos.',
        paragraph3:
          'Trato de pensar fuera de la caja. Me encanta aprender otras cosas que no están necesariamente relacionadas con la programación, como filosofía, psicología, arte, música, cocina, etc. Creo que una persona integral puede aportar una perspectiva única al desarrollo de software, llevando a soluciones más innovadoras y efectivas.',
      },
      experience: {
        title: 'Experiencia',
        freelanceTitle: 'Experiencias Freelance',
        technologies: 'Tecnologías:',
        methodology: 'Metodología:',
      },
      learning: {
        title: 'Aprendiendo Ahora',
      },
      education: {
        utfsm: {
          university: 'Universidad Técnica Federico Santa María',
          degree: 'Ingeniería Civil Informática',
          period: '2010 - 2015 (Incompleto)',
        },
        usach: {
          university: 'Universidad de Santiago de Chile',
          degree: 'Licenciatura en Ciencias de la Computación',
          period: '2015 - 2020 (Incompleto)',
        },
      },
      jobs: [
        {
          company: 'Globant',
          url: 'https://www.globant.com/',
          title: 'Líder Técnico',
          startDate: '2026-03-31',
          endDate: 'Actual',
          description:
            'Como Líder Técnico del Design System web de una importante aerolínea cliente, dirijo el ciclo de vida completo de su biblioteca de componentes visuales principal. Mi enfoque está en escalar la arquitectura web y webview garantizando altos estándares de accesibilidad, consistencia visual y usabilidad de dependencias. Coordino la hoja de ruta técnica, gestiono los flujos de publicación en entornos diversos y superviso el soporte en producción, asegurando que nuestros componentes sean una base confiable y de alto rendimiento para todo el equipo de frontend.',
          keywords: [
            'Javascript',
            'React',
            'Typescript',
            'TailwindCSS',
            'Jest',
            'Eslint',
            'Shell',
            'CI/CD',
            'Storybook',
            'Design Systems',
            'Frontend Architecture',
            'Accessibility',
            'Leadership',
          ],
          methodology: ['Ágil', 'Scrum'],
        },
        {
          company: 'Globant',
          url: 'https://www.globant.com/',
          title: 'Desarrollador Web Senior',
          startDate: '2025-02-02',
          endDate: '2026-03-30',
          description:
            'Trabajé como Desarrollador Web Senior para un cliente de una aerolínea importante. Mi equipo desarrollaba herramientas transversales para más de 30 artefactos web construidos con Next.js. Mis objetivos fueron: Crear paquetes y utilidades para uso transversal entre productos. Establecer y apoyar reglas estándar de calidad de código. Automatizar y definir procesos de entrega de productos. Planificar e implementar métodos para optimizar y actualizar dependencias críticas en todos los artefactos soportados. Definir reglas de seguridad y procesos de gestión de vulnerabilidades.',
          keywords: [
            'Javascript',
            'React',
            'Typescript',
            'Next JS',
            'TailwindCSS',
            'Vite',
            'Jest',
            'Eslint',
            'Shell',
            'Snyk',
            'SonarQube',
            'CI/CD',
            'CSP',
            'Storybook',
          ],
          methodology: ['Ágil', 'Scrum'],
        },
        {
          company: 'Perficient',
          url: 'https://www.perficient.com/',
          title: 'Ingeniero de Software Senior',
          startDate: '2022-11-02',
          endDate: '2024-06-01',
          description:
            'Trabajé como desarrollador de software senior, especializándome en desarrollo frontend. Me enfoqué en construir un producto que recompensaba a vendedores de autos en múltiples empresas de EE.UU. y Europa. Mi rol requería un alto grado de habilidad y confiabilidad, dada la complejidad del producto.',
          keywords: ['Javascript', 'React', 'Typescript', 'Next JS', 'Jest', 'Storybook'],
          methodology: ['Ágil', 'Scrum'],
        },
        {
          company: '1Health',
          url: 'https://www.1health.io/',
          title: 'Líder Técnico',
          startDate: '2021-04-01',
          endDate: '2022-10-31',
          description:
            'Fui el líder técnico de un equipo de cinco personas, donde era responsable de asegurar la calidad y guiar la entrega de resultados de exámenes médicos. Este rol perfeccionó mis habilidades de liderazgo y atención al detalle, que son esenciales en una industria exigente.',
          keywords: ['Javascript', 'React', 'Jest', 'Python', 'Django', 'AWS', 'PostgreSQL', 'Storybook'],
          methodology: ['Ágil', 'Kanban'],
        },
        {
          company: '1Health',
          url: 'https://www.1health.io/',
          title: 'Ingeniero de Software Senior',
          startDate: '2019-07-15',
          endDate: '2021-03-31',
          description:
            'Trabajé como desarrollador de software senior, especializándome en desarrollo frontend. Me enfoqué en un producto especializado en análisis genético y seguimiento de árboles familiares. Usé un modelo de IA propio para analizar datos y crear interfaces intuitivas y fáciles de usar. Mi capacidad para diseñar visualizaciones interactivas para conjuntos de datos complejos demostró mi atención al detalle y dedicación a entregar productos de alta calidad.',
          keywords: ['Javascript', 'React', 'Jest', 'Python', 'Django', 'AWS', 'PostgreSQL'],
          methodology: ['Ágil', 'Kanban'],
        },
        {
          company: 'Open Green Road',
          url: 'https://www.opengreenroad.com/',
          title: 'Ingeniero de Software',
          startDate: '2017-09-01',
          endDate: '2019-07-02',
          description:
            'Trabajé como desarrollador de software senior, enfocado en desarrollar interfaces de usuario interactivas para plataformas educativas. Mi experiencia creando interfaces atractivas mostró mi expertise en desarrollo de software y mi compromiso con entregar productos de alta calidad.',
          keywords: ['Javascript', 'React', 'Jest', 'JQuery', 'Node JS', 'Express JS', 'MongoDB'],
          methodology: ['Ágil', 'Kanban'],
        },
        {
          company: 'Nursoft',
          url: 'https://www.nursoft.cl/',
          title: 'Ingeniero de Software',
          startDate: '2017-04-01',
          endDate: '2017-08-20',
          description:
            'Trabajé como desarrollador de software en varios proyectos ágiles para diferentes clientes. En este rol, también proporcioné soporte técnico a equipos internos. Mi capacidad para trabajar efectivamente en diferentes equipos y adaptarme a nuevos desafíos demuestra mis habilidades en desarrollo de software.',
          keywords: ['Javascript', 'React', 'Jest', 'JQuery', 'React Native', 'Electron'],
          methodology: ['Ágil', 'Scrum'],
        },
        {
          company: 'Mediastream',
          url: 'https://www.mediastream.co/',
          title: 'Ingeniero de Software Jr',
          startDate: '2016-09-22',
          endDate: '2017-03-25',
          description:
            'Comencé mi carrera como desarrollador junior en una empresa de servicios de streaming que servía a clientes en toda Latinoamérica. Mi rol principal era apoyar al equipo de desarrollo con varias tareas relacionadas con visualización de contenido en plataformas Over-the-Top (OTT). Esta experiencia me dio una base sólida en desarrollo de software y me enseñó cómo trabajar efectivamente dentro de un equipo.',
          keywords: ['Javascript', 'React', 'Node JS', 'Express JS', 'JQuery', 'MongoDB'],
          methodology: ['Ágil', 'Scrum', 'Kanban'],
        },
      ],
      freelanceExperiences: [
        {
          company: 'Aevum',
          url: 'https://www.aevum.cl/',
          title: 'Desarrollador Frontend Senior (freelance)',
          startDate: '2022-04-01',
          endDate: '2024-07-01',
          description:
            'Fui desarrollador frontend en una empresa especializada en proporcionar proyecciones económicas para inversores individuales y corporativos a gran escala. Mi rol involucró optimizar e implementar interfaces visuales altamente funcionales y eficientes, usando herramientas de visualización de datos y actualización en tiempo real.',
          keywords: ['Javascript', 'React', 'Storybook'],
          methodology: ['Ágil', 'Scrum'],
        },
        {
          company: '4Geeks Academy (freelance)',
          url: 'https://www.4geeksacademy.com/',
          title: 'Profesor (freelance)',
          startDate: '2021-03-01',
          endDate: '2021-12-31',
          description:
            'Trabajé como mentor full-stack, enseñando principalmente tecnologías como JavaScript, React, Python y Flask.',
          keywords: ['Javascript', 'React', 'Python', 'Flask', 'PostgreSQL'],
          methodology: ['sesiones online'],
        },
        {
          company: 'Desafío Latam (freelance)',
          url: 'https://www.desafiolatam.com/',
          title: 'Creador de Contenido (freelance)',
          startDate: '2019-23-08',
          endDate: '2020-04-01',
          description: 'Fui creador de contenido, donde desarrollé contenido para sus cursos de JavaScript y React.',
          keywords: ['Javascript', 'React'],
          methodology: ['sesiones online'],
        },
      ],
    },
    projects: {
      title: 'Mis Proyectos',
      subtitle: 'Una selección de proyectos personales que desarrollo y mantengo activamente.',
      visitProject: 'Visitar Proyecto',
      viewOnGitHub: 'Ver en GitHub',
      status: {
        active: 'Activo',
        beta: 'Beta',
        openSource: 'Open Source',
      },
      items: [
        {
          name: 'Buscoabogados',
          description:
            'Directorio legal que conecta a personas con abogados verificados en Chile. Busca por especialidad, compara perfiles reales y contacta directamente, sin intermediarios ni tarifas ocultas.',
          url: 'https://buscoabogados.cl',
          github: null,
          status: 'beta',
          tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Turborepo', 'Node.js', 'Express', 'Python'],
        },
        {
          name: 'FluxWind UI',
          description:
            'Librería de componentes React open-source con Tailwind CSS 4 y accesibilidad WCAG 2.2 AA. Diseñada para velocidad, temas por industria y gran experiencia de desarrollo.',
          url: 'https://fluxwind.delrio.dev',
          github: 'https://github.com/mauriciodelrio/fluxwind-ui',
          status: 'openSource',
          tags: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'Storybook', 'Vitest'],
        },
        {
          name: 'DelRio Dev Blog',
          description:
            'Blog técnico personal con artículos sobre desarrollo de software, React, TypeScript, cultura de ingeniería y más. Disponible en inglés y español.',
          url: 'https://www.delrio.dev',
          github: null,
          status: 'active',
          tags: ['Next.js', 'Markdown', 'i18n', 'Tailwind CSS'],
        },
        {
          name: 'Tutorías DelRio',
          description:
            'Sesiones de tutoría de programación 1 a 1. Aprende React, TypeScript, Node.js, Next.js y más con un mentor experimentado. $15.000 CLP por sesión de 45 min.',
          url: 'https://tutorias.delrio.dev',
          github: null,
          status: 'active',
          tags: ['React', 'TypeScript', 'Node.js', 'Next.js', 'JavaScript'],
        },
        {
          name: 'DelRio Dev Skills',
          description:
            'Más de 50 skills para GitHub Copilot que cubren frontend, backend, arquitectura, seguridad (OWASP, GDPR, PCI, SOC2) y flujo de agente. Instalables en un comando con el asistente CLI.',
          url: 'https://www.npmjs.com/package/delriodev-skills',
          github: 'https://github.com/mauriciodelrio/delriodev-skills',
          status: 'openSource',
          tags: ['GitHub Copilot', 'TypeScript', 'CLI', 'npm', 'Open Source'],
        },
      ],
    },
  },
};

export const getDictionary = (locale) => dictionaries[locale] || dictionaries.en;
