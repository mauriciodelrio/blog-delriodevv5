---
title: 'My VS Code Skills: Installable and Public'
author: 'Mauricio Del Río'
category: 'Programming'
date: '2026-04-12'
bannerImage: '/blog_images/skills.png'
slug: 'my-vs-code-skills-installable-and-public'
spanishSlug: 'mis-skills-para-vs-code-instalables-y-publicas'
overview: "I've built a small collection of skills for VS Code that help me be more productive. I took the opportunity to turn them into a package so anyone can install them."
published: true
readingTime: '5 minutes'
tags:
  - Programming
  - VS Code
  - Productivity
  - Skills
---

## I'm on vacation

Hey everyone! Taking advantage of my vacation, I decided to tidy up my productivity a bit — and to do that, I've built a collection of skills for VS Code that will help me be more productive. The idea is to have these skills ready for personal projects so I don't have to write complex prompts every time I want to get something done.

While working on these skills, I realized I could **share them** with everyone. But since it's pretty tedious to create them one by one, I decided to package them so anyone can install and use them. So here I am, sharing my VS Code skills with you.

## What are skills?

Skills are, in essence, **rules**. Basically, when you interact with an agent, you tell it what it should take into account when performing a certain action. For example, if you're working on a React project, you can define basic rules about how to correctly code with React — you give your agent context so that when you ask it to generate something, it takes that context and applies it to whatever you're requesting.

Skills can be as simple as they are **complex** — you can add business rules, style rules, architecture rules, etc. The idea is that these skills help you be more productive and maintain a quality standard in your code.

## Basic considerations for my skills

As a Spanish speaker, I'm not too keen on having skills only in English, since sometimes it's easier for me to interact with agents in Spanish. Even if it costs more tokens, the communication just flows better. For that reason I created the **skills in Spanish** and, based on them, made their own replica **in English** — giving everyone the freedom to choose in which language they want to set up their skills on their machine.

To mentally organize these skills, I divided them into 3 categories:

- **Agent Workflow Skills**: These skills are designed so the agent can understand **how** your workflow works — how to plan, how to execute any task, etc. They give the agent context about the way you work, so that whenever you ask it something, it always respects **the same structure** when generating code or any action.
- **Security and Data Governance Skills**: These skills are designed so the agent takes **security and governance** aspects into account when generating code — for example, not exposing sensitive information, not generating vulnerable code, etc. These skills are kept separate because they are primarily based on international security standards such as OWASP, ISO 27001, etc. As a result, these skills are applicable **to any type of project**, regardless of the programming language or architecture you're using.
- **Software Skills**: These skills are the backbone of everything involved in generating software. The categorization covers architecture, frontend, backend, workflows, testing, deploys, docker, git, etc. This core **is very important** because depending on the type of app you're developing, the agent will be able to apply these skills to generate quality code with good practices, etc.

> **⚠️ One thing to keep in mind:** Skills can make you spend more reading tokens, since every time you ask your agent something, it has to read all the defined skills to apply them. That's why it's important to have a **good balance** between the number of skills you have and the value they provide. Also, you should granularize your skills so your agent only consults the ones that are truly relevant to your request.

## My skills are installable and public!

Since I love open source and sharing my work with the community, I decided to make these skills **installable and public**. This means anyone can install these skills in their VS Code and use them freely. This repo is under the MIT license, which means you can use, modify, and distribute these skills without any restrictions, as long as you respect the license terms (I'd also really appreciate a star on GitHub if you like them).

You can also open **PRs** to improve these skills, add new ones, fix bugs, etc. The idea is for this to be a collaborative community where we can all contribute and benefit from these skills.

## Where can I find these skills?

Here's [the link to my GitHub repository](https://github.com/mauriciodelrio/delriodev-skills) where you can find all my VS Code skills. There you'll find instructions on how to install them, how to configure them, etc.

I'd really appreciate any feedback you can give me about these skills — whether it's to improve them, fix bugs, add new ones, etc. The idea is for this to be a tool in constant evolution that benefits everyone.

## Future

I'm planning to adapt these skills for Claude and any other trending tool. I've noticed that some tools can now "install" skills, so I think it's a great idea to generate those files in the future. For now, I'll focus on polishing these skills, testing them, and seeing how they can keep improving in context and execution.

Cheers everyone! I hope these skills help you be more productive in your day-to-day work with VS Code!
