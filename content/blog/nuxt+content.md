---
title: Why You Should Use Nuxt Content
description: How using Nuxt Content can allow you to easily add and edit the content shown on your page using Markdown.
draft: false
recommended: true
---

Let's start with some very simple questions. Do you:

- want to write your content in a user-friendly language like Markdown?
- want to have that content rendered on your website by dropping a file into a folder?
- want to allow your users to easily search through your content?

Chances are you answered yes to at least one of those questions. [Nuxt Content](https://content.nuxtjs.org/) is a library that will take any `.md`, `.yml`, `.json`, and `.csv` files kept inside the `content/` folder of your Nuxt application and render them as HTML at your desired route.

> 💡 This website uses Nuxt Content to power this page and the [projects](/projects) page

## 🚦 Where to Start

It is always best to check out the developer's [Get Started](https://content.nuxtjs.org/get-started) page for the most up-to-date instructions on how to get started.

Regardless, to add Nuxt Content to your site you:

1. Install the dependency

```bash{}[Run in your terminal]
# for yarn users
yarn add --dev @nuxt/content

# for npm users
npm i -D @nuxt/content
```

2. Update your `nuxt.config.ts` file

```typescript{}[@/nuxt.config.ts]
export default defineNuxtConfig({
    modules: [
      '@nuxt/content'
    ],
    content: {
      // https://content.nuxtjs.org/api/configuration
    }
})
```

3. Create a slug file to render your content

```vue{}[@/pages/{...slug}.vue]
<template>
  <ContentDoc />
</template>
```

4. Add some content then find it

To give you an example create the following file:

```markdown{}[@/content/hello+world.md]
# Hello world

I can follow instructions!!
```

Then run your application with `yarn dev` or `npm run dev` and head to [http://localhost:3000/hello+world] and you should see:

[SCREENSHOT TODO]

## 🔎 Searching Content

One of the most powerful things Nuxt Content lets us do is to search our content using nothing but metadata that we write into our files, whilst also abstracting over any nasty HTTP requests you would oridnarily need to use.

### 💿 Adding Metadata

You can add whatever metadata you want to your files but some important fields are:

- **title** The title of the page that is injected into the page metadata.
- **description** A quick memo about what this content actually is.
- **draft** Whether or not this content is ready to show the world. If it isn't then the content won't be hosted.

In our markdown file from before it will look like:

```markdown{}[@/content/hello+world.md]
---
title: Hello World (the blog)
description: This is my first piece of content deployed on my website
---
# Hello world

I can follow instructions!!
```

## ✈️ Writing Queries

```typescript{}[@/pages/blog/index.vue]
const posts = await queryContent("/blog")
    .where({
      recommended: { $eq: true },
    })
    .only(["_path", "title", "description", "recommended"])
    .limit(4)
    .find();
```
