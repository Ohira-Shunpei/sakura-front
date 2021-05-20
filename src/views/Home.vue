<template>
  <section class="home">
    <HomeAbout/>
  </section>
</template>

<script>
import HomeAbout from '../components/HomeAbout.vue'


export default {
  components: {
    HomeAbout,
  },
}
</script>
<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
}
</style>