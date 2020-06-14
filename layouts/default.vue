<template>
  <div>
    <NavBar />
    <nuxt />
    <SiteFooter />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  components: {
    NavBar,
    SiteFooter
  }
}
</script>

<style lang="postcss"></style>
