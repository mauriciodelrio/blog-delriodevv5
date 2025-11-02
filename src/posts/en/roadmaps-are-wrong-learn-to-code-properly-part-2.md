---
title: "Roadmaps are wrong: learn to code properly - Part 2"
author: "Mauricio Del Río"
category: "Programming"
date: "2025-11-01"
bannerImage: "/blog_images/roadmap.png"
slug: "roadmaps-are-wrong-learn-to-code-properly-part-2"
spanishSlug: "los-roadmaps-estan-mal-aprende-bien-a-programar-parte-2"
overview: "In this article I present the second part of a series where I explain why roadmaps for learning programming are poorly focused and how you should approach your learning from scratch."
published: false
tags:
    - Programming
    - Tips
    - Tutorials
    - Roadmaps
    - Learning
---
## Here we are again!

In my previous article I talked to you about the importance of knowing the history of computer science, the concept of algorithm and how to think in algorithms. If you haven't read that first part, I recommend you do it before continuing with this article, as it's **fundamental** to understand what I'm going to explain next.

## I've been thinking about the previous article and... Now what?

We're not that far from getting our hands dirty, but before that, I think you should review other basic concepts that will help you better understand the world of programming.

## Software and Hardware

Before touching any programming language or starting to tell AI to write code for you, I think you should understand a bit more about what software and hardware are.

### Hardware

Hardware is the tangible, the physical, the palpable, the pieces that make up any type of electronic device. Before the arrival of personal computers, hardware was something much bigger and more complex, but over time, the miniaturization of electronic components has allowed us to have very powerful devices in very small sizes today.

Why do we talk about hardware? This isn't really out of curiosity. We need to understand beyond what we see on the surface. What is fast access memory? What are cache memories? What is a processor? What is a core? What are execution threads? Why do GPUs exist? What is a data bus?

It might sound a bit *foreign* perhaps, but knowing the differences between memories, data persistence, processing speed, parallelism, etc. will help you better understand how the programs you write work and how to optimize them.

### Software

You can't touch software (Well, according to Steve Jobs, yes you can touch software, but let's say it's a bit... *subjective*, maybe on a magic-induced trip you can, but the reality is you **can't**).

Software is built on top of hardware, here we deploy much of our work, we can't make software without understanding hardware, how do we do backend without understanding servers? How do we make mobile applications without understanding mobile devices? How do we make software without knowing what layers they run on?

And not just software, we need to know how to understand our interpreter, our intermediary between us and the machine. The **operating system**. What is an operating system? Why do so many exist? What differences are there between Windows, Linux and MacOS? What is a Linux distribution? What is a kernel? What is a file system? How does the operating system handle processes and memory?

We could say that an operating system is software too, but it works at a slightly lower scale, with *low-level languages*, they interact much more directly with hardware and have much more efficient resource management.

## Wait... Low-level languages? What's that?

Here programming language words start to peek out, and yes, it's time to talk a bit about that.

### Low-level languages

Low-level languages are those that are closer to machine language, that is, to the binary code that hardware understands. These languages allow more direct control over system resources, but are harder to learn and use. Some examples of low-level languages are *assembly* and the *C language*.

These languages are ideal for tasks that require **high performance and efficiency**, such as operating system development, device drivers, and applications that need direct hardware access in general.

*Anecdotally*, until recently, universities here in Chile dedicated quite a bit of time to teaching low-level languages, mainly C and assembly, so that students would understand how the machine works at a deeper level. Today, many universities have opted to focus more on high-level languages, but I think it's still important to have a solid foundation in low-level languages to better understand how everything works.

I'm not saying you should start using C or assembly, it might be a bit of a waste of time if your goal is to speed up your learning, but I recommend that at some point in your learning path, you dedicate time to getting to know them, they're very interesting and will give you a solid brush stroke of how fast they can be.

### High-level languages

High-level languages are those that are closer to human language, that is, they are easier to read and write. These languages abstract many hardware and operating system details, allowing developers to focus on their application logic instead of worrying about technical details. Some examples of high-level languages are Python, JavaScript, Java, Ruby, among others.

I won't go deep here, because well, there are already other people who dedicate time to roadmaps that are focused on pointing out high-level technologies. My mission is a few steps back.

## Data, Information and Structures

What is **data**? What is **information**?

