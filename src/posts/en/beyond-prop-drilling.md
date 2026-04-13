---
title: 'Beyond Prop Drilling: Scalable and Dependency-Free Native State Patterns'
author: 'Mauricio Del Río'
category: 'Programming'
date: '2025-11-22'
bannerImage: '/blog_images/prop_drilling.png'
slug: 'beyond-prop-drilling'
spanishSlug: 'mas-alla-del-prop-drilling'
overview: "In this article, we'll talk about our own negligence in state management in React applications and how to overcome them with scalable and dependency-free patterns."
published: true
readingTime: '15 minutes'
tags:
  - Programming
  - Tutorials
  - Learning
  - React
---

## This will be looooong...

No matter your seniority, our work pace determines what we do and how we do it. In our day-to-day, we justify ourselves with time, pressure and deadlines. But let's be honest, many times doing things right can take a little more time, but in the long run, it **saves us much more**.

I want to make this very clear. **I AM ALSO GUILTY**, yes, in capital letters. Even with my years of experience, I still fall into bad practices and justify myself with time.

This article is an _ear pull_, first of all for me, for you as readers, it's the result of a few days of study, which aims to give you an interesting compilation about how to improve our usual practices working with React. (_cough cough... Thanks AI for helping me gather ideas_)

## Let's get to the point, let's talk about **Prop Drilling**

If you already know the concept, good, skip a couple of points. If you don't know it, I'll explain it quickly.

**Prop Drilling** is a common pattern in React where data is passed from a parent component to a child component through multiple levels of intermediate components. This can lead to a code structure that is difficult to maintain and understand, especially in large applications.

If you work in startups, medium, large, critical projects, etc. Surely you've encountered this pattern at some point, even, you yourself have implemented it _without realizing it_.

## Why is it a problem?

Prop Drilling can lead to several problems:

1. **Code Complexity:** As the application grows, the number of intermediate components increases, making the code harder to follow and maintain.
2. **Performance:** Every time the state is updated in a parent component, all child components that receive that state as a prop are re-rendered, which can affect the application's performance.
3. **Coupling:** Components become tightly coupled, making it difficult to reuse and isolate components.
4. **And the best of all!** _(or worst...)_ We completely forgot the fundamental principles of React. A _reactive_, _declarative_ and _composable_ virtual DOM.

## We invent solutions, buuuut...

Many times, we identify the disaster we have with prop drilling. It automatically comes to mind to look for a way to handle the application state in a more efficient and organized way.

Here the decision is transparent. Do you like Redux? Great, use it. Do you like MobX? Perfect, use it. Do you like Zustand? Excellent, use it.

Here's my point. Using these libraries... Are we really handling the **reactivity** and **state** of our application well? Or are we simply using a tool that makes our lives easier, but we still have a **disaster** in terms of performance and maintainability?

## Let's take a mental break... What does React offer natively?

React offers several native tools to avoid prop drilling, Providers, Context API, Hooks, _blah blah_.
Are they robust tools? **Yes**, Are they intuitive? _Questionable..._, Are they scalable? **IT DEPENDS ON YOU.**

## Let's get technical - Context API

I studied a little bit about the scope of the Context API, and the truth is that it's a **quite powerful** tool.

Let's start from the premise that you know how to use Context API. That said, let's go to a known case.

**Situation**: Application that has grown a lot, many components, many nesting levels... Consequence? Many nested Providers, many contexts, **AAAALL** nested in a horrible way, wrapping the global state in such a way that it looks like an upside-down Christmas tree.

## Provider Hell - **HEEEELL-NOOOOooo....**

Let's go with an example of chaos:

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

Sounds familiar right? Well, here we'll give some corrections to this problem.

### Solution 1 - **Combine Providers**

One way to reduce the number of Providers is to combine them into a single Provider that handles multiple contexts. This can help reduce the complexity of the component tree and make the code easier to follow. Here's an example, I'm basing it on Next.js, but the concept is the same in pure React:

