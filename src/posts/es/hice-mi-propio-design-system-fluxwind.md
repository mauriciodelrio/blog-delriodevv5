---
title: 'Hice mi propio Design System: Fluxwind'
author: 'Mauricio Del Río'
category: 'Programación'
date: '2026-04-20'
bannerImage: '/blog_images/ds.png'
slug: 'hice-mi-propio-design-system-fluxwind'
englishSlug: 'i-made-my-own-design-system-fluxwind'
overview: 'En el mercado, existen muchísimos design systems, pero soy un poco mañoso y quiero tener el control de mis componentes, te explico mi lógica detrás de esta decisión.'
published: true
readingTime: '6 minutos'
tags:
  - Programación
  - Frontend
  - JavaScript
  - Fluxwind
---

## Muchas ideas, poco tiempo

¡Hola a todos! Ya se me están acabando las vacaciones y aunque _quizás_ no descansé tanto, de todas formas me siento con más energías. Aproveché de reforzar algunos elementos que han estado a la vanguardia con la IA, y no hay nada mejor que aprender haciendo. Así es como nace [Fluxwind](https://fluxwind.delrio.dev), mi propio design system construido sobre Tailwind CSS, con el objetivo de tener un control total sobre mis componentes, aprender más sobre accesibilidad y personalización, y crear una herramienta que pueda adaptarse a mis proyectos y necesidades.

## Hablemos de Fluxwind

Antes de entrar en detalles, les explico el nombre. Fluxwind nace de la combinación de dos ideas: _Tailwind_, el framework de CSS que está en la base del sistema, y _flux_, que en inglés evoca fluidez y adaptabilidad. El resultado es un nombre que intenta resumir lo que el proyecto es: un sistema construido sobre Tailwind, pero diseñado para fluir y adaptarse a distintos productos.

La verdad es que design systems existen muchos, gran parte de ellos son muy escalables, personalizables y sencillos de integrar, pero hay varias razones por las que decidí crear el mío propio. Aquí te comento mis principales motivaciones:

1. **Control total**: Quiero tener el control absoluto sobre cada componente, desde su diseño hasta su comportamiento. Esto me permite adaptarlo exactamente a mis necesidades y preferencias sin depender de las limitaciones de un sistema preexistente.
2. **Aprendizaje**: Por mi trabajo, al tener a cargo un design system, es una buena oportunidad para profundizar conocimientos. Mi principal refuerzo estuvo de la mano con accesibilidad, y aunque ya tenía conocimientos previos, me permitió entender mejor cómo implementar componentes accesibles desde cero, cómo utilizar bien los tags, cómo contrastar colores correctamente y cómo definir herramientas adicionales que pueden mejorar la experiencia del usuario.
3. **Personalización**: Quiero que Fluxwind refleje mi estilo. Si bien no soy la persona que más sepa de diseño, creo que tener un producto propio que pueda trasmitir mi "sello" en todos los futuros proyectos que tenga, me acerca un poco más a mi objetivo de potenciar mi marca personal.
4. **Compatibilidad con mis proyectos**: las decisiones tecnológicas que tomé para construir Fluxwind están 100% adaptadas a mis necesidades, stack tecnológico, proyectos y con una cuota de innovación. Puedo utilizar mi design system para implementar nuevas herramientas, experimentar con nuevas tecnologías y probar cosas que quizás no podría hacer con un sistema preexistente.

## Decisiones tecnológicas

La base de Fluxwind no pasa por la tecnología simplemente, es una decisión en base a lo que me gustaría tener en un design system. En este sentido mis prioridades fueron:

1. **Accesibilidad desde 0**: Ya me ha tocado evidenciar que ir volviendo componentes accesibles post marcha, se vuelve caótico, construir en pixeles, no pensar en contrastes de colores o mal utilizar los tags hacen que los refactors sean más complicados que la implementación misma, por lo que cada componente tenía que cubrir al menos **WCAG 2.2 AA**.
2. **Átomos, moléculas y organismos**: Siempre me ha gustado esta estructura. Es muy común ver design systems que llegan a etapas moleculares, pero eso no me es conveniente. Es fácil, por ejemplo, encontrar muchos organismos construídos con tailwind, pero incluso muchos de esos organismos son pagados, lo que me rompe un poco el esquema de reutilizar recursos. 
3. **Software libre**: Hilando con el punto anterior, no quiero depender de recursos pagos, ni de licencias restrictivas. Quiero que Fluxwind sea completamente libre, para que pueda ser utilizado en cualquier proyecto sin preocupaciones legales o económicas, y así también, contribuir a la comunidad, si alguien lo quiere usar, les comparto el [repositorio de GitHub](https://github.com/mauriciodelrio/fluxwind-ui).
4. **Flexibilidad y personalización**: Por ahora muchos de los componentes son bastante básicos, aunque son extensibles a propiedades nativas HTML (átomos), la idea es siempre ir añadiendo características en base a mis propias necesidades. Por ejemplo, si en algún momento necesito construir un calendario, puedo añadirlo como organismo a Fluxwind y dejarlo como recurso que me pueda servir para cualquier otro proyecto.
5. **Temas**: Aproveché de tokenizar todo el sistema de colores, añadir soporte **dark mode** de forma nativa y ya que estaba en eso, aproveché de diseñar tokens según negocios, uso de colores para productos de salud, e-commerce, legal, etc. Gracias a esto Fluxwind puede adaptarse fácilmente a diferentes contextos y necesidades.
6. **Stack**: Este punto igual es importante, puesto a que pude decidir cómo maneja el estado interiormente el design system, qué herramientas usar para testing, qué tecnologías usar para el desarrollo, etc. En este sentido, decidí construirlo con **React, TypeScript y Tailwind CSS** y para el manejo de estados estoy usando _signals_, ya que son tecnologías con las que estoy familiarizado y que están muy ligadas a las aplicaciones que suelo construir.
7. **Documentación**: Este punto es igual de importante, puesto que me es bastante frecuente encontrar librerías con documentación no del todo clara, en este sentido, decidí que el [storybook de Fluxwind](https://fluxwind-storybook.delrio.dev) sea lo más claro posible, con ejemplos de uso, casos de uso, y explicaciones detalladas de cada componente, para que cualquier persona pueda entender cómo usarlo sin problemas.

## Uso de la IA

Fluxwind fue un proyecto que retomé gracias al trabajo que hice construyendo mi propio [dataset de skills](https://github.com/mauriciodelrio/delriodev-skills). Ya que había trabajado en un sistema potente de skills, iterar sobre Fluxwind me hizo notar cuando las definiciones se quedaban cortas, ambiguas, mal referenciadas y en base a eso, _maté dos pájaros de un tiro_, por un lado reforcé mi dataset de skills y por otro lado, pude construir componentes con la ayuda de la IA, lo que me permitió avanzar más rápido y con una base sólida.

Gracias a un buen sistema de skills, todos mis componentes respetaron la misma estructura, tokens de escalado, colores, espaciados, entre otros. Lo que hizo que el proceso de construcción fuera mucho más fluido y consistente. Además, pude aprovechar la IA para generar ejemplos de uso, documentación y casos de prueba, lo que me ahorró mucho tiempo y esfuerzo.

## ¡Fluxwind ya disponible!

No solamente construí Fluxwind, sino que también le hice una [página web](https://fluxwind.delrio.dev) en donde absolutamente todos los componentes que se ven renderizados ahí son componentes de Fluxwind. En la página incluí showcases, casos reales de uso, motivaciones y referencias a las documentaciones oficiales. Para que esto fuera posible, Fluxwind ya está publicado como un paquete npm, así que si quieres probarlo, puedes instalarlo con el siguiente comando:

```bash
npm install @fluxwind/core
pnpm add @fluxwind/core
yarn add @fluxwind/core
```

También puedes utilizar temas específicos para tu negocio, por ejemplo:

```bash
# Tema base
import "@fluxwind/core/styles";
# Temas específicos, puedes elegir uno.
import "@fluxwind/core/styles/themes/health";      // Teal — Healthcare, clinical
import "@fluxwind/core/styles/themes/legal";       // Navy — Legal, compliance
import "@fluxwind/core/styles/themes/commerce";    // Amber — E-commerce, retail
import "@fluxwind/core/styles/themes/finance";     // Green — Fintech, banking
import "@fluxwind/core/styles/themes/creative";    // Rose — Creative, agencies
import "@fluxwind/core/styles/themes/education";   // Cyan — EdTech, learning
import "@fluxwind/core/styles/themes/high-contrast"; // WCAG AAA — Accessibility
```

Lo interesante es que además existe un componente en donde puedes **definir un tema específico** solamente para ese componente y sus hijos, lo que te da mucha flexibilidad para mezclar estilos dentro de un mismo proyecto.

Si quieres ver la página web, puedes visitar el siguiente enlace: [Fluxwind Design System](https://fluxwind.delrio.dev). Te comparto también el repositorio de GitHub por si quieres echarle un vistazo al código, contribuir o simplemente ver cómo está construido: [Fluxwind GitHub](https://github.com/mauriciodelrio/fluxwind-ui). Por último, te comparto el storybook de Fluxwind, donde puedes ver todos los componentes en acción, con ejemplos de uso y documentación detallada: [Fluxwind Storybook](https://fluxwind-storybook.delrio.dev).

Si te interesa este producto, lo único que te pediré es una estrellita ⭐ en GitHub, eso me ayudaría muchísimo a seguir motivado con este proyecto y a darle más visibilidad dentro de la comunidad.

## Próximos pasos

Este es el comienzo de Fluxwind, con el tiempo irá creciendo, añadiré muchos organismos más, seguiré mejorando la documentación, y quizás en algún momento, si veo que hay interés, podría considerar añadir soporte para otras tecnologías como Vue o Svelte (muy de moda en estos tiempos). Por ahora, mi enfoque principal es seguir construyendo componentes útiles para mis proyectos y compartirlos con la comunidad.

Espero les haya gustado este proyecto, y si tienen alguna sugerencia, comentario o simplemente quieren saludar, no duden en contactarme. ¡Gracias por leer!