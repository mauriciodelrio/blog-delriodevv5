---
title: "El origen de las videollamadas modernas y su funcionamiento"
author: "Mauricio Del Río"
category: "Programación"
date: "2025-12-12"
bannerImage: "/blog_images/cafetera.png"
slug: "el-origen-de-las-videollamadas-modernas-y-su-funcionamiento"
englishSlug: "the-origin-of-modern-video-calls-and-how-they-work"
overview: "De la pereza salen buenas ideas. En este artículo te cuento anécdotas interesantes que han transformado la forma en que nos comunicamos hoy en día. Además, verás conceptos técnicos básicos sobre cómo funcionan las videollamadas."
published: true
readingTime: "5 minutos"
tags:
    - Historia
    - Curiosidades
    - Conceptos
    - Aprendizaje
---

## La curiosidad no mató al gato, ¡lo hizo famoso en Tik Tok!

Tengo varias ideas en mente para escribir nuevos artículos, pero siento que son un poco densos, hoy quiero hacer algo un poco más divertido. Le pregunté a mi pareja sobre algo que realmente le da curiosidad saber acerca del mundo tecnológico moderno, y me dijo: "¿Cómo funcionan las videollamadas? ¿Cómo podemos ver una imagen en tiempo real a través de internet?".

Bueno, la verdad es una pregunta bastante interesante, obviamente no lo sé, así que me puse a investigar a la moderna: Gemini 3 + verificación de información en internet. 

A mí me gusta comenzar desde una perspectiva histórica, entender el pasado nos hace comprender mejor el presente. Así es como encontré varias historias interesantes que iré compartiendo con ustedes. 

Este artículo va dedicado a mi pareja, si no les gusta a ustedes _no me importa mucho jaja_.

## La cafetera de Cambridge: Los que elaboran cosas por lo general son perezosos

Unos investigadores de la universidad de Cambridge, estaban aburridos de ir al sótano a ver si su cafetera tenía o no café, tenían que bajar 3 pisos. Lo entiendo, por suerte donde trabajo siempre hay café, pero cuando te pasas horas metido en algo, da flojera levantarse a cada rato.

Bueno, estos investigadores decidieron instalar una cámara que apuntara a la cafetera, cada cierta cantidad de segundos tomaba una foto muy pequeña y pixelada que mandaba la imagen a un computador con un programa que crearon para ello. Poco tiempo más tarde se hizo ver algo interesante: ¿Qué pasa cuando mandas muchísimas imagen por segundo a través de una red en secuencia? Bueno, en esencia, eso es un video.

Por un par de años esto se quedó en la universidad, como curiosidad del mismo departamento de investigación, pero en 1993, un colega modificó el programa para que esas imágenes quedaran públicas en internet (que era algo muy muy reciente).

De alguna forma esto fue de los primeros "virales", gente de varios países se conectaban a ver como se actualizaba el estado de una cafetera cada ciertos segundos. Así, nace la **primera webcam de la historia**.

Como curiosidad final, a los chicos les fue bien en sus vidas, trabajaron en grandes empresas, incluso, uno de ellos fue un fundador de la empresa VNC, que fue pionera en el desarrollo de software de escritorio remoto, algo que hoy en día es muy común.

La cafetera fue subastada en eBay a unos 5000 USD de la época, la compró una revista alemana, la repararon y la pusieron a trabajar un poco más.

## Vamos al concepto descubierto: paquetes de datos

Las videollamadas son un poco _trickies_. Tú en realidad ves una serie de imágenes que se actualizan muy muy rápido. Para ti es imperceptible, pero la cámara solamente está tomando fotos. A esto se le llama **frames** o cuadros.

¿Has escuchado el concepto de _frames per seconds_? Bueno, 30 fps es básicamente 30 fotos por segundo. Esto no solo aplica a las cámaras, todo lo que se procesa a nivel gráfico en pantallas, videojuegos, películas, etc. Funciona así.

Claro, cuando tus ojos ven 30 fotos por segundo, tú piensas que es algo que está en movimiento, pero la realidad es que es una suerte de ilusión óptica.

Mucho antes de esta historia, en informática ya se hablaba del concepto **divide y vencerás**. La idea nace que si tienes algo muy grande, lo mejor es dividirlo en porciones más pequeñas para poder abordarlo de mejor forma. Esto es lo que se hizo con las cámaras digitales, en vez de mandar muchas imágenes juntas (que sería muy lento), se dividieron las imágenes en pequeños **paquetes de datos** que se envían por la red.

Si tratas de mandar un video completo, puedes estar horas bajándolos (días o semanas en esa época). Pero si mandas trocitos de éste, muy pequeños, se envían de forma instantánea al otro lado, la persona que quiere ver la imagen la está viendo muy cercano al tiempo real, y la imagen va siendo reemplazada por la siguiente imagen en cuestión de milisegundos.

