<template>
  <div :class="layoutClass">
    <Navbar/>

    <Home v-if="data.home"/>
    <Interior v-else/>

    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Home from '../components/Home.vue'
import Interior from '../components/Interior.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {Home, Navbar, Interior, Footer},
  computed: {
    data() {
      return this.$page.frontmatter
    },
    layoutClass() {
      let strip = this.$page.path.replace(/\//g, '').toLowerCase();
      return strip === '' ? 'front-page' : strip + '-page';
    }
  }
}
</script>

<style lang="stylus">

</style>
