---
title: How to Host Your Website On Azure
description: How you can deploy any website to Azure Web Apps using Github Actions for continuous deployment
draft: true
recommended: true
badges: ["azure", "html", "javascript", "css", "beginner"]
authors: [{ name: "Tom Smith", role: "The Cloudman", link: "/" }]
---

Being able to design and create a website is all good and dandy but completely worthless if you don't know how to host it on the internet. This post will go over:

- [creating a basic Node.js website](#building-our-website),
- [deploying it as an Azure Web App](#-deploying-as-an-azure-web-app), and
- [adding a custom domain](#adding-a-custom-domain-name).

## 🔨 Building our website

Our website is going to be a simple page that uses a single `express` endpoint to fetch the current time.

### Setting up a Node project

First we need to create a new node project:

```bash{}[In your terminal]
mkdir my-azure-website
cd my-azure-website
npm init -y
```

Then open the folder in the directory of your choice.

### Our express application

1. Install express.js

```bash{}[In your terminal]
npm i express
```

2. Create an index.js file and add our basic GET endpoint.

> Don't worry if you don't fully understand how Express works this guide is just about deploying

```javascript{}[index.js]

```

## ☁️ Deploying as an Azure Web App

## 🪪 Adding a custom domain name

If you don't own a domain for yourself, you'll probably want to buy one. I recommend you use [namecheap](https://www.namecheap.com/) for this; it's what I use and it works flawlessly for me.

> 💡 You'll most likely want to pay for SSL as well to allow your users to access your website securely over HTTPS

![namecheap search](/img/blog/hosting/namecheap.png)

For this post I'll be using the domain `sahi.gay` and will host this site using the subdomain `sachi.sahi.gay`.