```jsx
// _app.tsx
<CombinedProvider>
  <App />
</CombinedProvider>
```

Inside `CombinedProvider`, you can handle multiple contexts and states, and provide access to them through a single Provider.

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

### Solution 2 - **Custom Hooks for Contexts**

Another way to improve the usability of contexts is to create custom hooks that encapsulate the logic for accessing contexts. This can make the code cleaner and easier to use.

```jsx
// useAuth.tsx
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;
```

Then, you can use this hook in your components to access the authentication context more easily:

```jsx
// SomeComponent.tsx
import useAuth from './useAuth';
const SomeComponent = () => {
  const { user, login, logout } = useAuth();
  // ...
};
```

I like this one a bit more, as it encapsulates the logic for accessing the context and makes the code cleaner. Now, between solution 1 and 2 there is no correct answer, it depends on your use case and the needs of your application.

## Did we solve the Prop Drilling problem?

_Not really..._ At least not by itself. We define providers, yes. But we still don't see how we're using it in our components.

Here comes the second part of the problem. The correct use of hooks and contexts **in components**.

Defining contexts and providers is the first step. The real challenge lies in how we use them in our components. What do we gain from having organized storage if we don't really care about unnecessary rerenders?

## Split Context Pattern

The first advice I'll address is the following:

> Separate state (data) from behavior (functions that modify state).

If you have a component that needs to trigger an event (example: a button with an `onClick`) it **SHOULD NOT RENDER** when the state changes.

How do we achieve this? Easy, we separate the context into two different ones, one for the **state** and another for the **functions that modify that state.**

```jsx
// StateContext.tsx
const StateContext = React.createContext({ data: null });
// ActionsContext.tsx
const ActionsContext = React.createContext({ setData: () => {} });
```

Then, in our components, we can use these contexts independently:

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

Thanks to this, `SomeComponent` will only re-render when `data` changes, but not when `setData` changes. **Cool right?** Just a very simple step can make a small difference. Now, obviously this is a very minimal example, but when we work on real and huge products, these small actions are greatly appreciated!

## Let's keep playing a bit more - React 19: `use` Hook

With the arrival of React 19, we have a new tool in our arsenal: the `use` hook. This hook has the particularity that we can use it inside a conditional statement (a common hook cannot be inside an if or a loop, for example). `use` opens a new path for us: **We can condition data loading and its rendering.**

How does this help us with prop drilling? Well, we can use `use` to load data **only when we need it** and based on some specific condition.

```jsx
// components/SmartCard.tsx
import { use } from 'react';
import { ThemeContext } from './ThemeContext';

export const SmartCard = ({ overrideTheme }: { overrideTheme?: boolean }) => {
  let theme = 'light';

  // Conditional context: We only subscribe if necessary
  if (!overrideTheme) {
    const themeContext = use(ThemeContext);
    theme = themeContext.theme;
  }

  return <div className={`card ${theme}`}>...</div>;
};
```

In this example, `SmartCard` only subscribes to `ThemeContext` if `overrideTheme` is false. This means that if we pass `overrideTheme` as true, the component will not re-render when the theme changes in the context. In this particular context and considering that theme management tends to impact many components, this technique **does deliver quite a bit of value**.

