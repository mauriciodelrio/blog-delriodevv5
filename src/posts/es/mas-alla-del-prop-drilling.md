---
title: 'Más allá del Prop Drilling: Patrones de Estado Nativo Escalables y Sin Dependencias'
author: 'Mauricio Del Río'
category: 'Programación'
date: '2025-11-22'
bannerImage: '/blog_images/prop_drilling.png'
slug: 'mas-alla-del-prop-drilling'
englishSlug: 'beyond-prop-drilling'
overview: 'En este artículo, hablaremos sobre nuestras propias negligencias en el manejo del estado en aplicaciones React y cómo superarlas con patrones escalables y sin dependencias.'
published: true
readingTime: '15 minutos'
tags:
  - Programación
  - Tutoriales
  - Aprendizaje
  - React
---

## Esto será para laaaaargo...

Da igual tu seniority, nuestro ritmo de trabajo determina qué hacemos y cómo lo hacemos. En el día a día, nos justificamos con el tiempo, la presión y las entregas. Pero seamos honestos, muchas veces hacer bien las cosas puede tomar un poquito más de tiempo, pero a la larga, nos **ahorra mucho más**.

Quiero dejar esto muy claro. **YO TAMBIÉN SOY CULPABLE**, sí, con mayúsculas. Incluso con mis años de experiencia, sigo cayendo en malas prácticas y justificándome a mí mismo con el tiempo.

Este artículo es un _tirón de orejas_, primeramente para mí, para ustedes como lectores, es el resultado de unos días de estudio, que tiene como objetivo, entregarles una recopilación interesante acerca de cómo mejorar nuestras prácticas habituales trabajando con React. (_cof cof... Gracias IA por ayudarme a juntar ideas_)

## Vamos al grano, hablemos de **Prop Drilling**

Si ya conoces el concepto, bien, salta un par de puntos. Si no lo conoces, te lo explico rápidamente.

El **Prop Drilling** es un patrón común en React donde los datos se pasan de un componente padre a un componente hijo a través de múltiples niveles de componentes intermedios. Esto puede llevar a una estructura de código difícil de mantener y entender, especialmente en aplicaciones grandes.

Si trabajas en startups, proyectos medianos, grandes, críticos, etc. Seguramente te has topado con este patrón en algún momento, incluso, tú mismo lo has implementado _sin darte cuenta_.

## ¿Por qué es un problema?

El Prop Drilling puede llevar a varios problemas:

1. **Complejidad del Código:** A medida que la aplicación crece, el número de componentes intermedios aumenta, lo que hace que el código sea más difícil de seguir y mantener.
2. **Rendimiento:** Cada vez que se actualiza el estado en un componente padre, todos los componentes hijos que reciben ese estado como prop se vuelven a renderizar, lo que puede afectar el rendimiento de la aplicación.
3. **Acoplamiento:** Los componentes se vuelven estrechamente acoplados, lo que dificulta la reutilización y el aislamiento de los componentes.
4. **¡Y lo mejor de todo!** _(o peor...)_ Ya olvidamos completamente los principios fundamentales de React. Un virtual DOM _reactivo_, _declarativo_ y _componible_.

## Nos inventamos soluciones, peeeero...

Muchas veces, identificamos el desastre que tenemos con prop drilling. Se nos viene automáticamente a la cabeza buscar una forma de manejar el estado de la aplicación de una manera más eficiente y ordenada.

Acá la decisión, es transparente. ¿Te gusta Redux? Genial, úsalo. ¿Te gusta MobX? Perfecto, úsalo. ¿Te gusta Zustand? Excelente, úsalo.

Acá va mi punto. Usando estas librerías... ¿Realmente estamos manejando bien la **reactividad** y el **estado** de nuestra aplicación? ¿O simplemente estamos usando una herramienta que nos facilita la vida, pero seguimos teniendo un **desastre** a nivel de performance y mantenibilidad?

