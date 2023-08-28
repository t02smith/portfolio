---
title: RobPress and RobBank
overview: How can websites be attacked and how can we defend against it
logo: /icons/projects/rob.png
authors:
  [
    { name: "Tom Smith", role: "Cyber Specialist", link: "/" },
    {
      name: "Tom Cutts",
      role: "Cyber Specialist",
      link: "https://github.com/Spratt93",
    },
  ]
tools: ["php", "burpSuite"]
---

These two projects were part of the **Web and Cloud Security** module at the **University of Southampton** and involved attacking and defending against a website by considering a wide variety of vulnerabilities.

## Rob the Bank

In Rob the Bank, my goal was to attack the website by exploiting numerous vulnerabilities found within it. These include:

- SQL Injection
- Cross-Site Scripting (XSS)
- Application logic abuse
- Information exposure
- CSRF
- Parameter manipulation
- ...

The tools I most frequently used was [🟧 BurpSuite](https://portswigger.net/burp) as it allowed me to methodically test for vulnerabilities in the website and keep a record of everything I had done. Automated tools helped me to try various inputs in quick succession.

## RobPress

In RobPress, [Tom Cutts](https://github.com/Spratt93) and myself were tasked with patching vulnerabilities in a blogging website written in PHP with the FatFree framework. This involved two phases:

- **Discovery** where we repeated the steps and tools used in Rob the Bank to find vulnerabilities within the website and keep track of how to trigger them.
- **Patching** where we fixed these vulnerabilities by applying best practices such as using prepared SQL statements, rendering dynamic content sensibly, using session cookies for forms, securing file uploads, and more.
