---
title: "Entrevistas técnicas ineficientes: Recordar algoritmos no significa nada"
author: "Mauricio Del Río"
category: "Programación"
date: "2025-11-10"
bannerImage: "/blog_images/entrevista.png"
slug: "entrevistas-tecnicas-ineficientes-recordar-algoritmos-no-significa-nada"
englishSlug: "inefficient-technical-interviews-remembering-algorithms-means-nothing"
overview: "¿Qué es lo que necesita un equipo al momento de contratar a un nuevo desarrollador? En este artículo te explico por qué las entrevistas técnicas basadas en algoritmos no son la mejor forma de evaluar a un candidato."
published: false
tags:
    - Programación
    - Consejos
    - Crítica
---
## Las entrevistas técnicas

¡Buenas! De los lectores acá presentes ¿Cúantas veces han tenido que pasar por una entrevista técnica para un puesto de desarrollo de software? Seguramente muchas, **muchísimas** veces.

Estamos ya acostumbrados a tener que enfrentar entrevistas técnicas. 1, 2 o hasta 3 entrevistas técnicas para un proceso de contratación. El típico "comparte tu pantalla y resuelve este problema de algoritmos en X minutos". O la pregunta abierta de "Explícame cómo funciona un árbol binario de búsqueda y dame un ejemplo de implementación en el lenguaje que quieras".

Normalmente estas entrevistas están supervisadas por el equipo técnico, incluso el líder del equipo o el CTO. La idea es evaluar tus conocimientos técnicos, tu capacidad de resolver problemas y tu forma de pensar.

## ¿Cómo son los procesos de resolución de problemas en el día a día?

Bueno, esto ya va un poco en base a _mi experiencia_, claramente no soy sociólogo ni psicólogo, pero es muy notorio de que no todas las personas abordan los problemas de la misma forma. Algunos se toman tiempo en analizar el problema y luego lo ejecutan muy rápido. Otros necesitan meditar en silencio, hacer diagramas, escribir pseudocódigo, etc.

En mi caso, por temas de concentración, el hecho de hablar y pensar una solución es tremendamente contraproducente. No me deja leer con claridad, no me deja pensar con claridad. Necesito silencio, concentración y tiempo para analizar el problema. Luego, una vez que tengo la solución en mente, puedo explicarla y escribir el código rápidamente.

Pero los procesos de resolución de algoritmos en vivo frustran mucho esa dinámica. El proceso espera que, mientras piensas, estés revelando todo lo que estás pensando al entrevistador ¿Para qué? Bueno, debe tener sus motivos, pero la práctica es que **no es para todos**. Algunas personas se sienten incómodas hablando en voz alta mientras piensan, otras simplemente no pueden concentrarse de esa forma.

## ¿Recordar algoritmos significa algo?

Bueno, esto tiene _matices_, conocer algoritmos te hace una persona que busca eficiencia en sus soluciones. Pero el hecho de recordar 30 algoritmos y saber implementarlos al pie de la letra, no significa que seas un buen desarrollador.

Pero **sí** puede significar que eres una persona aplicada, que estudia antes de una entrevista y que se preocupa por el puesto al cuál está aplicando. 

El punto no pasa por prepararse o no, de hecho yo creo que gran parte de los entrevistados se preparan para afrontar una entrevista técnica. La pregunta es ¿Vale la pena prepararse realizando ejercicios de Leetcode?

## ¿Qué es lo que realmente importa?

Antes de contratar a un nuevo miembro para tu equipo, deberías preguntarte ¿Qué es lo que realmente necesito de esta persona? ¿Qué tareas va a realizar en el día a día? ¿Qué tecnologías va a utilizar? ¿Qué nivel de experiencia necesito?

Claro que no es extraño que en momentos puntuales, sobretodo en aplicaciones grandes, el realizar iteraciones sobre procesamiento de información, cálculos, manejo de caching, etc. Pueda requerir de algoritmos específicos para optimizar el rendimiento. Pero en la mayoría de los casos, un desarrollador **no va a estar implementando estos algoritmos**, la realidad es que en los lenguajes de alto nivel, muchas de estas estructuras y algoritmos ya están implementados en librerías estándar o de terceros.

¿Perdemos el tiempo creando árboles A/B desde 0 al momento de resolver alguna feature? La verdad... _Lo dudo_. Quizás si hay empleos que se dedican a ésto, pero no es lo común.

## Vamos a lo que hacemos en frontend

Acá me dirijo en base a mi experiencia personal, no creo válido hablar para cualquier tipo de empleo, pero en este sentido, si te contratan como desarrollador web frontend, lo más probable es que tu día a día consista en:

- Implementar interfaces de usuario basadas en diseños proporcionados por un equipo de diseño.
- Consumir APIs para obtener y mostrar datos en la interfaz.
- Optimizar el rendimiento de la aplicación web.
- Asegurar la compatibilidad entre diferentes navegadores y dispositivos.
- Aplicar conceptos de i18n y accesibilidad.
- Trabajar e implementar microfrontends o componentes reutilizables.

