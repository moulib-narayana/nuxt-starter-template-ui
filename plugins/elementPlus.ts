import ElementPlus from "element-plus";

export default defineNuxtPlugin((nuxtApp) => {
   nuxtApp.vueApp.use(ElementPlus);
});

//TODO: Uncomment the below part, if you want to import element plus components only when needed.
// The above piece of code imports all the element plus components globally.
// import { ID_INJECTION_KEY } from "element-plus";

// export default defineNuxtPlugin((nuxtApp) => {
//    nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
//       prefix: Math.floor(Math.random() * 10000),
//       current: 1,
//    });
// });
