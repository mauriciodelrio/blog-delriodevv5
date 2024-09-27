---
title: "Useful tips for setting up your Visual Studio Code"
author: "Mauricio Del Río"
category: "Programming"
date: "2024-05-15"
bannerImage: "/blog_images/vs_code.jpeg"
slug: "consejos-utiles-para-configurar-tu-visual-studio-code"
overview: "In this article, you will see the best plugins to install in Visual Studio Code based on what I have used for many years as a programmer."
tags:
    - Programming
    - Tips
    - Tutorials
---
## Lets talk about Visual Studio Code

Visual Studio Code is an Integrated Development Environment (IDE) that provides tools and facilities for writing code. Typically, IDEs also offer tools for compiling, transpiling, and the ability to have your own terminal for debugging, testing, and running your application.

The features are vast, and in this case, Visual Studio Code is one of the best free options available. While it is true that there are other comprehensive development environments, such as JetBrains tools, Visual Studio Code is greatly enhanced by a community that creates plugins to add functionalities and improvements to the base environment.

In this article, I will mention the tools I use the most when programming. Many of them are focused on web development, as my specialty is frontend; however, there are others that are generally applicable.

## Git Lens

GitLens is a tool that allows you to efficiently manage your project directly integrated with Git. It supports GitHub, GitLab, Bitbucket, among others. It offers an interface where you can manage your branches and Pull Requests, as well as the ability to review all changes line by line, quickly revert changes, and more.

## ESLint

ESLint is a tool that allows you to configure your projects to promote writing clean code. The severity of ESLint in your projects will depend exclusively on the rules you set. Some people are very strict and do not allow any warnings; having any could cause tests or builds on servers to fail. However, this will depend on how the project is configured.

## JSON Formatter

JSON Formatter is a tool that allows you to format a JSON object within a file of that extension. By formatting it, the tool organizes the object, making it much easier to read. It is very useful when you want to search for a particular element within a very large object.

## Error Lens

This is a very useful tool for checking in real time whether your code may have any errors, including issues with typing, unexpected and incorrect function returns, among others. Occasionally, the program might suggest errors that are not actually present, but overall, it is very accurate. Highly recommended for speeding up development and also for those who are just starting to program.

## WSL (If you works with windows)

WSL stands for Windows Subsystem for Linux. Since Windows 10, it has been a feature that allows people to run a Linux environment on Windows without the need for a virtual machine. It runs much faster than a conventional virtual machine, the installation is very simple, and it integrates very well with VS Code thanks to this extension. Particularly, if you have a mid-range or higher-end PC, I recommend working with Windows and WSL. It has almost no limitations, you don't need to partition your hard drive, and you only need to start Windows, which is useful for versatile users who don't just use their computer for work.

## Docker

Docker is a tool that allows you to encapsulate applications in something called containers. Containers are isolated environments that can be configured very specifically to suit the needs of your application. The advantage of Docker is that, once configured, you can share this configuration with your coworkers, ensuring that everyone has the same programming environment, independent of each team member’s hardware. The Docker extension in VS Code greatly simplifies the creation and maintenance of these containers.

## NPM Intellisense

For those of us who work with JavaScript environments, this tool greatly facilitates imports in each file and provides smart suggestions. It is a straightforward and very useful extension.

## Copilot and Copilot Chat (It's a paid application)

Using Copilot costs about 10 USD, but if you want to speed up your development, I highly recommend it. It offers smart auto-suggestions, allows you to chat with AI to explain issues related to your code, and automatically generates unit tests. Although it is a paid tool, I recommend it. Those 10 USD can significantly speed up your code writing and save a lot of time.

That's it! I hope you found this information helpful, and I'll see you in the next article.