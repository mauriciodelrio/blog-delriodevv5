---
title: 'Por qué documentar tu código no es perder el tiempo'
author: 'Mauricio Del Río'
category: 'Programación'
date: '2026-01-24'
bannerImage: '/blog_images/documentar.png'
slug: 'debes-documentar-tu-codigo'
englishSlug: 'you-should-document-your-code'
overview: 'El código se autoexplica si está bien hecho, en este artículo voy a romper un poco ese mito y te contaré por qué es importante documentar tu código, incluso si eres el único que lo va a leer.'
published: true
readingTime: '10 minutos'
tags:
  - Programación
  - Consejos
  - Opinión
---

## Lo que para tí es ordenado, para otro puede ser un caos

Hola! hace tiempo que no escribía un nuevo artículo, mi inspiración esta vez pasa por unas pruebas de concepto que tuve que realizar en mi trabajo. El código en sí no era tan complicado de entender, pero los pasos necesarios para poder ejecutar correctamente este proyecto de forma local en base a como estaba creado el entorno, era un **verdadero caos**.

No se confundan, el código en sí estaba bastante ordenado, con prácticas aceptables, siguiendo bien los estándares de tipificados, distribución de archivos, nombre de variables, etc. Pero el hecho es que era un repositorio que _nunca_ me había tocado revisar. En mi trabajo actual, damos soporte a más de **40 artefactos web** de una aplicación de escala muy grande y compleja, por lo que recordar cada detalle de cada proyecto es imposible.

Y esto es evidente, hay muchas squads que dan soporte a 3 o 4 artefactos web cada una, para ellos, es relativamente sencillo entender el scope de cada uno de ellos, pero mi equipo, da soporte a todas estas squads (además de otras cosas), entonces, tener que leer cada proyecto, escrito por diversas células de desarrollo, con distintos estilos y formas de hacer las cosas, es un verdadero dolor de cabeza.

Es por esto que a nivel de cuenta, se están implementando estándares internos de ordenamiento de código, code style, procesos de semver, PRs, strong linting, etc. Proceso bastante cuestionado y muy difícil de empatizar. Cuando en tu círculo cercano, o sea, en tu misma squad, todos los devs entienden lo que hacen, de pronto ven estas prácticas como una _pérdida de tiempo_.

## Los estándares y un poco de ego

Siguiendo con el punto anterior, cuando implementamos nuevas reglas automatizadas para análisis de código estático, lo primero que salta a la vista es: _"¿Por qué tengo que seguir estas reglas si mi código ya está bien hecho?"_ _"Por qué debo usar X formato si la documentación de Y librería usa otro formato?"_ _"¿Por qué tengo que perder tiempo en estas tonteras si los archivos están bien definidos?"_.

Acá los desarrolladores, en muchos de estos puntos, tienen toda la razón, si tu código sigue estándares definidos por algún framework, genial pero, si TypeScript tiene un estándar para definir archivos que contienen types e interfaces, Next.js tiene por otro lado un formato _distinto_ para definir los mismos tipos de archivos. ¿Es un estándar entonces?

> Si hay más de una forma correcta de hacer la misma cosa, no hay un estándar.

Cuando hablamos de estándares, en este sentido, solamente deberíamos categorizarlo como una "convención". Si nos remitimos al concepto de una convención ¿Podemos definir nuestras propias convenciones? Claro que sí, nuestra convención puede estar totalmente basada en una ya existente por alguna librería o framework incluído en el repositorio. La convención decidida, no indica que es la _única_ forma correcta de escribir código, indica que toda la capa de equipos web, escribirán su código bajo esa convención, para que la legibilidad y mantenibilidad del código sea mucho mejor.

Transmitir este mensaje es un poco difícil, porque implica salir de tu zona de confort y tu propia burbuja de trabajo. Cuando trabajas en una empresa en donde prácticamente todos los devs son semisenior para arriba, el ego sobre cómo hacer las cosas "bien" es muy común. Particularmente en el equipo en donde estoy, he tenido que abstraerme un poco de eso, porque cuando llega un equipo explicándome que no ven necesario definir o clasificar un archivo de X o Y forma, la verdad es que, en términos puros de buenas prácticas, tienen toda la razón, pero en términos de la mantenibilidad interna, **no la tienen**.

Y acá es donde quiero conectar con el tema central de este artículo. Los estándares de código, el linting, las convenciones... todo eso está muy bien, pero hay una capa que muchas veces ignoramos y que tiene el mismo problema: la documentación. ¿Por qué? Porque el ego también juega un rol importante ahí.

## El código limpio no se explica solo

OK, ya tenemos nuestro código estructurado, con un coverage muy alto, linting estricto, tipados fuertes, carpetas y archivos bajo el mismo formato, todo indexado y un largo etcétera. ¿Esto me asegura realmente que el código es legible? Acá igual hay controversia, y tiene que ver con el mismo ego del desarrollador.

