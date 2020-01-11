<template>
  <section class="hero-component">
    <div
        class="hero"
        v-if="data.home"
    >
      <HomeHero />
    </div>
    <div
        class="hero"
        v-else
    >
      <InteriorHero />
    </div>
  </section>
</template>

<script>
  import HomeHero from './HomeHero.vue';
  import InteriorHero from './InteriorHero.vue';

  export default {
    components: {HomeHero, InteriorHero},
    computed: {
      data() {
        return this.$page.frontmatter
      },
    }
  }
</script>

<style lang="stylus">

</style>
