---
templateKey: "blog-post"
title: "SJSU Arcade Launcher"
image: ""
date: 2014-10-04T04:20:00.102Z
weight: 50
printable: false
visible: true
description: >-
    An attempt at building an in-house arcade launcher
tags:
  - SJSU
  - games
  - development
  - volunteer
  - game development
---
#### During my sophomore year at San Jose State University, I had the opportunity to build an [in-house arcade launcher](https://github.com/daredoes/ArcadeLauncher) for the SJSU Game Development Club that would compete against other in-house launchers.

For this project I partnered up with my friend and mentor, __Arthur Baney__, using [Game Maker Studio's](https://www.yoyogames.com/gamemaker) scripts powered through the Game Maker Language, or GML. Arthur was a junior at SJSU, a member of the Game Development Club, and a talented developer - especially when it came to using GML.

For Arthur's part, he built an incredibly front-end for the launcher that used a 3D wheel of game screenshots to showcase all of the available games at once, while clearly displaying a selected title. We tested it with over 300 "games". The coolest part about his work was the 3D component, as Game Maker Studio is a 2D-focused engine!

For my part, I built the backend of our launcher. This meant how it found files, how it provided the data about those files to the launcher, and how it launched files. This was no easy feat in Game Maker Studio, because honestly Game Maker Studio was not designed for this.

Game Maker Studio runs in a sandboxed environment. This means that the memory is sectioned off in a nice little container, and the games it runs cannot go mucking about in the player's filesystem. That's great! Woohoo for computer safety! This also means that using commands to try and locate a directory of EXE's installed on the computer is a big __NO__.

### But why should that stop us?

To overcome the sandbox, I discovered that the EXE Game Maker Studio published was more like a folder, containing the real EXE and some data folders. If I extracted the contents of the EXE produced by GM:S, then my application gained the ability to muck about in the computer's filesystem! Victory for me, and a defeat for computer safety. 

With this discovery, I was able to write the backend of the launcher, and recursively search folders on the computer for EXEs with a matching configuration file.

Our launcher was fully functional, and pretty to boot! 

### We did not win. The winner was a beautiful HTML5/Node.JS launcher that tracked play times and more.