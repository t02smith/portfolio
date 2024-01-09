---
title: How to Create a Homelab Like Mine
description: Some step-by-step instructions on how you can get your homelab setup using a Raspberry Pi.
draft: true
recommended: true
authors: [{ name: "Tom Smith", link: "/", role: "Home(lab) Wrecker" }]
badges: ["raspberryPi"]
---

Every now and then I remember that I have a Raspberry Pi 4 sitting around collecting dust when it should be doing something important (or at least useful). A homelab is the perfect use-case for it as it can fill many roles, such as:

- hosting and streaming my content to me anywhere over the internet,
- providing a custom DNS that blocks all of those pesky advertisements, and
- giving easy access to my VPN.

This post will tell you how to setup your homelab just like mine.

## 💡 What you need

You will need the following:

- a Raspberry Pi (I use the 4 but any will do),
- an SD card,
- a hard drive for your data, and
- a computer handy to SSH into the Pi

## 🪜 Starting the Pi

First you need to write an image to your SD card. I recommend the [Raspberry Pi Imager](https://www.raspberrypi.com/software/) tool as it makes this step super easy. You'll want to be using the **64 bit** version of **Raspberry Pi OS Lite** (or the 32 bit version if you aren't using a Pi 4).

![pi imager settings](/img/projects/homelab/pi-imager-settings.png)

You will also need to go to the **⚙️ Settings** menu and update the following:

- set your hostname to something memorable (e.g. homelab),
- set your username and password for accessing your Pi,
- set your Wi-Fi details (not necessary if you're using ethernet)

Hit write and wait for it to finish. Put the SD card into your Pi and power it on.

## ☁️ Accessing your Pi

Once your Pi has been powered on crack open the terminal on your computer and run the following:

```bash{}[Your terminal]
ssh tom@homelab

# or to match
ssh {username}@{hostname}
```

Enter your password and boom you're in. Next run a quick update on your Pi:

```bash{}[Raspberry Pi SSH]
sudo apt-get update && sudo apt-get upgrade -y
```

## 🗃️ OpenMediaVault

[OpenMediaVault](https://www.openmediavault.org/) is an excellent free piece of NAS software that I like to use. It will allow us to easily manage and access our content and runs very well on the Pi.

To install run the following command:

```bash{}[Raspberryy Pi SSH]
wget -O - https://raw.githubusercontent.com/OpenMediaVault-Plugin-Developers/installScript/master/install | sudo bash
```

Then reboot your Pi

```bash{}[Raspberry Pi SSH]
sudo reboot
```
