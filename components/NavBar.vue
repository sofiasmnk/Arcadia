<template>
  <header class="lg:py-5" aria-label="Cabeçalho">
    <div class="navbg h-20" aria-hidden="true"></div>
    <div
      class="container mx-auto sm:px-5 flex justify-around sm:justify-between align-middle items-center"
    >
      <div class="order-2 lg:order-1 relative mt-2">
        <div
          class="bg-white rounded-full h-48 w-48 p-5 pt-0 flex justify-center z-50"
        >
          <nuxt-link class="self-center -mt-5" to="/">
            <StoreLogo class="h-40 w-40" />
          </nuxt-link>
        </div>
      </div>
      <div
        class="flex-grow hidden lg:block lg:order-2"
        aria-hidden="true"
      ></div>
      <NavBarMenu />
      <div
        class="flex justify-center sm:justify-end order-3 lg:order-4 w-64 lg:w-auto"
        aria-label="Ferramentas"
      >
        <NavBarSearch class="hidden lg:flex" />
        <NavBarCart />
      </div>
    </div>
  </header>
</template>

<script>
import StoreLogo from '@/components/StoreLogo.vue'
import NavBarMenu from '@/components/NavBarMenu.vue'
import NavBarSearch from '@/components/NavBarSearch.vue'
import NavBarCart from '@/components/NavBarCart.vue'

export default {
  components: {
    StoreLogo,
    NavBarMenu,
    NavBarSearch,
    NavBarCart
  }
}
</script>

<style lang="pcss" scoped>
.navbg {
  @apply bg-green-lighter;
  @apply w-screen;
  @apply absolute;
  margin-top: 60px;
}
</style>