Now, the fine print: **Only available in React 19+**. (If you can upgrade from React 18 to 19, it's worth considering).

## Memoize! `useMemo`

If for some reason you can't separate logic from your context, you can resort to the already classic `useMemo`.

**Quick definition**: `useMemo` is a React hook that memoizes the result of a function to avoid unnecessary calculations on each render.

**When to use it?** When you have expensive calculations or functions that shouldn't run on every render unless their dependencies change.

**How to use it?** Here's a little example:

```jsx
import React, { useMemo } from 'react';
const ExpensiveComponent = ({ data }) => {
  const processedData = useMemo(() => {
    // We simulate an expensive calculation
    return data.map((item) => item * 2);
  }, [data]); // Only recalculated if 'data' changes

  return (
    <div>
      {processedData.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};
```

In this example, `processedData` is only recalculated when `data` changes, which improves component performance by avoiding constant recalculation.

## Another tip: **TypeScript**

Well, TypeScript itself doesn't improve your application's performance, but it does improve the maintainability and scalability of your code.

Honestly, I don't like it, it's more of a philosophical issue with the initial idea of an untyped language. Here, _actually_, TypeScript covers a market need: **Large projects need typing to be maintainable.**

Of course, if you're quite organized and have good development practices, you can perfectly maintain a large project in pure JavaScript. But the reality is that most teams and companies prefer to use TypeScript, so we can understand our own colleagues, just by **reading code**.

And if by any chance you're a programming beginner (Welcome!), I recommend you start directly with TypeScript. You'll save yourself many headaches in the future. For me, learning JavaScript and then TypeScript can lead to confusion. Learn TypeScript directly and just mentalize yourself to assume that Javascript is **strongly typed** (mental lie).

## I digressed, let's continue with React 19

There's another gem I read somewhere (I didn't even know of its existence) and it's the `useActionState` hook.

**What is `useActionState`?**
`useActionState` is quite an interesting hook, it's used in somewhat more specific cases, but at the same time, quite common: **Form handling.**

Call `useActionState` at the top level of your component to create a state that updates when invoking a form action. You pass `useActionState` an existing form action function, as well as an initial state, and it returns a new action that you use in your form, along with the latest form state and whether the action is still pending. The latest form state is also passed to the function you provided. (Yes, this is taken from the _official documentation_, but it's very well explained).

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

The form state is the value returned by the action the last time it was submitted. If the form has not been submitted yet, it's set to the initial state.

If used with a server function, `useActionState` allows the server's response to the form submission to be displayed even before hydration is complete.... Cool right?

## Shall we go with a real example?

For this example, we're going to implement a shopping cart where the main objective is **performance**:

**Step 1**: Domain Definition (Types)

Always start with types. This defines the shape of your state. In my experience, it's good practice to start with types and interfaces, so you're clear about what data you'll be handling.

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

**Step 2**: Reducer

The reducer should be a **pure function** (a pure function is when a function has no side effects and always returns the same result for the same arguments), easy to test outside of React.

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

      // We calculate the total here to avoid recalculating it on each render...
      const newTotal = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

      return { ...state, items: updatedItems, totalAmount: newTotal };
    }

    // ... implementation of other cases (REMOVE, TOGGLE, blah)
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };

    default:
      return state;
  }
};
```

**Step 3**: The Provider Architecture (React 19 + Split Pattern)

We create two contexts: one for **Reading** (changes frequently) and another for **Writing** (stable, never changes).

```typescript
// context/CartContext.tsx
'use client';

import { createContext, useReducer, ReactNode, use, useMemo } from 'react';
import { CartState, CartAction } from '../types/cart';
import { cartReducer } from '../logic/cartReducer';

// 1. Initial State
const initialState: CartState = {
  items: [],
  totalAmount: 0,
  isOpen: false,
};

// 2. Separate Contexts
const CartStateContext = createContext<CartState | null>(null);
const CartDispatchContext = createContext<React.Dispatch<CartAction> | null>(null);

// 3. Unified Provider
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // NOTE: dispatch is stable by design in React.
  // It doesn't need useMemo. state changes, so separating them prevents
  // components that only use dispatch from rendering when state changes.

  return (
    <CartDispatchContext value={dispatch}>
      <CartStateContext value={state}>
        {children}
      </CartStateContext>
    </CartDispatchContext>
  );
};

// 4. Consumption Hooks with React 19 `use` API
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

**Step 4**: Implementation in Components

Component 1: The add button (Only writes)

This component will never re-render, no matter how many items you add, because dispatch doesn't change.