## Hagamos una pausa mental... ¿Qué ofrece React nativamente?

React ofrece varias herramientas nativas para evitar el prop drilling, Providers, Context API, Hooks, _blah blah_.
¿Son herramientas robustas? **Sí**, ¿Son intuitivas? _Cuestionable..._, ¿Son escalables? **DEPENDE DE TÍ.**

## Vamos a lo técnico - Context API

Estudié un poquito acerca del alcance de la Context API, y la verdad es que es una herramienta **bastante potente**.

Vamos a partir de la premisa de que sabes usar Context API. Dicho esto, vamos a un caso conocido.

**Situación**: Aplicación que ha crecido mucho, muchos componentes, muchos niveles de anidación... ¿Consecuencia? Muchos Providers anidados, muchos contextos, **TOOOODOS** anidados de una forma horrorosa, envolviendo el estado global de tal forma que parece un árbol de navidad volteado.

## Provider Hell - **INFIER-NOOOOooo....**

Vamos con un ejemplo de caos:

```jsx
<ThemeProvider>
  <AuthProvider>
    <SettingsProvider>
      <DataProvider>
        <NotificationProvider>
          <PepeProvider>
            <PedroProvider>
              <JuanitoProvider>
                // weeeeee!
                <App />
              </JuanitoProvider>
            </PedroProvider>
          </PepeProvider>
        </NotificationProvider>
      </DataProvider>
    </SettingsProvider>
  </AuthProvider>
</ThemeProvider>
```

¿Te suena familiar cierto? Bueno, acá iremos dando algunas correcciones a este problema.

### Solución 1 - **Combinar Providers**

Una forma de reducir el número de Providers es combinarlos en un solo Provider que maneje múltiples contextos. Esto puede ayudar a reducir la complejidad del árbol de componentes y hacer que el código sea más fácil de seguir. Acá va un ejemplo, me baso en Next.js, pero el concepto es el mismo en React puro:

```jsx
// _app.tsx
<CombinedProvider>
  <App />
</CombinedProvider>
```

Dentro de `CombinedProvider`, puedes manejar múltiples contextos y estados, y proporcionar acceso a ellos a través de un solo Provider.

```jsx
// CombinedProvider.tsx
const CombinedProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SettingsProvider>
          <DataProvider>
            <NotificationProvider>
              <PepeProvider>
                <PedroProvider>
                  <JuanitoProvider>
                    // ...
                    {children}
                  </JuanitoProvider>
                </PedroProvider>
              </PepeProvider>
            </NotificationProvider>
          </DataProvider>
        </SettingsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
```

### Solución 2 - **Custom Hooks para Contextos**

Otra forma de mejorar la usabilidad de los contextos es crear custom hooks que encapsulen la lógica de acceso a los contextos. Esto puede hacer que el código sea más limpio y fácil de usar.

```jsx
// useAuth.tsx
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;
```

Luego, puedes usar este hook en tus componentes para acceder al contexto de autenticación de manera más sencilla:

```jsx
// SomeComponent.tsx
import useAuth from './useAuth';
const SomeComponent = () => {
  const { user, login, logout } = useAuth();
  // ...
};
```

Este me agrada un poco más, ya que encapsula la lógica de acceso al contexto y hace que el código sea más limpio. Ahora bien, entre la solución 1 y 2 no hay una respuesta correcta, depende de tu caso de uso y la necesidad de tu aplicación.

## ¿Solucionamos el problema del Prop Drilling?

_No realmente..._ Al menos no por sí solo. Definimos providers, sí. Pero aún no vemos cómo lo estamos usando en nuestros componentes.

Acá entra la segunda parte del problema. El uso correcto de hooks y contextos **en los componentes**.

Definir contextos y providers es el primer paso. El verdadero desafío radica en cómo los usamos en nuestros componentes. ¿Qué sacamos con tener un storing organizado si no nos preocupamos realmente por los rerenders innecesarios?