Ahora, no es lo único, siempre hay muchos elementos colaterales, pero en general, estas son las tareas **más comunes.**

## Preguntas para seniors

Manejo y política de cookies, capas de seguridad, performance, indexación en motores de búsqueda, uso de funciones nativas de browsers, compresión de imágenes, render en tiempo real, design systems, uso correcto de stores, fetching strategies, testing, module federation, packages, code splitting, CI/CD. ¿Les han realizado este tipo de preguntas? La verdad... _a mí, muy poco_, y creo que es fundamental. Por ejemplo ¿Conocen IndexedDB? ¿Saben cómo funciona el cacheo en browsers? ¿Saben cómo funcionan los service workers? ¿Saben cómo optimizar una web para que cargue rápido en conexiones lentas?

A mi me encantaría enfrentar entrevistas que me permitan **conversar sobre estos temas**, creo que a un profesional senior, pedirle que recuerde un DFS tree no le aporta mucho valor, pero sí conversar sobre performance, seguridad, arquitectura y buenas prácticas.

## ¿Y las preguntas de manejo comunicacional?

Para mí, **prácticamente ausentes**. ¿Cómo enfrentas un problema crítico cuando a uno de tus desarrolladores que ha estado trabajando en un feature que debe salir a producción en 2 días, sufre un accidente que lo incapacita por unos días? ¿Cómo manejas una situación en donde a 3 días de terminar un sprint, te cambian toda la planificación sabiendo que impactará negativamente en el ambiente del equipo? ¿Cómo le explicas a tu equipo que necesitamos tomar horas extras para cumplir con un deadline importante sin desmotivarlos?

Un senior **DEBE** saber comunicar estas situaciones. Esperar a que un Project Manager o un Product Owner te sobe el lomo y te diga _"Tienes que hacer horas extras"_ no es lo ideal. Un senior debe **saber comunicar al equipo** la importancia de cumplir con los deadlines, pero también debe saber escuchar al equipo y entender sus necesidades.


## Las entrevistas situacionales y conversacionales

El diálogo en una entrevista, con una pregunta abierta, puede ser mucho más enriquecedor. Permite al entrevistador conocer cómo piensa el candidato, cómo aborda los problemas y cómo se comunica. Además, permite al candidato mostrar su experiencia y conocimientos de una manera _natural_.

Normalmente, en el día a día, cuando sale una propuesta o un issue a resolver, lo ideal es siempre hablar del tema con algún colega. A mí me resulta mucho. ¿Qué opinas si abordamos el problema de X forma? ¿Crees que deberíamos evaluar el performance de lo que vamos a resolver antes de subirlo?. Este tipo de relaciones, no solo enriquecen el trabajo, sino que también fomentan un **ambiente colaborativo y de aprendizaje continuo**.

Muchas veces se habla de que los seniors en una empresa deben estar abiertos al mentoring, y sí, tiene mucho sentido. Pero al mismo tiempo, ese senior no puede medir con una vara estándar a cualquier persona que está comenzando. Una persona con seniority elevado, no tiene una brecha tan abismal en conocimiento técnico con otros pares. Tu seniority, luego de muchos años, te lo da la **experiencia social**, **la empatía** y la **capacidad de escuchar.**

## ¿Y para los no-seniors?

¡Hablen de sus proyectos! ¿Qué impacto creen que ha tenido lo que han hecho? ¿Qué aprendieron en sus antiguos puestos de empleo? ¿Cómo manejaron situaciones que se escapaban de su actual seniority? ¿Cómo se comunican con sus colegas? ¿Cómo manejan el feedback?

Esto no quiere decir que no esperemos una respesta sólida basada en **conocimientos técnicos**, pero en el diálogo, eso se da de forma natural. Si una persona ha trabajado en proyectos reales, seguramente tendrá mucho que contar. Y si no lo ha hecho, bueno, es una oportunidad para conocer sus ganas de aprender y crecer.

## Entonces, Yo **NO HARÍA** entrevistas técnicas

Puede sonar riesgoso, pero cuando buscas seniors, sabes perfectamente cuando una persona lo es, solamente hablando con ella. Qué me importa que me resuelva un algoritmo en 20 minutos, si no sabe como configurar cabeceras para proteger sus requests, qué me importa que recuerde un heap sort si no tiene idea como utilizar workers para optimizar procesos en segundo plano. No puede ser más irrelevante para mí que se acuerde del algoritmo de la ventana corrida si no puede manejar bien los rerrenders en React.

Hablemos de lo reelevante entonces, hablemos de reactividad, storing, fetching, performance, seguridad, auditoría de dependencias, testing, accesibilidad, i18n, SEO. Y por sobretodo... **¡Hablemos!**

Para terminar, siendo un poco contradictorio, les haré unos artículos hablando sobre unos pocos algoritmos que les pueden salvar la vida en una entrevista técnica. No se aprendan 20... **¡Aprendan 3!**
