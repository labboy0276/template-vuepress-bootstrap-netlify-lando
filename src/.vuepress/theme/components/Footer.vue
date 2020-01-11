<template>
  <footer class="clearfix py-4">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <p class="m-0 p-0">Copyright © Your Site</p>
        </div>
      </div>
    </div>
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
  footer
    background-color $black
    text-align center
    p
      color white
</style>
