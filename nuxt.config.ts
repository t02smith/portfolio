// https://nuxt.com/docs/api/configuration/nuxt-config

const dev = process.env.NODE_ENV === "development";
const externalContentSources = {
  blog: {
    prefix: "/blog",
    driver: "github",
    repo: "t02smith/portfolio-blog",
    branch: "master",
    dir: "",
  },
};

export default defineNuxtConfig({
  modules: ["@vueuse/motion/nuxt", "@nuxt/content", "nuxt-icon"],
  css: ["~/assets/style/app.scss"],
  content: {
    highlight: {
      theme: "github-dark",
      preload: ["ts"],
    },
    sources: dev ? {} : externalContentSources,
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  devtools: {
    enabled: false,
  },
});
