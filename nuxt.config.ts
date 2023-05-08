// https://nuxt.com/docs/api/configuration/nuxt-config

const serverHost = "http://localhost:5000";
const clientHost = "http://localhost:3000";
const loginPagePath = "/login";

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

   http: {
      baseURL: serverHost + "/api",
      browserBaseURL: serverHost + "/api",
      https: false,
   },

   app: {
      head: {
         title: "Nuxt Web App",
         charset: "utf-8",
         viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      },
   },

   css: ["~/assets/scss/app.scss"],

   vite: {
      css: {
         preprocessorOptions: {
            scss: {
               additionalData:
                  '@use "~/assets/scss/_var.scss" as *;',
            },
         },
      },
   }
});
