// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({


    modules: [
    "@nuxt/content",
    ],
    css: [

        "~/assets/styles/common.css",
        "~/assets/styles/layout.css",
        "~/assets/styles/index.css",
        "~/assets/styles/blog.css",
        "~/assets/styles/contact.css",
        "~/assets/styles/singleblog.css",
    ],
    buildModules: ["nuxt-microcms-module"],
    microcms: {
      options: {
        serviceDomain: "dw8xjxligy",
        apiKey: "ta6gezkRHgHxZ2DlXv6ytIssd3MIsxUpNy9s",
      },
      mode: process.env.NODE_ENV === "production" ? "server" : "all",
    },
  })

  
