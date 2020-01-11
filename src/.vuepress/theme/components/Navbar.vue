<template>
  <section class="navbar-component">
    <b-navbar toggleable="lg" class="navbar-dark">
      <b-navbar-brand to="/">Your Site Name</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="item.link" v-for="item in nav" v-bind:key="item.text">{{ item.text }}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

    </b-navbar>
  </section>
</template>

<script>
export default {
  computed: {
    nav () {
      return this.$site.themeConfig.nav
    }
  }
}
</script>
<style lang="stylus">
  nav
    background-color: $black
    a, .nav-link
      color white !important
    .navbar-collapse
      @media (max-width: $container)
        padding-top 15px
        a
          font-size 1.2rem
          padding 15px 0
</style>
