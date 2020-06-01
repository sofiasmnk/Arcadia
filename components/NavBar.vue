<template>
  <header class="py-5">
    <div class="navbg" aria-hidden="true"></div>
    <div
      class="max-w-screen-xl mx-auto relative px-10 flex justify-between align-middle items-center"
    >
      <div class="bg-white rounded-full p-5 pt-0">
        <nuxt-link to="/">
          <StoreLogo class="pb-5" width="180px" />
        </nuxt-link>
      </div>
      <div class="flex-grow" aria-hidden="true"></div>
      <nav class="flex justify-end">
        <NavBarLink url="/" label="Início" />
        <NavBarLink url="/loja" label="Loja" />
        <NavBarLink url="/sobre" label="Sobre" />
        <NavBarLink url="/contato" label="Contato" />
      </nav>
      <nav>
        <NavBarSearch />
      </nav>
    </div>
  </header>
</template>

<script>
import StoreLogo from '@/components/StoreLogo.vue'
import NavBarLink from '@/components/NavBarLink.vue'
import NavBarSearch from '@/components/NavBarSearch.vue'

export default {
  components: {
    StoreLogo,
    NavBarLink,
    NavBarSearch
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