Ya me ha tocado algunas veces conocer personas puristas de "programar" como tal, que sienten que solo leyendo el código, si está bien ordenado, es más que suficiente, sin comentarios, sin nada. La verdad es que **no**, porque en nuestro día a día nosotros no perdemos el tiempo leyendo código, nosotros trabajamos en base a procesos y flujos de información, de un punto A a un punto B.

Para alguien que tiene tiempos acotados, asiste a muchas reuniones, dedica tiempo a planificación, definición de nuevos objetivos, resolución de casos críticos, etc. Lo que _menos_ importa en toda esa larga lista de tareas de un sprint es realmente leer código como tal. Puedes llevar 20 años en la industria, y vas a perder igualmente mucho tiempo entendiendo el trabajo de otros (¡y el tuyo igual!).

Un código ordenado y con convenciones definidas, ayuda, sobretodo cuando quieres aplicar cambios masivos y transversales, ya que es sencillo no perderse en estructuras, pero esto no implica _absolutamente nada_ a la hora de querer levantar la aplicación, probar flujos, entender si debes usar data mockeada, real, etc.

## No huyas de documentar

Documentar, es escribir con lenguaje natural, la definición de algún proceso, flujo, o incluso la explicación de alguna función compleja. No es necesario documentar todo, pero **sí** lo es documentar lo que no es evidente a simple vista.

Y cuando digo "no es necesario documentar todo", me refiero a que no tienes que explicar línea por línea ni función por función. La documentación efectiva se enfoca en los procesos complejos, en esos flujos que sabes que si alguien más los lee (o tú mismo en 6 meses), va a necesitar contexto adicional para entenderlos. Es más importante documentar el _por qué_ y el _para qué_ que el _cómo_.

Te doy un ejemplo rápido. Imagina que tienes una función que calcula un descuento:

```javascript
// ❌ Sin contexto
const getDiscount = (user) => (user.purchases > 10 ? 0.15 : user.isNew ? 0.1 : 0);

// ✅ Con contexto DEL PROCESO DE NEGOCIO
/**
 * Calcula descuento según política comercial Q1-2026.
 * Clientes frecuentes (>10 compras): 15%
 * Nuevos usuarios (primera compra): 10%
 * @see https://confluence.empresa.com/politica-descuentos
 */
const getDiscount = (user) => (user.purchases > 10 ? 0.15 : user.isNew ? 0.1 : 0);
```

No estoy explicando _qué_ hace el código (eso se entiende), estoy explicando el contexto de negocio detrás de esa lógica. Esa es la diferencia.

La documentación tiene otras capas igualmente. No sé si lo has notado, pero cuando creas cualquier repositorio en GitHub, tienes la opción de crear un archivo `README.md`. Ese archivo tiene un propósito de existencia, no está de adorno. El `README.md` es el **primer punto de contacto** que alguien tiene con tu proyecto. Ahí debes explicar de forma clara y concisa, qué hace tu proyecto, cómo instalarlo, cómo correrlo, y cualquier otra información relevante para que alguien pueda entender rápidamente el propósito del proyecto.

Si analizas el mercado, los grandes proyectos exitosos, son exitosos justamente por su propia documentación. Una buena documentación genera interés, el interés genera comunidad y la comunidad complementa y añade una capa extra de valor al proyecto.

## Hay que saber leer y escribir

Si vas a documentar, por favor, hazlo bien. Me ha pasado muchísimo, meterme a la plataforma de confianza de documentos de una empresa, y encontrarme con atrocidades, faltas de ortografía vistas en kinder, pésima redacción, texto sin objetivos claros, desorden, procesos mal explicados y asumiendo que el lector tiene conocimientos previos que no tiene.

Cuando ya vayas avanzando en la industria (y esto aplica a cualquier tipo de trabajo), si sientes que tienes bases débiles en habilidades que se adquieren en el ciclo escolar obligatorio de tu país, como redacción, ortografía, matemáticas básicas, etc. Te recomiendo que inviertas tiempo en reforzar esas habilidades. Un buen profesional no solamente es bueno en su área técnica, sino que también sabe desenvolverse de forma **íntegra**, y la integridad, parte desde las bases de la comunicación.

## Usa la IA

Ahora bien, si sientes que tus habilidades aún no están pulidas, usa la IA! Ahora mismo yo luego de terminar de redactar este artículo, le pediré a la IA que lo revise y vea si hay faltas de ortografía y redacción, vea si el contexto está bien descrito y me sugiera cambios sutiles, esto sin perder mi escencia claro está. Este tipo de cosas también te ayuda a tí, para aprender tu ritmo, estilo y forma de escribir.

