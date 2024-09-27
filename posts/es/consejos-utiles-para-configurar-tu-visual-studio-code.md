---
title: "Consejos útiles para configurar tu Visual Studio Code"
author: "Mauricio Del Río"
category: "Programación"
date: "2024-05-15"
bannerImage: "/blog_images/vs_code.jpeg"
slug: "consejos-utiles-para-configurar-tu-visual-studio-code"
overview: "En este artículo verás los mejores plugins para instalar en Visual Studio Code en base a lo que he utilizado por muchos años como programador"
tags:
    - Programación
    - Consejos
    - Tutoriales
---
## Hablemos de Visual Studio Code

Visual Studio Code es un entorno de desarrollo integrado (IDE) que proporciona herramientas y facilidades para escribir código. Por lo general, los IDE también ofrecen herramientas de compilación, transpilación, y la posibilidad de tener una terminal propia para depurar, testear y ejecutar tu aplicación.

Las funcionalidades son enormes, y en este caso, Visual Studio Code es uno de los mejores que existen de forma gratuita. Aunque es cierto que existen otros entornos de desarrollo completos, como las herramientas de JetBrains, Visual Studio Code se enriquece mucho gracias a una comunidad que crea plugins para añadir funcionalidades y mejoras al entorno base.

En este artículo, te mencionaré las herramientas que más utilizo a la hora de programar. Muchas de ellas están enfocadas en el desarrollo web, ya que mi especialidad es el frontend; sin embargo, hay otras que son aplicables de manera general.

## Git Lens

GitLens es una herramienta que te permitirá gestionar de forma eficiente tu proyecto integrado directamente con Git. Tiene soporte para GitHub, GitLab, Bitbucket, entre otros. Ofrece una interfaz donde gestionar tus ramas y Pull Requests, así como la posibilidad de revisar línea por línea todos los cambios que se han aplicado, revertir cambios rápidamente, entre otras funciones.

## ESLint

ESLint es una herramienta que permite configurar los proyectos de forma que fomenten la escritura de código limpio. La severidad de ESLint en los proyectos dependerá exclusivamente de las reglas que se coloquen en ellos. Hay personas muy estrictas que no permiten ningún warning; el hecho de tener alguno puede provocar que los tests o los builds en los servidores no pasen, pero eso dependerá de cómo esté configurado el proyecto.

## JSON Formatter

JSON Formatter es una herramienta que permite ordenar un objeto JSON dentro de un archivo con dicha extensión. Al darle formato, lo organiza y lo hace mucho más fácil de leer. Es muy útil cuando quieres buscar un elemento en particular dentro de un objeto muy grande.

## Error Lens

Esta es una herramienta muy útil para verificar en tiempo real si tu código puede presentar algún error, incluyendo problemas con el tipado, retornos de funciones no esperados e incorrectos, entre otros. En pocas ocasiones, el programa puede sugerir errores que realmente no lo son, pero en términos generales, es muy acertado. Muy recomendado para agilizar el desarrollo y también para aquellos que están empezando a programar.

## WSL (Si trabajas con windows)

WSL significa Windows Subsystem for Linux. Desde Windows 10, es una característica que permite a las personas ejecutar un entorno Linux en Windows sin necesidad de crear una máquina virtual. Funciona mucho más rápido que una máquina virtual convencional, la instalación es muy sencilla y se integra muy bien con VS Code gracias a esta extensión. Particularmente, si tienes un PC de gama media o superior, recomiendo trabajar con Windows y WSL. No presenta casi ninguna limitación, no necesitas particionar tu disco duro y solo necesitas iniciar Windows, lo cual es útil para usuarios versátiles que no solo usan el computador para trabajar.

## Docker

Docker es una herramienta que permite encapsular aplicaciones en algo llamado contenedores. Los contenedores son entornos aislados que se pueden configurar de manera muy específica para adaptarse a las necesidades de tu aplicación. La ventaja de Docker es que, una vez configurado, es posible compartir esa configuración con tus compañeros de trabajo, asegurando que todos tengan el mismo entorno de programación, sin depender del hardware de cada equipo. La extensión de Docker en VS Code facilita enormemente la creación y mantenimiento de estos contenedores.

## NPM Intellisense

Para las personas que trabajamos con entornos JavaScript, esta herramienta facilita enormemente las importaciones en cada archivo y ofrece sugerencias inteligentes. Es una extensión sencilla y muy útil.

## Copilot y Copilot Chat (Es de pago)

Usar Copilot tiene un costo de aproximadamente 10 USD, pero si quieres agilizar tu desarrollo, lo recomiendo encarecidamente. Ofrece autosugerencias inteligentes, permite chatear con la IA para explicar problemas relacionados con tu código, y genera tests unitarios de forma automática. A pesar de ser una herramienta de pago, recomiendo su uso. Esos 10 USD pueden acelerar significativamente tu escritura de código y ahorrar mucho tiempo.

¡Eso es todo! Espero que esta información les haya sido útil y nos vemos en un próximo artículo.