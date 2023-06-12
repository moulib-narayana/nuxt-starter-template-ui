// https://nuxt.com/docs/api/configuration/nuxt-config

const serverHost = "http://localhost:5000";

export default defineNuxtConfig({
   typescript: {
      shim: false,
   },

   ssr: true,

   devServer: {
      host: "0.0.0.0",
   },

   // Overidden by .env file
   runtimeConfig: {
      public: {
         apiBaseUrl: serverHost + "/api",
      },
   },

   app: {
      head: {
         title: "Nuxt Web App",
         charset: "utf-8",
         viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      },
   },

   //TODO: Remove element plus part if you are not using it.
   css: ["~/assets/scss/element/index.scss", "~/assets/scss/app.scss"],

   modules: [],

   vite: {
      css: {
         preprocessorOptions: {
            scss: {
               //TODO: Remove element plus part if you are not using it.
               additionalData:
                  '@use "~/assets/scss/element/_var.scss" as element; @use "~/assets/scss/_var.scss" as *;',
            },
         },
      },
   },
});