## Split Context Pattern

El primer consejo que abordaré es el siguiente:

> Sepera el estado (data) del comportamiento (funciones que modifican el estado).

Si tienes un componente que necesita gatillar un evento (ejemplo: un botón con un `onClick`) **NO DEBE RENDERIZARSE** cuando el estado cambia.

¿Cómo logramos esto? Fácil, separamos el contexto en dos diferentes, uno para el **estado** y otro para las **funciones que modifican ese estado.**

```jsx
// StateContext.tsx
const StateContext = React.createContext({ data: null });
// ActionsContext.tsx
const ActionsContext = React.createContext({ setData: () => {} });
```

Luego, en nuestros componentes, podemos usar estos contextos de manera independiente:

```jsx
// SomeComponent.tsx
import { useContext } from 'react';
import { StateContext } from './StateContext';
import { ActionsContext } from './ActionsContext';
const SomeComponent = () => {
  const { data } = useContext(StateContext);
  const { setData } = useContext(ActionsContext);

  const handleClick = () => {
    setData(newData);
  };

  return (
    <div>
      <p>{data}</p>
      <button onClick={handleClick}>Update Data</button>
    </div>
  );
};
```

Gracias a esto, `SomeComponent` solo se volverá a renderizar cuando `data` cambie, pero no cuando `setData` cambie. **¿Genial no?** Solo un paso muy sencillo puede marcar una pequeña diferencia. Ahora bien, obviamente este es un ejemplo muy mínimo, pero cuando trabajamos en productos reales y enormes, estas pequeñas acciones se agradecen un montón!

## Sigamos jugando un poco más - React 19: `use` Hook

Con la llegada de React 19, tenemos una nueva herramienta en nuestro arsenal: el hook `use`. Este hook tiene la particularidad de que podemos usarlo dentro de un statement condicional (un hook común y corriente no puede estar dentro de un if o un loop, por ejemplo). `use` nos abre un nuevo camino: **Podemos condicionar la carga de datos y su renderizado.**

¿Cómo nos ayuda esto con el prop drilling? Bueno, podemos usar `use` para cargar datos **solo cuando los necesitamos** y en base a alguna condición específica.

```jsx
// components/SmartCard.tsx
import { use } from 'react';
import { ThemeContext } from './ThemeContext';

export const SmartCard = ({ overrideTheme }: { overrideTheme?: boolean }) => {
  let theme = 'light';

  // Contexto condicional: Solo nos suscribimos si es necesario
  if (!overrideTheme) {
    const themeContext = use(ThemeContext);
    theme = themeContext.theme;
  }

  return <div className={`card ${theme}`}>...</div>;
};
```

En este ejemplo, `SmartCard` solo se suscribe al `ThemeContext` si `overrideTheme` es falso. Esto significa que si pasamos `overrideTheme` como verdadero, el componente no se volverá a renderizar cuando el tema cambie en el contexto. En este contexto en particular y considerando que el manejo de themes tiende a impactar a muchos componentes, esta técnica **sí entrega bastante valor**.

Ahora bien, la letra pequeña: **Solo disponible en React 19+**. (Si puedes subir de React 18 a 19, vale la pena considerarlo).

## ¡Memoiza! `useMemo`

Si por algún motivo no puedes separar lógica de tu contexto, puedes recurrir al ya clásico `useMemo`.

**Pequeña definición rápida**: `useMemo` es un hook de React que memoriza el resultado de una función para evitar cálculos innecesarios en cada renderizado.

**¿Cuándo usarlo?** Cuando tienes cálculos costosos o funciones que no deberían ejecutarse en cada renderizado a menos que sus dependencias cambien.

**¿Cómo usarlo?** Acá un ejemplito:

```jsx
import React, { useMemo } from 'react';
const ExpensiveComponent = ({ data }) => {
  const processedData = useMemo(() => {
    // Simulamos un cálculo costoso
    return data.map((item) => item * 2);
  }, [data]); // Solo se recalcula si 'data' cambia

  return (
    <div>
      {processedData.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};
```