Si debes documentar en inglés y te falta mucha gramática, lo mismo! escrite todo en español, genera un buen propmt para que la IA lea el texto, y lo traduzca de forma correcta (no literal) usando términos que existan en inglés y aprovechando las diversas formas de expresar ciertos conceptos que solamente existen en inglés.

## Herramientas que te pueden ayudar

Existen herramientas que facilitan la documentación técnica y vale la pena que las conozcas. **JSDoc** y **TSDoc** te permiten documentar funciones directamente en el código, generando referencias automáticas que tu IDE puede mostrar. **Swagger/OpenAPI** hace lo mismo pero para APIs REST, documentando endpoints de forma estandarizada.

Ahora, quiero ser claro: estas herramientas son muy útiles, pero siguen siendo documentación técnica pura. Lo que realmente marca la diferencia es cuando combinas lo técnico con el lenguaje natural, explicando no solo la firma de una función, sino el **propósito de negocio** que cumple. Las herramientas te ayudan con la estructura, pero la claridad del mensaje depende de _ti_.

## Tu documentación debe ser dinámica

Gracias al formato markdown, documentar es muy simple, definir estilos estándares de títulos, bloques de código, listas, quotes, etc. es muy sencillo. Aprovecha el uso de énfasis, negritas, cursivas, bloques de código, código inline, links, imágenes, diagramas, etc. para hacer tu documentación mucho más amigable y fácil de leer.

Además, no tengas miedo de actualizar tu documentación. Un error común es pensar que una vez que un documento está escrito, ya no se debe tocar más. La documentación debe ser un **ente vivo**, que evoluciona junto con el proyecto. Si algo cambia, actualiza la documentación. Si encuentras una mejor forma de explicar algo, hazlo.

## Semver también para la documentación

Si tu proyecto sigue un versionado semántico (semver), tu documentación también debería hacerlo. Si haces un cambio mayor en tu proyecto que rompe compatibilidad, asegúrate de actualizar la documentación para reflejar esos cambios. Si haces un cambio menor o una corrección de errores, también deberías considerar si la documentación necesita ser actualizada.

Todos tus PRs asócialos a issues, para cada PR define una estructura. ¿Qué estás haciendo con estos cambios? ¿Cuál es el motivo? ¿Qué tipo de cambio es? ¿Es breaking change? ¿Qué pruebas corriste antes de hacer tu PR?

Si utilizas bien los recursos de github, puedes automatizar la generación de changelogs basados en los mensajes de tus commits y PRs, lo que facilita aún más el seguimiento de los cambios en tu proyecto y su documentación.

## Me falta tiempo en el sprint

Es una excusa que escucho con frecuencia, y aunque entiendo que los sprints pueden ser intensos, la realidad es que si sientes que estimaste un ticket que no te permite añadir documentación, evidencia, explicaciones, demos, etc. **El responsable de esa estimación eres tú**. Toda US debe tener dentro de sus goals:

1. Código funcional que cumpla con los requisitos.
2. Pruebas unitarias y/o de integración que aseguren la calidad del código.
3. Documentación adecuada que explique el propósito y funcionamiento del código.
4. Evidencias de pruebas, capturas, videos, etc. que demuestren que el código funciona como se espera.
5. Cualquier otro recurso necesario para que alguien más pueda entender y trabajar con el código en el futuro.
6. Demos o ejemplos de uso si aplica.
7. Refactorizaciones si es necesario.

Si trabajas en una empresa que no tiene estos conceptos claros a la hora de definir una US, te recomiendo que trates de instalar y respetar tú estos procesos. Cuando el equipo se de cuenta que tus tickets se están cerrando con todos estos puntos muy bien realizados, el mismo equipo se motivará a seguir esos mismos estándares.

Ahora, no todos los trabajos son iguales, y no todas las empresas tienen la misma cultura. Si sientes que estás en un entorno tóxico, en donde no valoran tu trabajo, no quieren hacer un buen trabajo y no les importa la calidad de lo que están entregando, mi recomendación es que **busques otro lugar**. La industria del software es muy amplia, y hay muchas empresas que valoran la calidad, la documentación y el buen trabajo.

## Mensaje final

Documentar tu código no es una pérdida de tiempo, es una **inversión** en la calidad y mantenibilidad de tu trabajo. No importa si eres un desarrollador junior o senior, la documentación es una habilidad esencial que todos debemos cultivar. No huyas de documentar, abraza la documentación como una parte integral de tu proceso de desarrollo, y verás cómo tu trabajo se vuelve más valioso y apreciado por ti mismo y por los demás.

No olvides pulir tus habilidades más allá de lo meramente técnico, y utiliza todas las herramientas a tu disposición, incluida la IA, para mejorar la calidad de tu documentación. Recuerda, un buen desarrollador no solo escribe buen código, sino que también sabe **comunicarlo efectivamente**.

Nos vemos en el próximo artículo!
