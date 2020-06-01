<template>
  <div class="py-5">
    <div class="navbg" aria-hidden="true"></div>
    <div
      class="
      max-w-screen-xl mx-auto relative px-10
      flex justify-between align-middle items-center"
    >
      <div class="bg-white rounded-full p-5 pt-0">
        <StoreLogo class="pb-5" width="180px" />
      </div>
      <nav class="flex justify-end">
        <NavBarLink url="/" label="Início" />
        <NavBarLink url="/loja" label="Loja" />
        <NavBarLink url="/sobre" label="Sobre" />
        <NavBarLink url="/contato" label="Contato" />
        <NavBarSearch />
        <NavBarCart />
      </nav>
    </div>
  </div>
</template>

<script>
import StoreLogo from '@/components/StoreLogo.vue'
import NavBarLink from '@/components/NavBarLink.vue'
import NavBarSearch from '@/components/NavBarSearch.vue'
import NavBarCart from '@/components/NavBarCart.vue'

export default {
  components: {
    StoreLogo,
    NavBarLink,
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
  height: 80px;
  margin-top: 60px;
}
</style>
