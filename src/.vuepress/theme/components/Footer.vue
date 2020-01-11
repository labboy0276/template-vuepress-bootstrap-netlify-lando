<template>
  <footer class="clearfix py-4">
      <p>Footer</p>
  </footer>
</template>

<script>
  export default {
    computed: {
      data () {
        return this.$page.frontmatter
      }
    }
  }
</script>

<style lang="stylus">

</style>
