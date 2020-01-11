<template>
  <div>
    <div class="hero-home">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1>{{ data.title }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter
    },
  }
}
</script>

<style lang="stylus">

  .hero-home
    background-color: $slate;
    height: 25vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

</style>