En este ejemplo, `processedData` solo se recalcula cuando `data` cambia, lo que mejora el rendimiento del componente al evitar calcular a cada rato.

## Otro tip: **TypeScript**

Bien, en sí TypeScript no mejora el rendimiento de tu aplicación, pero sí mejora la mantenibilidad y escalabilidad de tu código.

Honestamente a mí no me gusta, es más que nada por un tema de la filosofía inicial de un lenguaje no tipado. Acá, _en realidad_, TypeScript cubre una necesidad de mercado: **Proyectos grandes necesitan tipado para ser mantenibles.**

Claro, si tú eres bastante ordenado y tienes buenas prácticas de desarrollo, puedes perfectamente mantener un proyecto grande en JavaScript puro. Pero la realidad es que la mayoría de los equipos y empresas prefieren usar TypeScript, así podemos entender a nuestros propios colegas, solamente **leyendo código**.

Y si por casualidad eres primerizo en programación (¡Bienvenido!), te recomiendo que empieces directamente con TypeScript. Te ahorrarás muchos dolores de cabeza en el futuro. Para mí, aprender JavaScript y luego TypeScript puede prestar a confusiones. Aprende directamente TypeScript y mentalízate no más en asumir que Javascript es **strongly typed** (mentira mental).

## Me desvié, sigamos con React 19

Hay otra joyita que leí por ahí (ni sabía de su existencia) y es el hook `useActionState`.

**¿Qué es `useActionState`?**
`useActionState` es un hook bastante interesante, se ocupa en casos un poco más específicos, pero a la vez, bien comunes: **Manejo de formularios.**

Llama `useActionState` al nivel superior de tu componente para crear un estado que se actualiza al invocar una acción de formulario. Pasas `useActionState` una función de acción de formulario existente, así como un estado inicial, y esta devuelve una nueva acción que usas en tu formulario, junto con el último estado del formulario y si la acción sigue pendiente. El último estado del formulario también se pasa a la función que proporcionaste. (Sí esto es sacado de la _documentación oficial_, pero es que está muy bien explicado).

```jsx
import { useActionState } from 'react';

async function increment(previousState, formData) {
  return previousState + 1;
}

function StatefulForm({}) {
  const [state, formAction] = useActionState(increment, 0);
  return (
    <form>
      {state}
      <button formAction={formAction}>Increment</button>
    </form>
  );
}
```

El estado del formulario es el valor devuelto por la acción la última vez que se envió. Si el formulario aún no se ha enviado, se establece en el estado inicial.

Si se utiliza con una función de servidor, `useActionState` permite que la respuesta del servidor al enviar el formulario se muestre incluso antes de que se complete la hidratación.... ¿Cool no?

## ¿Vamos con un ejemplo real?

Para este ejemplo, vamos a implementar un carrito donde el objetivo principal es la **performance**:

**Paso 1**: Definición del Dominio (Types)

Siempre empieza por los tipos. Esto define la forma de tu estado. En mi experiencia, es buena práctica comenzar por tipos e interfaces, así tienes claro qué datos manejarás.

```typescript
// types/cart.ts
export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  totalAmount: number;
  isOpen: boolean;
};

export type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'TOGGLE_CART' }
  | { type: 'CLEAR_CART' };
```

**Paso 2**: Reducer

El reducer debe ser una **función pura** (función pura es cuando una función no tiene efectos secundarios y siempre devuelve el mismo resultado para los mismos argumentos), fácil de testear fuera de React.