## ¿Y cómo se envían estos paquetes?

Esto igual es interesante, quiero que pienses en esto como en una cadena de muchas tuberías, cables, o conductos que van de un punto A a un punto B. En el punto A tienes una cámara que está tomando fotos, las divide en pequeños paquetes de datos y las envía por estas tuberías. Acá aplica nuevamente el concepto de **divide y vencerás**, si tienes muchas tuberías, puedes enviar muchos paquetes al mismo tiempo, y así la persona que está del otro lado recibe la información mucho más rápido.

Obviamente estas imágenes van con una especie de "etiqueta" que le dice al computador receptor cómo debe armar la imagen nuevamente. Si no tuviera esta etiqueta, las imágenes llegarían en cualquier orden y no se podrían reconstruir.

## ¿Y qué pasa si se pierde un paquete?

Esto igualmente es divertido, gracias a dividir el video en paquetes muy muy chiquititos, si hay pérdida de información, ante tus ojos es poco perceptible, por eso si tu conexión es mala, la imagen se ve borrosa o con "cuadritos", pero igual puedes entender lo que está pasando. Esa es la gracia del _streaming_.

En la actualidad hay muchísimas técnicas para optimizar la transmisión de video en tiempo real, como la compresión de datos, el **buffering**, etc. Pero la idea básica sigue siendo la misma: dividir el video en pequeños paquetes de datos y enviarlos a través de una red.

## ¿Y qué pasa con el audio?

Partamos de la premisa de que el sonido es una onda que se propaga en el aire. Para poder enviar sonido de la forma en como lo hicimos con las imágenes, es como cortar una onda continua en trocitos. Esto ya se ha hecho antes y bueno, si no cortas bien las ondas, el sonido se distorsiona.

Un computador por sí mismo, no entiende una onda, por otra parte, un micrófono sí puede captar vibraciones, por lo que había que hallar la forma de convertir esas vibraciones en datos que un computador pueda entender.

Esto se hace mediante un proceso llamado **muestreo**. Básicamente, el micrófono toma "muestras" de la onda sonora en intervalos regulares y las convierte en números que representan la amplitud de la onda en ese momento. Estos números se pueden enviar como paquetes de datos, al igual que las imágenes.

No me iré en lo técnico, pero si vieron en algún lado una gráfica de una onda, es básicamente una curva que sube y baja, dejando montículos y valles. Cada montículo o valle puede ser representado por un número, y esos números son los que se envían como datos.

## Lo complejo acá: sincronizar oídos y ojos

Tus ojos, si pierden información, lo toleran y tu cerebro es capaz de "rellenar" esos espacios, pero tus oídos funcionan de una forma distinta. El oído es muy sensible y no "reconstruye" audio perdido de la misma forma que el cerebro hace con las imágenes.

En las videollamadas, el audio y el video se están mandando por señales distintas (micrófono y cámara están separados). Acá lo divertido es la ingeniería. El audio ya sabemos que es una secuencia numérica que representa una onda. Bueno, para una máquina, interpretar números es fácil, los números son ligeros. Por otra parte, el video, es muy pesado, una sola imagen contiene muchísima información o bits, es por esto que el peso de la imagen es mucho mayor que el del audio.

Acá es donde entra el balance, la máquina que procesa la videollamada debe dar prioridad de ancho de banda al audio. Puede sonar un poco contradictorio pero tiene sentido, si tu oído es mucho más sensible que tus ojos, el audio debe sonar lo mejor posible, aunque la imagen se vea un poco mal.

Pero debe haber un equilibrio, si el audio llega mucho antes que la imagen, marea un poco, mucho peor es cuando la otra persona casi ni se entiende, eso por lo general termina la videollamada.

## El concepto de buffering

Ya hablamos de el envío de de paquetes por muchos tubos a la vez. Estos pueden llegar desordenados, las imágenes desordenadas son "un poco" tolerables, pero el audio desordenado es imposible de interpretar.

Para solucionar esto, se utiliza el concepto de **buffering**. Básicamente, el receptor (tu computador o celular) tiene una pequeña "memoria intermedia" donde guarda los paquetes que van llegando. Esta memoria permite ordenar los paquetes antes de reproducirlos. Si un paquete se pierde, el sistema puede "rellenar" ese espacio con silencio o con la última muestra conocida, minimizando la distorsión.

Por eso que las videollamadas no son 100% en tiempo real, ese segundo o 2 segundos de diferencia (con una conexión decente) es el **buffer** trabajando para ordenar la información que llega.

## Mensaje final

Este artículo es cortito y anecdótico, espero que les haya gustado, tengo en mente algunas otras ideas, pero he estado con mucho trabajo últimamente. Estoy atento a sus comentarios, críticas y sugerencias. 

No vean mucho Tik Tok, voten informado este domingo, y nos vemos en el próximo artículo.








