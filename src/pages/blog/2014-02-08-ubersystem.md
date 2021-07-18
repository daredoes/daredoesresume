---
templateKey: "blog-post"
title: MAGFest Registration and Account Management System
image: /images/uploads/trust-squarewave.png
date: 2014-02-08T04:38:53.000Z
weight: 50
printable: true
visible: true
tags:
  - magfest
  - web development
  - python
  - events
  - volunteer
  - development
---

### MAGFest's [Registration and Account Management System](https://github.com/magfest/ubersystem), better known as

## Ubersystem, or Uber for short!

The first time I volunteered for MAGFest, I ran registration at small event in California. Before the event opened, I had been told that the guy setting it up, Dominic Cerquetti, had broken something. I had never used MAGFest's registration system before, but I was told we would be running registration manually.

After that weekend, I started getting more heavily involved with Python, as a programming language, and subsequently MAGFest and it's registration system. I learned about the MAGFest stack, which was my first encounter with a VirtualBox container, SupervisorDaemon, task-threading, SQLAlchemy, and WSGI web-apps. The MAGFest stack was centered around [CherryPy, the minimalist web framework](https://cherrypy.org/), as the lead volunteer developer has written a dissertation on the CherryPy api for his master's degree, and used a mix of Jinja2, jQuery, and sometimes Angular on the front-end.

The first project I implemented for MAGFest was a map featuring all of our attendees organized by zip code. My methods were naive, and my knowledge limited our map to just the attendees registered from the United States. Some notable drawbacks about my implementation, all of the calculations are done on the main thread of the server, with a read of the entire attendee table. At certain scales, this can halt the website for all users. Additionally, the calculations are then held in RAM. An update to the system, a reboot, many things, can cause the system to need a recalculation.

##### I've since learned much more effective ways to tally up such data.

The second project I implemented for MAGFest was a promotional code system. In addition to my work as an engineer, I was an event coordinator for MAGFest. As MAGFest, we believed that badges are somewhat like candy. We can afford to give a handful away. Still, when I attempted this I would be required to collect someone's email, send them a badge, and wait for them to accept it. This was not the smooth delivery of a free badge I desired. Given this problem, I designed a promotional code system for MAGFest that would allow authorized users to create flexible promotional codes. Promotional codes were designed for many situations.

A promotional code may have unlimited uses, or a number of remaining uses. A promotional code may be uniquely entered, auto-generated, or built from a user-supplied list of unique words. A promotional code may take a flat amount off the cost of a badge, may set the cost of badge to a flat amount, or may reduce the cost of a badge by a percentage. This was a versatile system that I could use for many situations. To aid my own distribution efforts, once this project was complete I wrote a small script that turned the exported codes into a sliceable PDF.

##### There is more than just Ubersystem.

In addition to MAGFest's Ubersystem, I was also a lead developer on a [previous iteration](https://github.com/magfest/webhooktheme) of [MAGFest's Website](https://magfest.org). This iteration of MAGFest's web development used a stack built and hosted by [WebHook](http://www.webhook.com/). This meant we had a static-site, with a CMS, webpack, and access to Javascript/jQuery.

For this site I handled many miscellaneous tasks. I converted all of the CSS into SASS, with variables to allow for easier color themeing. I wrote a script to use WebHook's CMS API to upload a copy of MAGFest's game database. I added pages featuring the dogs and cats of MAGFest staff. I wrote a script to scrape the website for show information that would be uploaded to our event [Guidebook](https://guidebook.com/).

##### MAGFest's website was my first major experience being a web developer.

#### MAGFest was my first major experience [being a developer](https://github.com/magfest/ubersystem/pulls?q=is%3Apr+author%3Adaredoes+is%3Aclosed).
