---
title: 'Los roadmaps están mal: aprende bien a programar - Parte 2'
author: 'Mauricio Del Río'
category: 'Programación'
date: '2025-11-05'
bannerImage: '/blog_images/roadmap.png'
slug: 'los-roadmaps-estan-mal-aprende-bien-a-programar-parte-2'
englishSlug: 'roadmaps-are-wrong-learn-to-code-properly-part-2'
overview: 'En este artículo presento la segunda parte de una serie donde explico por qué los roadmaps para aprender programación están mal enfocados y cómo deberías enfocar tu aprendizaje desde cero.'
published: true
readingTime: '10 minutos'
tags:
  - Programación
  - Tips
  - Tutoriales
  - Roadmaps
  - Aprendizaje
---

## Acá estamos otra vez!

En mi [artículo anterior](https://delrio.dev/es/posts/los-roadmaps-estan-mal-aprende-bien-a-programar-parte-1) te hablé sobre la importancia de conocer la historia de la informática, el concepto de algoritmo y cómo pensar en algoritmos. Si no has leído esa primera parte, te recomiendo que lo hagas antes de continuar con este artículo, ya que es **fundamental** para entender lo que voy a explicar a continuación.

## Estuve dándole unas vueltas al artículo anterior y ... ¿Ahora qué?

Ya no estamos tan lejos de meter las manos en la masa, pero antes de eso, creo que deberías repasar otros conceptos básicos que te ayudarán a entender mejor el mundo de la programación.

## Software y Hardware

Antes de tocar cualquier lenguaje de programación o comenzar a decirle a la IA a que escriba código por tí, creo que deberías entender un poco más sobre qué es el software y el hardware.

### Hardware

El hardware es lo tangible, lo físico, lo palpable, las piezas que componen cualquier tipo de aparato electrónico. Antes de la llegada de los computadores personales, el hardware era algo mucho más grande y complejo, pero con el tiempo, la _miniaturización_ de los componentes electrónicos ha permitido que hoy en día tengamos dispositivos muy potentes en tamaños muy pequeños.

Por qué hablamos de hardware. Esto no es realmente por la curiosidad. Debemos entender **más allá de lo que vemos en la superficie**. ¿Qué es una memoria de acceso rápido? ¿Qué son las memorias caché? ¿Qué es un procesador? ¿Qué es un núcleo? ¿Qué son los hilos de ejecución? ¿Para qué existen las GPU? ¿Qué es un bus de datos?

Puede sonar un poco ajeno quizás, pero saber las diferencias de las memorias, persistencia de datos, velocidad de procesamiento, paralelismo, etc. Te ayudará a entender mejor cómo funcionan los programas que escribes y cómo optimizarlos.

### Software

El software no lo puedes tocar (Bueno, según steve jobs, sí puedes tocar el software, pero digamos que es un poco... _subjetivo_, quizás en un viaje inducido por magia puedes, pero la realidad es que **no**).

El software se construye sobre el hardware, acá desplegamos gran parte de nuestro trabajo, _no podemos hacer software sin entender hardware_, ¿cómo hacemos backend sin entender servidores? ¿Cómo hacemos aplicaciones móviles sin entender los dispositivos móviles? ¿Cómo hacemos software sin saber sobre qué capas corren?

Y no solo software, debemos saber entender nuestro intérprete, nuestro intermediario entre nosotros y la máquina. El **sistema operativo**. ¿Qué es un sistema operativo? ¿Por qué existen tantos? ¿Qué diferencias hay entre Windows, Linux y MacOS? ¿Qué es una distribución de Linux? ¿Qué es un kernel? ¿Qué es un sistema de archivos? ¿Cómo maneja el sistema operativo los procesos y la memoria?

Podríamos decir que un sistema operativo es software igualmente, pero trabaja a una escala un poco más baja, con _lenguajes de bajo nivel_, interactúan de forma mucho más directa con el hardware y tienen un manejo mucho más eficiente de los recursos del sistema.

## Espera... ¿Lenguajes de bajo nivel? ¿Qué es eso?

Acá ya se empiezan a asomar las palabras de Lenguajes de programación, y sí, es hora de hablar un poco sobre eso.

### Lenguajes de bajo nivel

Los lenguajes de bajo nivel son aquellos que están más cerca del lenguaje máquina, es decir, del código binario que entiende el hardware. Estos lenguajes permiten un control más directo sobre los recursos del sistema, pero son más difíciles de aprender y usar. Algunos ejemplos de lenguajes de bajo nivel son el _ensamblador_ y el _lenguaje C_.

Estos lenguajes son ideales para tareas que requieren un **alto rendimiento y eficiencia**, como el desarrollo de sistemas operativos, controladores de dispositivos, y aplicaciones que necesitan un acceso directo al hardware en general.

_Anecdóticamente_, hasta hace poco, las universidades acá en Chile dedicaban bastante tiempo a enseñar lenguajes de bajo nivel, principalmente C y ensamblador, para que los estudiantes entendieran cómo funciona la máquina a un nivel más profundo. Hoy en día, muchas universidades han optado por enfocarse más en lenguajes de alto nivel, pero creo que aún es importante tener una base sólida en lenguajes de bajo nivel para entender mejor cómo funciona todo.

No digo que debas partir usando C o ensamblador, puede ser un poco de pérdida de tiempo si tu objetivo es agilizar tu aprendizaje, pero recomiendo que en algún momento de tu path de aprendizaje, le dediques un tiempo a conocerlos, son muy interesantes y te darán una pincelada sólida de lo veloces que pueden ser.

### Lenguajes de alto nivel

Los lenguajes de alto nivel son aquellos que están más cerca del lenguaje humano, es decir, son más fáciles de leer y escribir. Estos lenguajes abstraen muchos detalles del hardware y del sistema operativo, lo que permite a los desarrolladores centrarse en la lógica de su aplicación en lugar de preocuparse por los detalles técnicos. Algunos ejemplos de lenguajes de alto nivel son Python, JavaScript, Java, Ruby, entre otros.

Acá no voy a profundizar, porque bueno, ya hay otras personas que les dedican tiempo a roadmaps que están enfocados a señalar las tecnologías de alto nivel. Mi misión, está algunos pasos más atrás.

## **Datos, Información y Estructuras**

¿Qué es un **dato**? ¿Qué es la **información**?

Estas preguntas pueden incluso ser _filosóficas_, pero no nos iremos por las ramas, en la informática un dato es una **representación concreta de un valor**, puede ser un número, una letra, una palabra, una imagen, etc.

Un dato como tal, **no tiene mucho sentido por sí solo**. Yo simplemente puedo tener el dato _"19/04/1992"_, pero ¿Qué significa ese dato? ¿Por qué es importante? ¿Qué información me entrega ese dato?

La información es el **contexto** que le damos a los datos para que tengan sentido. En este caso, si te digo que _"19/04/1992"_ es mi fecha de nacimiento, ahora ese dato tiene un **significado** y una **importancia** para mí.

**Todo el software que existe**, es la constante de _enviar y recibir datos e información_, procesarlos, transformarlos y presentarlos de una manera que tenga sentido para la persona que lo utiliza.

Enviamos nuestro email y contraseña (**datos**) para iniciar sesión en una aplicación, la aplicación procesa esos datos y nos devuelve acceso a nuestra cuenta (**información**).

¿Dónde están las **estructuras** en todo esto?

Se imaginan que toda la información de ustedes la metiéramos en una bolsa, toda desordenada, y la arrojásemos en un baul, con la información de miles de personas más. ¿Cómo podríamos encontrar nuestra información rápidamente? Sería un caos.

En los inicios de la informática, la gente se dio cuenta que necesitaban encontrar una forma de **organizar los datos**, para que fueran fáciles de encontrar y manipular. Así nacieron las **estructuras de datos**.

Las estructuras de datos son formas específicas de organizar y almacenar información. ¿Datos? ¿Información? Sí, y está correcto, ya que, cuando hablamos de estructura de datos, es una forma de agrupar elementos para darles un sentido, cuando algo tiene sentido, es fácil de acceder ya que es fácil de asociar.

¿No vas a meter en la misma carpeta todos tus documentos verdad? ¿No vas a mezclar fotos con música, con videos, con documentos de texto? No, porque sería un caos.

Y acá viene lo que aparece mágicamente en los cursos de programación. Arrays, Listas, Objetos... ¡Ajá!, pero el concepto sale de acá. Los arreglos, objetos, listas. No nacen de la nada, los lenguajes de alto nivel no tienen estas estructuras de la nada, son abstracciones que se crean para facilitar la construcción de software.

## Búsqueda, selección y ordenamiento

Ahora que ya sabes qué son los **datos**, la **información** y las **estructuras de datos**, es hora de hablar sobre cómo manipularlos.

Cuando tienes una gran cantidad de datos, necesitas formas eficientes de buscar, seleccionar y ordenar esos datos. Aquí es donde entran los algoritmos de búsqueda, selección y ordenamiento.

¡Ya estamos mezclando conceptos!

Ya hablamos de algoritmos, hagamos memoria, pasos secuenciales para resolver un problema. Ahora, aplicamos esos pasos a la manipulación de datos.

Por ejemplo, si tienes una lista de nombres y quieres encontrar un nombre específico, puedes usar un algoritmo de búsqueda para recorrer la lista y encontrar el nombre que estás buscando.

Si quieres ordenar una lista de números de menor a mayor, puedes usar un algoritmo de ordenamiento para reorganizar los números en el orden correcto.

Si tienes una lista de productos y quieres seleccionar solo aquellos que tienen un precio menor a cierto valor, puedes usar un algoritmo de selección para filtrar la lista y obtener solo los productos que cumplen con ese criterio.

¿Suena simple? _Emmm sí_, pero la complejidad radica en la **eficiencia**. No todos los algoritmos son iguales, algunos son más rápidos y eficientes que otros. Aprender sobre diferentes algoritmos y sus complejidades te ayudará a escribir código más eficiente y optimizado.

¿Te han dicho que las entrevistas técnicas te harán preguntas sobre algoritmos y estructuras de datos? Si la respuesta es no... ¿Por qué no aparece este tópico en un roadmap?

¡Porque los roadmaps están **mal enfocados**! Jaja.

Haré un artículo específico sobre algoritmos y estructuras de datos en el futuro, pero por ahora, solo quiero que entiendas la importancia de estos conceptos básicos. Si estás leyendo esto y quieres aprender, tu misión será buscar más información sobre algoritmos de búsqueda (búsqueda lineal, búsqueda binaria), algoritmos de ordenamiento (burbuja, selección, inserción, quicksort, mergesort) y estructuras de datos (arrays, listas enlazadas, pilas, colas, árboles, grafos).

¿Necesitas un lenguaje específico para aprender esto? **No**, incluso no necesitas ni programarlo, puedes hacerlo en papel y lápiz si quieres. Lo importante es entender los conceptos.

## Almacenamiento de datos

Ya tengo datos, tengo estructuras, puedo recorrerlas, ordenarlas, seleccionarlas, pero... ¿Dónde las guardo?

El **almacenamiento de datos** es un concepto fundamental en la informática. Necesitamos formas de guardar nuestros datos de manera persistente para que no se pierdan cuando apagamos el computador.

Aunque no siempre queremos tener todo guardado para siempre... ¿Recuerdas cuando hablamos de hardware? Bueno, si haces la tarea luego de esta lectura, sabrás que hay memorias volátiles y no volátiles. Las memorias volátiles son aquellas que pierden su contenido cuando se apaga el equipo, como la RAM. Las memorias no volátiles son aquellas que mantienen su contenido incluso cuando el equipo está apagado, como los discos duros y las unidades SSD.

Existen diferentes formas de almacenar datos, desde archivos simples en el sistema de archivos hasta bases de datos complejas que permiten consultas avanzadas y relaciones entre datos.

Cuando haces un documento de texto y lo guardas en tu computador, estás utilizando el sistema de archivos para almacenar ese dato de manera persistente.

Cuando usas una aplicación web que guarda tus datos en la nube, probablemente esté utilizando una base de datos para almacenar esa información de manera estructurada y eficiente.

¿Sabes como un sistema operativo _maneja_ los archivos? ¿Cómo puede ser que teniendo millones de archivos en un disco duro, puedas encontrar uno específico en segundos? ¿Cómo se organizan esos datos en el disco? ¿Qué es un sistema de archivos? ¿Qué tipos de sistemas de archivos existen?

Estas preguntas son abiertas, pero te invito a investigarlas, entender cómo funciona el almacenamiento de datos te ayudará a escribir software más eficiente y optimizado.

## Guardo mis datos y ... ¿cómo los comparto?

¿Creíste que me olvidaba de esto? ¡Para nada! Hemos trabajado en una sola máquina, pero el mundo real es mucho más complejo. Hoy en día, la mayoría de las aplicaciones que usamos están conectadas a internet, y necesitan compartir datos entre diferentes dispositivos y usuarios.

**Internet!** ¿Averiguaste lo que es? ¿Cómo nació? Si me hiciste caso en el artículo anterior, estoy seguro que tomaste un tiempo para investigar un poco sobre la historia de internet.

Y el internet nos abre las puertas a las... **¡redes!** Redes de computadoras, redes de datos, redes de información.

Las redes para mí siempre fueron algo ... _meh_, muy aburridas, pero es necesario entenderlas un poco para comprender cómo funciona el intercambio de datos en el mundo moderno.

Cuando envías un mensaje a un amigo, cuando subes una foto a una red social, cuando haces una compra en línea, estás utilizando redes para compartir datos entre diferentes dispositivos y usuarios.

¿Qué es un paquete de datos? ¿Qué es una dirección IP? ¿Qué es un protocolo de comunicación? ¿Qué es HTTP, HTTPS, FTP, TCP/IP? ¿Cómo funcionan los servidores y los clientes? ¿Qué es una API?

Ábrete camino a investigar estos conceptos, entender cómo funcionan las redes te ayudará a escribir software que pueda comunicarse de manera eficiente y segura con otros dispositivos y usuarios.

## Ya que mencionamos seguridad...

¿Te imaginas que yo tengo expuesta toda tu información personal en internet? ¿Tus fotos, tus mensajes, tus datos bancarios? Sería un caos, ¿verdad?

La **seguridad informática** es un tema crucial en el mundo de la programación. ¿Cómo comenzar a programar sin entender que todo lo que haces puede ser vulnerable a ataques y robos de información?

Ya que repasaste algoritmos, podrías echar un vistazo teórico a los conceptos de criptografía, hashing, autenticación. _OJO_, no te estoy diciendo que aprendas a implementar estos conceptos, solo que entiendas la teoría detrás de ellos.

## La Alejandría del código - ¡Que no se incendie tu trabajo!

Antes de programar, hablemos del **control de versiones**. ¿Qué es eso? ¿Por qué es importante?

El control de versiones es una práctica fundamental en el desarrollo de software. Nos permite gestionar y rastrear los cambios en el código a lo largo del tiempo.

¿Te imaginas un escenario en donde escribiste 1000 líneas de código, y al final te das cuenta que cometiste un error en la línea 10? ¿Cómo vuelves atrás sin perder todo el trabajo que hiciste después?

El control de versiones nos permite hacer precisamente eso. Podemos guardar diferentes versiones de nuestro código, y si cometemos un error, podemos volver a una versión anterior sin perder todo nuestro trabajo.

Acá entra en juego **git**, el sistema de control de versiones más popular en la actualidad. Aprender a usar git es **fundamental** para cualquier programador, ya que es una herramienta que te permitirá trabajar de manera colaborativa con otros desarrolladores, gestionar tus proyectos de manera eficiente y mantener un historial claro de los cambios en tu código.

No necesitas programar para aprender git, puedes comenzar aprendiendo los conceptos básicos, como repositorios, commits, ramas, merges, pull requests, entre otros.

Puedes usar git para tus propios archivos, incluso si no estás programando, es una herramienta muy útil para cualquier tipo de proyecto que implique cambios y versiones.

## Ya bueno, la IA...

Sí, muchos quieren meter la IA en todos lados, y está bien de cierta forma, porque si estás entrando a este mundo, no puedes quedarte atrás. Pero la IA **no es magia**, y no es la solución a todos los problemas.

Antes de aprender a entender una inteligencia artificial (Que es mucho más que pedirle por favor que te escriba código), debes usar estas herramientas a tu favor. Yo por ejemplo ahora mismo uso la IA para corregir algunos errores ortográficos y gramaticales de todas las _burradas_ que escribo, pero no le pido que escriba el artículo por mí, porque entonces no tendría sentido.

La IA es una herramienta que debe ser usada con fines pedagógicos, al menos, en tu etapa inicial de aprendizaje. No le pidas a la IA a que te resuelva tus algoritmos, pídele que te enseñe paso a paso, pídele que te de un ejemplo detallado y luego pídele que te de algunos ejercicios para practicar.

Luego de hacerlos, pídele que te revise tus soluciones y te explique en qué te equivocaste y qué hiciste bien.

**¡Usa a la IA de profesor!** Créeme que explica mucho mejor que muchos profesores que he tenido en la universidad, incluso los que aseguran ser _doctores_.

## Resumen

Bueno, hemos cubierto muchas cosas, ahora está en tí investigar y aprender sobre cada uno de estos puntos. Entendiendo a las máquinas desde lo más elemental, te hará mucho más sencillo aprender cualquier lenguaje de programación y cualquier tecnología que quieras dominar en el futuro.

¿Hagamos un resumen rápido?

1. **Hardware y Software:** Entiende la diferencia entre hardware y software, y cómo interactúan entre sí.
2. **Lenguajes de Programación:** Familiarízate con los conceptos de lenguajes de bajo y alto nivel.
3. **Datos e Información:** Aprende qué son los datos y la información, y cómo se relacionan.
4. **Estructuras de Datos:** Investiga sobre diferentes estructuras de datos y su importancia.
5. **Algoritmos de Búsqueda, Selección y Ordenamiento:** Aprende sobre diferentes algoritmos y su eficiencia.
6. **Almacenamiento de Datos:** Entiende cómo se almacenan los datos de manera persistente.
7. **Redes:** Familiarízate con los conceptos básicos de redes y cómo se comunican los dispositivos.
8. **Seguridad Informática:** Aprende los conceptos básicos de seguridad en el desarrollo de software.
9. **Control de Versiones:** Aprende a usar git para gestionar y rastrear los cambios en tu código.
10. **Inteligencia Artificial:** Usa la IA como una herramienta pedagógica para mejorar tu aprendizaje.

**¡Paciencia!** Esto tampoco lo debes leer en un día, tómate tu tiempo para investigar y entender cada uno de estos puntos. La programación es un camino largo, pero con una **base sólida**, estarás mucho más preparado para enfrentar cualquier desafío que se te presente en el futuro.

No creo tener la razón en todo pero... En mi experiencia, con estos **fundamentos**, ya puedes tomar el lenguaje o tecnología de moda y ahora sí, comenzar tu roadmap.

No olvides siempre tener una opinión y visión crítica. La ciencia cuestiona todo, y el software **no es la excepción**.

¡Nos vemos en el siguiente!