These questions can even be *philosophical*, but we won't go off on tangents, in computer science data is a concrete representation of a value, it can be a number, a letter, a word, an image, etc.

Data as such doesn't make much sense by itself. I can simply have the data "19/04/1992", but what does that data mean? Why is it important? What information does that data give me?

Information is the context we give to data so it makes sense. In this case, if I tell you that "19/04/1992" is my birth date, now that data has meaning and importance for me.

All the software that exists is the constant sending and receiving of data and information, processing them, transforming them and presenting them in a way that makes sense to the person using it.

We send our email and password (data) to log into an application, the application processes that data and gives us access to our account (information).

Where are structures in all this?

Imagine if we put all your information in a bag, all disorganized, and threw it in a trunk, with the information of thousands of other people. How could we find our information quickly? **It would be chaos**.

In the early days of computer science, people realized they needed to find a way to organize data, so it would be easy to find and manipulate. That's how **data structures** were born.

Data structures are specific ways of organizing and storing information. Data? Information? Yes, and that's correct, since when we talk about data structures, it's a way of grouping elements to give them meaning, when something makes sense, it's easy to access since it's easy to associate.

You're not going to put all your documents in the same folder, right? You're not going to mix photos with music, with videos, with text documents? No, because it would be chaos.

And here comes what magically appears in programming courses. Arrays, Lists, Objects... **Aha!**, but the concept comes from here. Arrays, objects, lists. They don't come from nothing, high-level languages don't have these structures from nothing, they are abstractions created to facilitate software construction.

## Search, selection and sorting

Now that you know what data, information and data structures are, it's time to talk about how to manipulate them.

When you have a large amount of data, you need efficient ways to search, select and sort that data. This is where search, selection and sorting algorithms come in.

We're already **mixing concepts**!

We already talked about algorithms, let's remember, sequential steps to solve a problem. Now, we apply those steps to data manipulation.

For example, if you have a list of names and want to find a specific name, you can use a search algorithm to go through the list and find the name you're looking for.

If you want to sort a list of numbers from smallest to largest, you can use a sorting algorithm to reorganize the numbers in the correct order.

If you have a list of products and want to select only those that have a price below a certain value, you can use a selection algorithm to filter the list and get only the products that meet that criterion.

Sounds simple? *Emmm yes*, but the complexity lies in **efficiency**. Not all algorithms are the same, some are faster and more efficient than others. Learning about different algorithms and their complexities will help you write more efficient and optimized code.

Have you been told that technical interviews will ask you questions about algorithms and data structures? If the answer is no... Why doesn't this topic appear in a roadmap?

Because roadmaps are poorly focused! Haha.

I'll write a specific article about algorithms and data structures in the future, but for now, I just want you to understand the importance of these basic concepts. If you're reading this and want to learn, your mission will be to look for more information about search algorithms (linear search, binary search), sorting algorithms (bubble, selection, insertion, quicksort, mergesort) and data structures (arrays, linked lists, stacks, queues, trees, graphs).

Do you need a specific language to learn this? No, you don't even need to program it, you can do it on paper, pencil and a calculator if you want. The important thing is to understand the concepts.

## Data storage

I have data, I have structures, I can traverse them, sort them, select them, but... **Where do I save them?**

Data storage is a fundamental concept in computer science. We need ways to save our data persistently so they don't get lost when we turn off the computer.

Although we don't always want to have everything saved forever... Remember when we talked about hardware? Well, if you do your homework after this reading, you'll know there are volatile and non-volatile memories. Volatile memories are those that lose their content when the equipment is turned off, like RAM. Non-volatile memories are those that maintain their content even when the equipment is off, like hard drives and SSD units.

There are different ways to store data, from simple files in the file system to complex databases that allow advanced queries and relationships between data.

When you make a text document and save it on your computer, you're using the file system to store that data persistently.

When you use a web application that saves your data in the cloud, it's probably using a database to store that information in a structured and efficient way.

Do you know how an operating system *handles* files? How is it that having millions of files on a hard drive, you can find a specific one in seconds? How is that data organized on the disk? What is a file system? What types of file systems exist?

These questions are open, but I invite you to investigate them, understanding how data storage works will help you write more efficient and optimized software.

## I save my data and... how do I share them?

Did you think I forgot about this? **Not at all!** We've been working on a single machine, but the real world is much more complex. Today, most applications we use are connected to the internet, and need to share data between different devices and users.

