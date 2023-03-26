// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/styles.css"],
  app:{
    head:{
      meta:[
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
        {name: 'description', content: 'Resume App / CV by Nuxt'},
        {name: 'author', content: 'zana mira'}
      ],
    }
  }
})
