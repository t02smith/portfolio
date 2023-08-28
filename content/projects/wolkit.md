---
title: Wake-on-LAN Kit
shortTitle: WoL-Kit
overview: Waking devices using wake-on-lan using various network and environmental detection methods.
logo: /icons/projects/wolkit.png
authors: [{ name: "Tom Smith", link: "/", role: "Developer" }]
link: https://github.com/t02smith/wolkit
tools: ["python", "fastapi", "raspberryPi"]
---

Wake-on-LAN Kit leverages (you guessed it) [Wake-on-LAN](https://en.wikipedia.org/wiki/Wake-on-LAN) to trigger devices in your local network to wake up when certain conditions are met. This project can wake your device:

- at scheduled times in the day/week
- when a certain device enters your LAN
- when a bluetooth device is nearby
- when certain environmental factors occur (e.g. temperature, motion, and light)

Users interact with this application using a HTTP API, which includes complete Swagger Documentation (because I was too lazy to create a web interface for this 😝).

This was tested and ran on a 🍒 Raspberry Pi 4 (4GB RAM) and also used the [Enviro Hat](https://shop.pimoroni.com/products/enviro?variant=31155658489939) for environment sensing.
