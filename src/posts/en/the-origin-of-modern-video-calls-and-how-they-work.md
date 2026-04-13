---
title: 'The Origin of Modern Video Calls and How They Work'
author: 'Mauricio Del Río'
category: 'Programming'
date: '2025-12-12'
bannerImage: '/blog_images/cafetera.png'
slug: 'the-origin-of-modern-video-calls-and-how-they-work'
spanishSlug: 'el-origen-de-las-videollamadas-modernas-y-su-funcionamiento'
overview: 'Good ideas come from laziness. In this article, I tell you interesting anecdotes that have transformed the way we communicate today. In addition, you will see basic technical concepts about how video calls work.'
published: true
readingTime: '5 minutes'
tags:
  - History
  - Curiosities
  - Concepts
  - Learning
---

## Curiosity didn't kill the cat, it made it famous on Tik Tok!

I have several ideas in mind to write new articles, but I feel they are a bit dense, today I want to do something a little more fun. I asked my partner about something she is really curious to know about the modern technological world, and she told me: "How do video calls work? How can we see an image in real time over the internet?".

Well, the truth is it's quite an interesting question, obviously I don't know, so I started researching the modern way: Gemini 3 + information verification on the internet.

I like to start from a historical perspective, understanding the past makes us understand the present better. That's how I found several interesting stories that I will be sharing with you.

This article is dedicated to my partner, if you don't like it _I don't care much haha_.

## The Cambridge Coffee Pot: Those who make things are usually lazy

Some researchers at the University of Cambridge were bored of going to the basement to see if their coffee pot had coffee or not, they had to go down 3 floors. I understand, luckily where I work there is always coffee, but when you spend hours stuck in something, it's lazy to get up every so often.

Well, these researchers decided to install a camera pointing at the coffee pot, every certain amount of seconds it took a very small and pixelated photo that sent the image to a computer with a program they created for it. A short time later something interesting was seen: What happens when you send many images per second through a network in sequence? Well, in essence, that is a video.

For a couple of years this stayed at the university, as a curiosity of the same research department, but in 1993, a colleague modified the program so that those images would be public on the internet (which was something very very recent).

Somehow this was one of the first "virals", people from several countries connected to see how the status of a coffee pot was updated every few seconds. Thus, the **first webcam in history** was born.

As a final curiosity, the guys did well in their lives, they worked in large companies, even one of them was a founder of the company VNC, which was a pioneer in the development of remote desktop software, something that is very common today.

The coffee pot was auctioned on eBay for about 5000 USD at the time, a German magazine bought it, repaired it and put it to work a little more.

## Let's go to the discovered concept: data packets

Video calls are a bit _tricky_. You actually see a series of images that update very very fast. For you it is imperceptible, but the camera is only taking photos. This is called **frames**.

Have you heard the concept of _frames per second_? Well, 30 fps is basically 30 photos per second. This not only applies to cameras, everything that is processed at a graphic level on screens, video games, movies, etc. Works like this.

Of course, when your eyes see 30 photos per second, you think it is something that is in motion, but the reality is that it is a kind of optical illusion.

Long before this story, in computer science the concept **divide and conquer** was already spoken of. The idea is born that if you have something very big, it is best to divide it into smaller portions to be able to approach it better. This is what was done with digital cameras, instead of sending many images together (which would be very slow), the images were divided into small **data packets** that are sent over the network.

If you try to send a complete video, you can be hours downloading them (days or weeks at that time). But if you send bits of it, very small, they are sent instantly to the other side, the person who wants to see the image is seeing it very close to real time, and the image is being replaced by the next image in a matter of milliseconds.

## And how are these packets sent?

This is also interesting, I want you to think of this as a chain of many pipes, cables, or conduits that go from point A to point B. At point A you have a camera that is taking photos, divides them into small data packets and sends them through these pipes. Here the concept of **divide and conquer** applies again, if you have many pipes, you can send many packets at the same time, and so the person on the other side receives the information much faster.

Obviously these images go with a kind of "label" that tells the receiving computer how to assemble the image again. If it didn't have this label, the images would arrive in any order and could not be reconstructed.

## And what happens if a packet is lost?

This is also fun, thanks to dividing the video into very very tiny packets, if there is loss of information, before your eyes it is barely perceptible, that's why if your connection is bad, the image looks blurry or with "squares", but you can still understand what is happening. That is the grace of _streaming_.

Currently there are many techniques to optimize real-time video transmission, such as data compression, **buffering**, etc. But the basic idea remains the same: divide the video into small data packets and send them over a network.

## And what about the audio?

Let's start from the premise that sound is a wave that propagates in the air. To be able to send sound in the way we did with images, it is like cutting a continuous wave into bits. This has been done before and well, if you don't cut the waves well, the sound is distorted.

A computer by itself does not understand a wave, on the other hand, a microphone can capture vibrations, so a way had to be found to convert those vibrations into data that a computer can understand.

This is done through a process called **sampling**. Basically, the microphone takes "samples" of the sound wave at regular intervals and converts them into numbers representing the amplitude of the wave at that moment. These numbers can be sent as data packets, just like images.

I won't go into the technical, but if you saw a graph of a wave somewhere, it is basically a curve that goes up and down, leaving mounds and valleys. Each mound or valley can be represented by a number, and those numbers are what are sent as data.

## The complex part here: synchronizing ears and eyes

Your eyes, if they lose information, tolerate it and your brain is able to "fill" those spaces, but your ears work differently. The ear is very sensitive and does not "reconstruct" lost audio in the same way that the brain does with images.

In video calls, audio and video are being sent by different signals (microphone and camera are separate). Here the fun part is engineering. We already know that audio is a numerical sequence representing a wave. Well, for a machine, interpreting numbers is easy, numbers are light. On the other hand, video is very heavy, a single image contains a lot of information or bits, which is why the weight of the image is much greater than that of the audio.

This is where the balance comes in, the machine processing the video call must prioritize bandwidth to audio. It may sound a bit contradictory but it makes sense, if your ear is much more sensitive than your eyes, the audio should sound as best as possible, even if the image looks a little bad.

But there must be a balance, if the audio arrives much earlier than the image, it makes you a little dizzy, much worse is when the other person is almost not understood, that usually ends the video call.

## The concept of buffering

We already talked about sending packets through many pipes at once. These can arrive disordered, disordered images are "a little" tolerable, but disordered audio is impossible to interpret.

To solve this, the concept of **buffering** is used. Basically, the receiver (your computer or cell phone) has a small "intermediate memory" where it saves the packets that are arriving. This memory allows ordering the packets before playing them. If a packet is lost, the system can "fill" that space with silence or with the last known sample, minimizing distortion.

That's why video calls are not 100% in real time, that second or 2 seconds of difference (with a decent connection) is the **buffer** working to order the information that arrives.

## Final message

This article is short and anecdotal, I hope you liked it, I have some other ideas in mind, but I have been very busy lately. I am attentive to your comments, criticisms and suggestions.

Don't watch too much Tik Tok, vote informed this Sunday, and see you in the next article.
