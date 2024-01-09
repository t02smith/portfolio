// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/motion/nuxt", "@nuxt/content", "nuxt-icon"],
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
    enabled: false,
  },
});
