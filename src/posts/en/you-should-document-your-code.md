---
title: "Why documenting your code is not a waste of time"
author: "Mauricio Del Río"
category: "Programming"
date: "2026-01-24"
bannerImage: "/blog_images/documentar.png"
slug: "you-should-document-your-code"
spanishSlug: "debes-documentar-tu-codigo"
overview: "Clean code is self-explanatory if it's well written. In this article, I'm going to challenge that myth and tell you why it's important to document your code, even if you're the only one who will ever read it."
published: true
readingTime: "10 minutes"
tags:
    - Programming
    - Tips
    - Opinion
---

## What's organized for you might be chaos for someone else

Hey! It's been a while since I wrote a new article. My inspiration this time comes from some proof of concepts I had to work on at my job. The code itself wasn't that hard to understand, but the steps required to properly run this project locally based on how the environment was set up were a **complete mess**.

Don't get me wrong, the code itself was quite organized, with acceptable practices, following typing standards, file distribution, variable naming, etc. But the thing is, it was a repository I had *never* touched before. In my current job, we support over **40 web artifacts** from a very large and complex application, so remembering every detail of every project is impossible.

And this is obvious—there are many squads that support 3 or 4 web artifacts each. For them, it's relatively easy to understand the scope of each one. But my team supports all these squads (among other things), so having to read every project, written by different development cells, with different styles and ways of doing things, is a real headache.

That's why, at the account level, we're implementing internal standards for code organization, code style, semver processes, PRs, strong linting, etc. A process that's quite questioned and very hard to empathize with. When everyone in your close circle, meaning your own squad, understands what they're doing, suddenly these practices seem like a *waste of time*.

## Standards and a bit of ego

Following up on the previous point, when we implement new automated rules for static code analysis, the first thing that comes up is: _"Why do I have to follow these rules if my code is already well written?"_ _"Why should I use X format if Y library's documentation uses a different format?"_ _"Why do I have to waste time on this nonsense if the files are already well-defined?"_.

Here, developers are right about many of these points. If your code follows standards defined by some framework, great. But if TypeScript has a standard for defining files that contain types and interfaces, and Next.js has a *different* format for defining the same types of files... is it really a standard then?

> If there's more than one correct way to do the same thing, there is no standard.

When we talk about standards in this sense, we should only categorize it as a "convention." If we go back to the concept of a convention, can we define our own conventions? Of course we can. Our convention can be entirely based on an existing one from some library or framework included in the repository. The decided convention doesn't indicate it's the *only* correct way to write code—it indicates that the entire layer of web teams will write their code under that convention, so that legibility and maintainability are much better.

Conveying this message is a bit difficult because it implies stepping out of your comfort zone and your own work bubble. When you work at a company where practically all devs are mid-level or above, the ego about how to do things "the right way" is very common. Particularly in the team I'm in, I've had to abstract myself a bit from that, because when a team comes telling me they don't see the need to define or classify a file in X or Y way, the truth is that, in pure terms of best practices, they're absolutely right, but in terms of internal maintainability, **they're not**.

And this is where I want to connect with the central topic of this article. Code standards, linting, conventions... all of that is great, but there's a layer we often ignore that has the same problem: documentation. Why? Because ego also plays an important role there.

## Clean code doesn't explain itself

OK, we already have our structured code, with high coverage, strict linting, strong typing, folders and files under the same format, everything indexed, and a long etcetera. Does this really guarantee that the code is readable? There's controversy here too, and it has to do with the same developer ego.

I've met people who are purists about "programming" as such, who feel that just reading the code, if it's well organized, is more than enough—no comments, nothing. The truth is **no**, because in our day-to-day we don't spend time reading code. We work based on processes and information flows, from point A to point B.

For someone who has limited time, attends many meetings, dedicates time to planning, defining new objectives, resolving critical cases, etc., what matters *least* in that long list of sprint tasks is actually reading code. You can have 20 years in the industry, and you'll still spend a lot of time understanding other people's work (and your own too!).

Organized code with defined conventions helps, especially when you want to apply massive and cross-cutting changes, since it's easy not to get lost in structures. But this implies *absolutely nothing* when it comes to wanting to spin up the application, test flows, understand if you should use mocked data, real data, etc.

## Don't run away from documenting

Documenting is writing in natural language the definition of some process, flow, or even the explanation of some complex function. It's not necessary to document everything, but it **is** necessary to document what's not obvious at first glance.

And when I say "it's not necessary to document everything," I mean you don't have to explain line by line or function by function. Effective documentation focuses on complex processes, on those flows that you know if someone else reads them (or yourself in 6 months), they'll need additional context to understand. It's more important to document the _why_ and the _what for_ than the _how_.

Let me give you a quick example. Imagine you have a function that calculates a discount:

```javascript
// ❌ Without context
const getDiscount = (user) => user.purchases > 10 ? 0.15 : user.isNew ? 0.10 : 0;

// ✅ With BUSINESS PROCESS context
/**
 * Calculates discount according to Q1-2026 commercial policy.
 * Frequent customers (>10 purchases): 15%
 * New users (first purchase): 10%
 * @see https://confluence.company.com/discount-policy
 */
const getDiscount = (user) => user.purchases > 10 ? 0.15 : user.isNew ? 0.10 : 0;
```