```typescript
// components/AddToCartButton.tsx
import { useCartDispatch } from '../context/CartContext';
import { Product } from '../types';

export const AddToCartButton = ({ product }: { product: Product }) => {
  const dispatch = useCartDispatch(); // We only consume the DispatchContext

  console.log('Render: AddToCartButton'); // This will only appear once.

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

Component 2: The cart counter (Only reads)

This component does render when the state changes.

```typescript
// components/CartCounter.tsx
import { useCartState } from '../context/CartContext';

export const CartCounter = () => {
  const { items } = useCartState(); // We consume StateContext

  const count = items.reduce((acc, item) => acc + item.quantity, 0);

  console.log('Render: CartCounter'); // This will appear every time the cart changes.

  return <span>Items: {count}</span>;
};
```

## How are we doing so far?

Here let's take a small technical break. So far, with a few changes, we've managed to use native React to handle state in a much more efficient and scalable way, without the need for external libraries.

Now, this pause has a purpose and it's really **To contradict myself**.

You see, this article doesn't exist simply because I'm a staunch defender of _not using_ external libraries. But you also have to understand the environment of your company, project and team.

There are times when projects are so large and scalable, that the resource _less is more_ has some consequences.

When you have, for example, critical products, you no longer think about installing libraries left and right, before installing any dependency the first thing you check is:

- Long-term support
- Community
- Maintainability
- Performance
- Learning curve for the team
- Documentation
- Ecosystem

Many of the most famous state management libraries meet these requirements, but there's also a little problem: **You get tied to another critical library.**

Critical libraries every so often release **major** versions, The problem? They have **Breaking Changes**. This means that every so often, you must update your code so it continues to work correctly with the new version of the library (if the library stops having active support and you don't update, any security breach can end in a **disaster**).

What happens in giant projects? You must upgrade a major version of an external library that basically handles all the store of your frontend, the slightest error from a breaking change can **bring down your entire application.**

Just tolerating React's breaking changes is more than enough, luckily stable versions of React tend to last quite a few years and lately bring fewer breaking changes.

## And the contradiction?

_Ooooonce again I went off on tangents_, but honestly, even in large projects, I would venture to use some lightweight global state manager, like Zustand.

I stop with Zustand because it's a library that meets all the requirements mentioned above, but at the same time, it's **extremely lightweight** and **easy to learn**.

I love it, I've used it more than once for some personal project and the truth is that it has left me very happy.

But Zustand, by itself, doesn't work magic. Optimizing your application is still **YOUR RESPONSIBILITY**. Zustand would come to replace a bit the Split Context pattern we saw earlier, but the responsibility of using hooks correctly is still yours.

## Are we done? Hmmm...

Let's start with a small conclusion:

> Don't use an external state manager because you're too lazy to use Context API. Use it according to the context of your project and team.

Developers have a bit of a spirit of _laziness_, Besides, as technology grows by leaps and bounds, we often fall into that of _"using tool X because it's the trend of the moment"._

Zustand in this case, **is not the trend of the moment**, in fact it's great and I defend it to death, but it's not a magic solution, with native React you can do great things if you know how to do it.

## Plot twist - Signals

Did you think Zustand was my holy grail? **NOT EVEN CLOSE**. lately and for work reasons, I was involved in making a _PoC_ with **Signals**.

In this article I don't plan to explain what Signals is, but if you got to this part of the article, give me some time to prepare a complete article about this pattern that, honestly, has me fascinated. Give it a chance to [read on your own](https://preactjs.com/guide/v10/signals/)!

## Now yes, final conclusion

Use external libraries, use native React, use whatever you want. But **understand what you're using** and **why you're using it**. Don't get carried away by the trend, don't use libraries just because everyone uses them. Evaluate your project, evaluate your team and evaluate your needs.

At the end of the day, what matters is delivering something of quality, maintainable and scalable, a library doesn't give you that, that's **YOUR RESPONSIBILITY** as a developer.

**THAAAANK YOU VERY MUCH** for getting this far, I hope this article has been useful to you and see you in the next one, if you see this published on any social network, leave a comment, I'd like to read you! Greetings!
