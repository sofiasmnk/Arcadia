<template>
  <div class="flex flex-col justify-between min-h-screen">
    <NavBar />
    <div class="flex-grow">
      <nuxt />
    </div>
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