I'm not explaining *what* the code does (that's self-evident)—I'm explaining the business context behind that logic. That's the difference.

Documentation has other layers too. I don't know if you've noticed, but when you create any repository on GitHub, you have the option to create a `README.md` file. That file has a purpose for existing—it's not just decoration. The `README.md` is the **first point of contact** someone has with your project. There you should explain clearly and concisely what your project does, how to install it, how to run it, and any other relevant information so someone can quickly understand the project's purpose.

If you analyze the market, the most successful projects are successful precisely because of their own documentation. Good documentation generates interest, interest generates community, and community adds an extra layer of value to the project.

## You need to know how to read and write

If you're going to document, please do it well. It's happened to me so many times—going into a company's trusted documentation platform and finding atrocities: spelling mistakes that would make a kindergartener cringe, terrible writing, text without clear objectives, disorder, poorly explained processes, and assuming the reader has prior knowledge they don't have.

As you advance in the industry (and this applies to any type of job), if you feel you have weak foundations in skills acquired during your country's mandatory school cycle—like writing, spelling, basic math, etc.—I recommend you invest time in strengthening those skills. A good professional isn't only good in their technical area; they also know how to perform with **integrity**, and integrity starts from the foundations of communication.

## Use AI

Now, if you feel your skills aren't polished yet, use AI! Right now, after finishing writing this article, I'll ask AI to review it and check for spelling and writing errors, see if the context is well-described, and suggest subtle changes—without losing my essence, of course. This kind of thing also helps you learn your rhythm, style, and way of writing.

If you need to document in English and you lack grammar skills, same thing! Write everything in Spanish, generate a good prompt for AI to read the text and translate it correctly (not literally), using terms that exist in English and leveraging the various ways to express certain concepts that only exist in English.

## Tools that can help you

There are tools that facilitate technical documentation, and it's worth knowing about them. **JSDoc** and **TSDoc** allow you to document functions directly in the code, generating automatic references that your IDE can display. **Swagger/OpenAPI** does the same but for REST APIs, documenting endpoints in a standardized way.

Now, I want to be clear: these tools are very useful, but they're still pure technical documentation. What really makes the difference is when you combine the technical with natural language, explaining not just the signature of a function, but the **business purpose** it serves. Tools help you with structure, but message clarity depends on *you*.

## Your documentation should be dynamic

Thanks to markdown format, documenting is very simple—defining standard styles for titles, code blocks, lists, quotes, etc. is very easy. Take advantage of emphasis, bold, italics, code blocks, inline code, links, images, diagrams, etc. to make your documentation much more friendly and easy to read.

Also, don't be afraid to update your documentation. A common mistake is thinking that once a document is written, it shouldn't be touched again. Documentation should be a **living entity** that evolves along with the project. If something changes, update the documentation. If you find a better way to explain something, do it.

## Semver for documentation too

If your project follows semantic versioning (semver), your documentation should too. If you make a major change in your project that breaks compatibility, make sure to update the documentation to reflect those changes. If you make a minor change or a bug fix, you should also consider whether the documentation needs to be updated.

Associate all your PRs with issues. For each PR, define a structure: What are you doing with these changes? What's the reason? What type of change is it? Is it a breaking change? What tests did you run before making your PR?

If you use GitHub's resources well, you can automate changelog generation based on your commit and PR messages, which makes tracking changes in your project and its documentation even easier.

## I don't have time in the sprint

This is an excuse I hear frequently, and although I understand that sprints can be intense, the reality is that if you feel you estimated a ticket that doesn't allow you to add documentation, evidence, explanations, demos, etc., **you're responsible** for that estimate. Every User Story should have within its goals:

1. Functional code that meets requirements.
2. Unit and/or integration tests that ensure code quality.
3. Adequate documentation explaining the purpose and functioning of the code.
4. Test evidence, screenshots, videos, etc. that demonstrate the code works as expected.
5. Any other resources necessary for someone else to understand and work with the code in the future.
6. Demos or usage examples if applicable.
7. Refactoring if necessary.

If you work at a company that doesn't have these concepts clear when defining a User Story, I recommend you try to install and respect these processes yourself. When the team realizes your tickets are being closed with all these points very well done, the team itself will be motivated to follow those same standards.

Now, not all jobs are the same, and not all companies have the same culture. If you feel you're in a toxic environment where they don't value your work, don't want to do good work, and don't care about the quality of what they're delivering, my recommendation is to **look elsewhere**. The software industry is very broad, and there are many companies that value quality, documentation, and good work.

## Final message

Documenting your code is not a waste of time—it's an **investment** in the quality and maintainability of your work. It doesn't matter if you're a junior or senior developer; documentation is an essential skill we all must cultivate. Don't run away from documenting. Embrace documentation as an integral part of your development process, and you'll see how your work becomes more valuable and appreciated by yourself and others.

Don't forget to polish your skills beyond the purely technical, and use all the tools at your disposal, including AI, to improve the quality of your documentation. Remember, a good developer not only writes good code but also knows how to **communicate it effectively**.

See you in the next article!
