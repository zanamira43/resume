<template>
  <div>
     <slot />
  </div>
</template>

<script setup>
useHead({
  title: "Aso Resume",
  link: [
    {
      rel:"icon", 
      type:"image/x-icon", 
      href:"assets/img/favicon.ico"
    },
    // google font awesome
    { 
      href:"https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700", 
      rel:"stylesheet", 
      type:"text/css" 
    },
    {
      href:"https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i", 
      rel:"stylesheet", 
      type:"text/css"
    },
    // local css file
    // { 
    //   href:"./assets/css/styles.css", 
    //   rel:"stylesheet"
    // }
  ],
  script: [
    {src: "https://use.fontawesome.com/releases/v6.1.0/js/all.js", crossorigin: "anonymous"},
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    },
    {
      src: "assets/js/scripts.js"
    }
  ]
})
</script>

<style lang="scss" scoped>

</style>