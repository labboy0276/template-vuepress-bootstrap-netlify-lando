<template>
  <main class="interior">
    <Hero/>
    <TopContent/>
  </main>
</template>

<script>
  import Hero from './Hero.vue'
  import TopContent from './TopContent.vue'

  export default {
    components: {Hero, TopContent},
    computed: {
      data () {
        return this.$page.frontmatter
      }
    }
  }
</script>

<style lang="scss">

</style>