```typescript
// logic/cartReducer.ts
import { CartState, CartAction } from '../types/cart';

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex((i) => i.id === action.payload.id);
      const updatedItems = [...state.items];

      if (existingItemIndex >= 0) {
        updatedItems[existingItemIndex].quantity += 1;
      } else {
        updatedItems.push({ ...action.payload, quantity: 1 });
      }

      // Calculamos el total aquí para evitar recalcularlo en cada render...
      const newTotal = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

      return { ...state, items: updatedItems, totalAmount: newTotal };
    }

    // ... implementación de otros casos (REMOVE, TOGGLE, blah)
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };

    default:
      return state;
  }
};
```

**Paso 3**: La Arquitectura del Provider (React 19 + Split Pattern)

Creamos dos contextos: uno para **Leer** (cambia frecuentemente) y otro para **Escribir** (estable, nunca cambia).

```typescript
// context/CartContext.tsx
'use client';

import { createContext, useReducer, ReactNode, use, useMemo } from 'react';
import { CartState, CartAction } from '../types/cart';
import { cartReducer } from '../logic/cartReducer';

// 1. Estado Inicial
const initialState: CartState = {
  items: [],
  totalAmount: 0,
  isOpen: false,
};

// 2. Contextos Separados
const CartStateContext = createContext<CartState | null>(null);
const CartDispatchContext = createContext<React.Dispatch<CartAction> | null>(null);

// 3. Provider Unificado
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // NOTA: dispatch es estable por diseño en React.
  // No necesita useMemo. state cambia, por lo que separarlos evita
  // que los componentes que solo usan dispatch se rendericen cuando state cambia.

  return (
    <CartDispatchContext value={dispatch}>
      <CartStateContext value={state}>
        {children}
      </CartStateContext>
    </CartDispatchContext>
  );
};

// 4. Hooks de Consumo con React 19 `use` API
export const useCartState = () => {
  const context = use(CartStateContext); // React 19
  if (!context) throw new Error('useCartState must be used within a CartProvider');
  return context;
};

export const useCartDispatch = () => {
  const context = use(CartDispatchContext); // React 19
  if (!context) throw new Error('useCartDispatch must be used within a CartProvider');
  return context;
};
```

**Paso 4**: Implementación en Componentes

Componente 1: El botón de añadir (Solo escribe)

Este componente nunca se volverá a renderizar, sin importar cuántos items añadas, porque dispatch no cambia.

```typescript
// components/AddToCartButton.tsx
import { useCartDispatch } from '../context/CartContext';
import { Product } from '../types';

export const AddToCartButton = ({ product }: { product: Product }) => {
  const dispatch = useCartDispatch(); // Solo consumimos el DispatchContext

  console.log('Render: AddToCartButton'); // Esto solo aparecerá una vez.

  return (
    <button
      onClick={() => dispatch({
        type: 'ADD_ITEM',
        payload: { ...product, quantity: 1 }
      })}
    >
      Add to Cart
    </button>
  );
};
```

Componente 2: El contador del carrito (Solo lee)

Este componente sí se renderiza cuando el estado cambia.

```typescript
// components/CartCounter.tsx
import { useCartState } from '../context/CartContext';

export const CartCounter = () => {
  const { items } = useCartState(); // Consumimos StateContext

  const count = items.reduce((acc, item) => acc + item.quantity, 0);

  console.log('Render: CartCounter'); // Esto aparecerá cada vez que cambie el carrito.

  return <span>Items: {count}</span>;
};
```

## ¿Cómo vamos hasta ahora?

Acá hagamos una pequeña pausa técnica. Hasta ahora, con unos pocos cambios, hemos logrado hacer uso de React nativo para manejar el estado de una manera mucho más eficiente y escalable, sin necesidad de librerías externas.

Ahora, esta pausa tiene un propósito y realmente es **Contradecirme a mí mismo**.

Verás, este artículo no existe por el simple hecho de que soy un defensor ferreo de _no usar_ librerías externas. Pero hay que entender también el entorno de tu empresa, proyecto y equipo.

Hay veces en donde los proyectos son tan grandes y escalables, que el recurso _menos es más_ tiene algunas consecuencias.

