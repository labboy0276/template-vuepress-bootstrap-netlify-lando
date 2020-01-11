<template>
  <div class="clearfix wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12 py-4">
          <Content />
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    computed: {
      // You can use these to manipulate different components later.
      data () {
        return this.$page.frontmatter
      },
      path () {
        return this.$page.path.replace(/\//g, '').toLowerCase();
      }
    }
  }
</script>

<style lang="stylus">
  .wrapper
    @media (min-width: $container + 1)
      min-height 50vh

</style>
