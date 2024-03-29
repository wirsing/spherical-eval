// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-mapbox",
    "@pinia/nuxt",
    "@nuxt/ui",
  ],
  mapbox: {
    accessToken: process.env.MAPBOX_TOKEN,
  },
  css: [
    "~/assets/style/main.scss",
  ],
});