Cuando tienes, por ejemplo, productos críticos, ya no piensas en instalar librerías a lo loco, antes de instalar cualquier dependencia lo primero que revisas es:

- Soporte a largo plazo
- Comunidad
- Mantenibilidad
- Performance
- Curva de aprendizaje para el equipo
- Documentación
- Ecosistema

Muchas de las librerías de manejo de estados más famosas cumplen con estos requisitos, pero también hay un problemita: **Quedas atado a otra librería crítica más.**

Las librerías críticas cada cierto tiempo suben versiones **major**, ¿El problema? Tienen **Breaking Changes**. Esto significa que cada cierto tiempo, debes actualizar tu código para que siga funcionando correctamente con la nueva versión de la librería (si la librería deja de tener soporte activo y no actualizas, cualquier brecha de seguridad puede terminar en un **desastre**).

¿Qué pasa en proyectos gigantes? Debes subir un major de una librería externa que maneja básicamente todo el store de tu frontend, el más mínimo error por un breaking change puede **tirar toda tu aplicación.**

Ya con andar tolerando los breaking changes de React tenemos más que suficiente, la suerte es que las versiones estables de React tienden a durar bastantes años y últimamente traen menos breaking changes.

## ¿Y la contradicción?

_Ooootra vez me fui por las ramas_, pero honestamente, incluso en proyectos grandes, yo me aventuraría a usar algún manejador de estado global liviano, como Zustand.

Me detengo con Zustand porque es una librería que cumple con todos los requisitos mencionados anteriormente, pero a la vez, es **extremadamente liviana** y **fácil de aprender**.

A mí me encanta, la he usado más de alguna vez para algún proyectito personal y la verdad es que me ha dejado muy contento.

Pero Zustand, por sí solo, no hace magia. Optimizar tu aplicación sigue siendo **TU RESPONSABILIDAD**. Zustand vendría a reemplazar un poquito el patrón Split Context que vimos anteriormente, pero la responsabilidad de usar los hooks correctamente sigue siendo tuya.

## ¿Terminamos? Hmmm...

Vamos a partir con una pequeña conclusión:

> No uses un manejador de estados externo porque te da flojera usar Context API. Úsalo según el contexto de tu proyecto y equipo.

Los desarrolladores tenemos un poco de espíritu de _flojera_, Además, como la tecnología crece a pasos agigantados, muchas veces caemos en eso de _"usar la herramienta X porque es la moda del momento"._

Zustand en este caso, **no es la moda del momento**, de hecho es genial y la defiendo a morir, pero no es una solución mágica, con React nativo se pueden hacer grandes cosas si sabes cómo hacerlo.

## Plot twist - Signals

¿Creíste que Zustand era mi santo grial? **NI DE CERCA**. últimamente y por motivos laborales, me vi involucrado en realizar una _PoC_ con **Signals**.

En este artículo no pienso explicar qué es Signals, pero si llegaste a esta parte del artículo, dame un tiempito para preparar un artículo completo acerca de este patrón que, honestamente, me tiene fascinado. ¡Dale una chance de [leer por tu cuenta](https://preactjs.com/guide/v10/signals/)!

## Ahora sí, conclusión final

Usa librerías externas, usa React nativo, usa lo que quieras. Pero **entiende lo que estás usando** y **por qué lo estás usando**. No te dejes llevar por la moda, no uses librerías solo porque todos las usan. Evalúa tu proyecto, evalúa tu equipo y evalúa tus necesidades.

Al final del día, lo que importa es entregar algo de calidad, mantenible y escalable, eso no te lo entrega una librería, eso es **TU RESPONSABILIDAD** como desarrollador.

**MUUUUCHAS GRACIAS** por llegar hasta acá, espero que este artículo te haya sido útil y nos vemos en el próximo, si vez publicado esto en alguna red social, deja un comentario, me gustaría leerte! ¡Saludos!.