**Internet!** Did you find out what it is? How was it born? If you listened to me in the previous article, I'm sure you took some time to investigate a bit about the history of the internet.

And the internet opens doors to... **networks!** Computer networks, data networks, information networks.

Networks for me were always something... *meh*, very boring, but it's necessary to understand them a bit to comprehend how data exchange works in the modern world.

When you send a message to a friend, when you upload a photo to a social network, when you make an online purchase, you're using networks to share data between different devices and users.

What is a data packet? What is an IP address? What is a communication protocol? What are HTTP, HTTPS, FTP, TCP/IP? How do servers and clients work? What is an API?

Make your way to investigate these concepts, understanding how networks work will help you write software that can communicate efficiently and securely with other devices and users.

## Since we mentioned security...

Can you imagine if I had all your personal information exposed on the internet? Your photos, your messages, your banking data? It would be chaos, right?

**Computer security** is a crucial topic in the programming world. How to start programming without understanding that everything you do can be vulnerable to attacks and information theft?

Since you reviewed algorithms, you could take a theoretical look at the concepts of cryptography, hashing, authentication. *CAREFUL*, I'm not telling you to learn to implement these concepts, just to understand the theory behind them.

## The Alexandria of code - Don't let your work burn!

Before programming, let's talk about version control. What is that? Why is it important?

Version control is a fundamental practice in software development. It allows us to manage and track changes in code over time.

Can you imagine a scenario where you wrote 1000 lines of code, and at the end you realize you made an error in line 10? How do you go back without losing all the work you did after?

Version control allows us to do precisely that. We can save different versions of our code, and if we make an error, we can go back to a previous version without losing all our work.

Here **git** comes into play, the most popular version control system today. Learning to use git is fundamental for any programmer, as it's a tool that will allow you to work collaboratively with other developers, manage your projects efficiently and maintain a clear history of changes in your code.

You don't need to program to learn git, you can start learning the basic concepts, like repositories, commits, branches, merges, pull requests, among others.

You can use git for your own files, even if you're not programming, it's a very useful tool for any type of project that involves changes and versions.

## Ok fine, AI...

Yes, many want to put AI everywhere, and it's fine in a way, because if you're entering this world, you can't stay behind. But AI is **not magic**, and it's not the solution to all problems.

Before learning to understand an artificial intelligence (Which is much more than asking it please to write code for you), you should use these tools to your advantage. I for example right now use AI to correct some spelling and grammatical errors of all the *nonsense* I write, but I don't ask it to write the article for me, because then it wouldn't make sense.

AI is a tool that should be used for pedagogical purposes, at least, in your initial learning stage. Don't ask AI to solve your algorithms, ask it to teach you step by step, ask it to give you a detailed example and then ask it to give you some exercises to practice.

After doing them, ask it to review your solutions and explain what you got wrong and what you did right.

**Use AI as a teacher!** Believe me it explains much better than many professors I've had at university, even those who claim to be *doctors*.

## Summary

Well, we've covered many things, now it's up to you to investigate and learn about each of these points. Understanding machines from the most elementary level will make it much easier for you to learn any programming language and any technology you want to master in the future.

Shall we do a quick summary?

1. **Hardware and Software:** Understand the difference between hardware and software, and how they interact with each other.
2. **Programming Languages:** Familiarize yourself with the concepts of low and high level languages.
3. **Data and Information:** Learn what data and information are, and how they relate.
4. **Data Structures:** Investigate different data structures and their importance.
5. **Search, Selection and Sorting Algorithms:** Learn about different algorithms and their efficiency.
6. **Data Storage:** Understand how data is stored persistently.
7. **Networks:** Familiarize yourself with basic network concepts and how devices communicate.
8. **Computer Security:** Learn basic security concepts in software development.
9. **Version Control:** Learn to use git to manage and track changes in your code.
10. **Artificial Intelligence:** Use AI as a pedagogical tool to improve your learning.

**Patience!** You don't have to read this in one day either, take your time to investigate and understand each of these points. Programming is a long road, but with a **solid foundation**, you'll be much more prepared to face any challenge that comes your way in the future.

I don't think I'm right about everything but... In my experience, with these **fundamentals**, you can now take the trendy language or technology and now yes, start your roadmap.

Don't forget to always have a critical opinion and vision. Science questions everything, and programming is **no exception**.

See you in the next one!