// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/motion/nuxt", "@nuxt/content", "nuxt-icon", "@pinia/nuxt"],
  css: ["~/assets/style/app.scss"],
  content: {
    highlight: {
      theme: "github-dark",
      preload: ["ts"],
    },
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  devtools: {
    enabled: process.env.NODE_ENV === "development",
  },
});
