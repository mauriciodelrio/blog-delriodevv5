---
title: 'Mis Skills para VS Code: Instalables y Públicas '
author: 'Mauricio Del Río'
category: 'Programación'
date: '2026-04-12'
bannerImage: '/blog_images/skills.png'
slug: 'mis-skills-para-vs-code-instalables-y-publicas'
englishSlug: 'my-vs-code-skills-installable-and-public'
overview: 'Me he creado una pequeña colección de skills para VS Code que me ayudan a ser más productivo. He aprovechado de volverlas un package para que cualquiera pueda instalarlas'
published: true
readingTime: '5 minutos'
tags:
  - Programación
  - VS Code
  - Productividad
  - Skills
---

## Estoy de vacaciones

Hola a todos! Aprovechando que estoy de vacaciones, he decidido ordenar un poco mi productividad y para ello me he creado una colección de skills para VS Code que me ayudarán a ser más productivo. La idea es tener estas skills para trabajar en cosas personales y no tener que estar dando promps complejos cada vez que quiero hacer algo.

Cuando estuve trabajando en estas skills me di cuenta de que podría **compartirlas** a todo el mundo, pero como es muy aburrido tener que ir creándolas una a una, decidí empaquetarlas en un package que cualquiera pueda instalar y usar. Así que aquí estoy, compartiendo mis skills para VS Code con ustedes.

## ¿Qué son las skills?

Las skills son, en escencia, **reglas**. Básicamente tú cuando interactúas con un agente, le dices qué debe tener en consideración a la hora de ejecutar cierta acción. Por ejemplo, si estás trabajando en un proyecto de React, puedes definir reglas básicas sobre cómo es correcto programar con React, le das contexto a tu agente para que cuando quieras pedirle que genere algo, este agente tome dicho contexto y lo aplique a lo que sea que le pidas.

Las skills pueden ser simples como **complejas**, puedes añadir reglas de negocio, reglas de estilo, reglas de arquitectura, etc. La idea es que estas skills te ayuden a ser más productivo y a mantener un estándar de calidad en tu código.

## Consideraciones básicas de mis skills

Como hablante hispano, no me gusta mucho la idea de tener solo skills en inglés, puesto que a veces me es más fácil interactuar con los agentes en español, aunque gaste más tokens, se me hace mucho más fluída la comunicación. Por lo mismo he creado las **skills en español** y, basados en las mismas, hice su propia réplica **en inglés**, de esa forma existe la libertad de elegir en qué idioma quieres setear tus skills en tu máquina.

Para organizar mentalmente estas skills, las dividí en 3 categorías:

- **Skills de Agent Workflow**: Estas skills están pensadas para que el agente pueda entender **cómo** es tu flujo de trabajo, cómo planificar, como ejecutar cualquier tarea, etc. Son skills que le dan contexto al agente sobre cómo es tu forma de trabajar, para que cuando le pidas algo, siempre respete **la misma estructura** al momento de generar código o cualquier acción.
- **Skills de Seguridad y Gobernanza de Datos**: Estas skills están pensadas para que el agente tenga en consideración aspectos de **seguridad y gobernanza** a la hora de generar código, por ejemplo, no exponer información sensible, no generar código vulnerable, etc. Estas skills están apartadas ya que se basan principalmente en normativas internacionales de estándares de seguridad, por ejemplo OWASP, ISO 27001, etc. Por lo mismo, estas skills son aplicables **a cualquier tipo de proyecto**, sin importar el lenguaje de programación o la arquitectura que estés utilizando.
- **Skills de Software**: Estas skills son el fuerte de todo lo que implica generar software, acá la categorización parte desde arquitectura, frontend, backend, workflows, testing, deploys, docker, git, etc. Este core **es muy importante** ya que dependiendo del tipo de app que estés desarrollando, el agente podrá aplicar estas skills para generar código de calidad, con buenas prácticas, etc.

> **⚠️ Un punto a tener en cuenta:** Las skills pueden hacerte gastar más tokens de lectura, ya que cada vez que le pides algo a tu agente, este tiene que leer todas las skills definidas para aplicarlas. Por eso es importante tener un **buen balance** entre la cantidad de skills que tienes y la utilidad que te aportan. Además, debes granular las skills para que tu agente solo consulte las que son realmente relevantes para tu requerimiento.

## ¡Mis skills son instalables y públicas!

Ya que, me gusta el software libre y poder compartir mis creaciones con la comunidad, decidí hacer estas skills **instalables y públicas**. Esto significa que cualquiera puede instalar estas skills en su VS Code y utilizarlas a gusto. Este repo está bajo la licencia MIT, lo que significa que puedes usar, modificar y distribuir estas skills sin ningún tipo de restricción, siempre y cuando respetes los términos de la licencia (Agradezco igualmente una estrellita en GitHub si te gustan).

También puedes hacer **PRs** para mejorar estas skills, agregar nuevas, corregir errores, etc. La idea es que esta sea una comunidad de colaboración donde todos podamos aportar y beneficiarnos de estas skills.

## ¿Dónde puedo encontrar estas skills?

Acá te comparto [El link a mi repositorio de GitHub](https://github.com/mauriciodelrio/delriodev-skills) donde puedes encontrar todas mis skills para VS Code. Ahí encontrarás instrucciones sobre cómo instalarlas, cómo configurarlas, etc.

Valoraré muchísimo cualquier feedback que me puedan dar sobre estas skills, ya sea para mejorarlas, corregir errores, agregar nuevas, etc. La idea es que esta sea una herramienta en constante evolución y que permita beneficiarnos a todos.

## Futuro

Tengo pensado adaptar estas skills para Claude y cualquier otra herramienta de moda, he visto que ahora algunas herramientas pueden "instalar" skills, por lo que no veo mala idea generar estos archivos a futuro. Por ahora me enfocaré en ir puliendo estas skills, probándolas y ver cómo pueden ir mejorando en su contexto y ejecución.

¡Un abrazo a todos! Espero que estas skills les sean de utilidad para ser más productivos en su día a día con VS Code!
