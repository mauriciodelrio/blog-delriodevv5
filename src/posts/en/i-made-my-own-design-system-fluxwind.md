---
title: 'I Made My Own Design System: Fluxwind'
author: 'Mauricio Del Río'
category: 'Programming'
date: '2026-04-20'
bannerImage: '/blog_images/ds.png'
slug: 'i-made-my-own-design-system-fluxwind'
spanishSlug: 'hice-mi-propio-design-system-fluxwind'
overview: "There are plenty of design systems out there, but I'm a bit particular and I want full control over my components — let me explain the reasoning behind this decision."
published: true
readingTime: '6 minutes'
tags:
  - Programming
  - Frontend
  - JavaScript
  - Fluxwind
---

## Many ideas, little time

Hey everyone! My vacation is almost over, and even though I _maybe_ didn't rest as much as I should have, I still feel recharged. I took the time to sharpen some things that have been at the forefront with AI, and there's no better way to learn than by doing. That's how [Fluxwind](https://fluxwind.delrio.dev) came to life — my own design system built on top of Tailwind CSS, with the goal of having full control over my components, learning more about accessibility and customization, and creating a tool that can adapt to my projects and needs.

## Let's talk about Fluxwind

Before getting into the details, let me explain the name. **Fluxwind** comes from the combination of two ideas: _Tailwind_, the CSS framework at the base of the system, and _flux_, which evokes fluidity and adaptability. The result is a name that tries to capture what the project is: a system built on Tailwind, but designed to flow and adapt to different products.

There are plenty of design systems out there — most of them highly scalable, customizable, and easy to integrate — but there are several reasons why I decided to build my own. Here are my main motivations:

1. **Full control**: I want absolute ownership over every component, from its design to its behavior. This lets me tailor it exactly to my needs and preferences without being constrained by the limitations of an existing system.
2. **Learning**: Through my job, managing a design system, this was a great opportunity to deepen my knowledge. My main focus was accessibility — and while I already had some background, it helped me better understand how to build accessible components from scratch, use HTML tags correctly, properly contrast colors, and define additional tools that can significantly improve the user experience.
3. **Personalization**: I want Fluxwind to reflect my style. Even though I'm not the biggest design expert, having my own product that carries my personal stamp across all my future projects brings me closer to my goal of building my personal brand.
4. **Compatibility with my projects**: The technical decisions I made when building Fluxwind are 100% tailored to my needs, tech stack, and projects — with a touch of innovation. I can use my design system to implement new tools, experiment with new technologies, and try things I perhaps couldn't do with a pre-existing system.

## Technical decisions

The foundation of Fluxwind isn't just about technology — it's a decision based on what I'd want in a design system. My priorities were:

1. **Accessibility from day one**: I've seen firsthand how retrofitting accessibility after the fact becomes chaotic. Building in pixels, ignoring color contrast, or misusing HTML tags makes refactors harder than the original implementation. Every component had to cover at least **WCAG 2.2 AA**.
2. **Atoms, molecules, and organisms**: I've always liked this structure. It's common to find design systems that only go up to the molecule level, but that doesn't work for me. You can easily find many organisms built with Tailwind, but a lot of them are paid — which breaks my scheme of reusing freely available resources.
3. **Open source**: Building on the previous point, I don't want to depend on paid resources or restrictive licenses. I want Fluxwind to be completely free, usable in any project without legal or financial concerns, and as a contribution to the community. If you want to use it, here's the [GitHub repository](https://github.com/mauriciodelrio/fluxwind-ui).
4. **Flexibility and customization**: Right now many components are fairly basic, though they're extensible to native HTML properties (atoms). The idea is to keep adding features based on my own needs. For example, if I ever need to build a calendar, I can add it as an organism to Fluxwind and have it available for any future project.
5. **Themes**: I tokenized the entire color system, added native **dark mode** support, and since I was at it, designed tokens by business context — colors for healthcare, e-commerce, legal, and more. This lets Fluxwind adapt easily to different contexts and needs.
6. **Stack**: This was important because I got to decide how the design system handles state internally, what tools to use for testing, what technologies to build with, etc. I decided to build it with **React, TypeScript, and Tailwind CSS**, and for state management I'm using _signals_ — technologies I'm familiar with and closely tied to the apps I typically build.
7. **Documentation**: This matters just as much. I've often encountered libraries with unclear documentation, so I decided the [Fluxwind Storybook](https://fluxwind-storybook.delrio.dev) should be as clear as possible — with usage examples, use cases, and detailed explanations for every component, so anyone can understand how to use it without friction.

## Using AI

Fluxwind is a project I picked back up thanks to work I did building my own [skills dataset](https://github.com/mauriciodelrio/delriodev-skills). Having invested in a solid system of skills, iterating on Fluxwind helped me notice where definitions were incomplete, ambiguous, or poorly referenced — so I _killed two birds with one stone_: I strengthened my skills dataset and built components with AI assistance, which let me move faster with a solid foundation.

With a good skills system in place, all my components followed the same structure — scaling tokens, colors, spacing, and more. This made the build process much more fluid and consistent. I also used AI to generate usage examples, documentation, and test cases, which saved me a considerable amount of time and effort.

## Fluxwind is live!

I didn't just build Fluxwind — I also built a [website](https://fluxwind.delrio.dev) where every single component you see rendered is a Fluxwind component. The site includes showcases, real-world use cases, motivations, and references to official documentation. To make all this possible, Fluxwind is published as an npm package, so if you want to try it out, you can install it with:

```bash
npm install @fluxwind/core
pnpm add @fluxwind/core
yarn add @fluxwind/core
```

You can also use specific themes for your business context, for example:

```bash
# Base theme
import "@fluxwind/core/styles";
# Specific themes, pick one.
import "@fluxwind/core/styles/themes/health";      // Teal — Healthcare, clinical
import "@fluxwind/core/styles/themes/legal";       // Navy — Legal, compliance
import "@fluxwind/core/styles/themes/commerce";    // Amber — E-commerce, retail
import "@fluxwind/core/styles/themes/finance";     // Green — Fintech, banking
import "@fluxwind/core/styles/themes/creative";    // Rose — Creative, agencies
import "@fluxwind/core/styles/themes/education";   // Cyan — EdTech, learning
import "@fluxwind/core/styles/themes/high-contrast"; // WCAG AAA — Accessibility
```

What's interesting is that there's also a component where you can **define a specific theme** just for that component and its children, giving you a lot of flexibility to mix styles within the same project.

You can visit the [Fluxwind website](https://fluxwind.delrio.dev) to see showcases and real-world use cases, browse the [GitHub repository](https://github.com/mauriciodelrio/fluxwind-ui) to check out the code or contribute, and explore all the components in action at the [Fluxwind Storybook](https://fluxwind-storybook.delrio.dev).

If you're interested in this project, all I ask is a star ⭐ on GitHub — it would go a long way in keeping me motivated and giving the project more visibility in the community.

## Next steps

This is just the beginning of Fluxwind. Over time it will grow — I'll add many more organisms, keep improving the documentation, and maybe at some point, if there's enough interest, I could consider adding support for other technologies like Vue or Svelte (very trendy these days). For now, my main focus is to keep building useful components for my projects and sharing them with the community.

I hope you enjoyed this project. If you have any suggestions, comments, or just want to say hi, don't hesitate to reach out. Thanks for reading!
