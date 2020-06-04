<template>
  <header class="py-5" aria-label="Cabeçalho">
    <div class="navbg h-20" aria-hidden="true"></div>
    <div
      class="container mx-auto relative px-5 flex justify-between align-middle items-center"
    >
      <div class="bg-white rounded-full p-5 pt-0 order-2 lg:order-1">
        <nuxt-link to="/">
          <StoreLogo class="pb-5" width="180px" />
        </nuxt-link>
      </div>
      <div
        class="flex-grow hidden lg:block lg:order-2"
        aria-hidden="true"
      ></div>
      <nav
        class="flex justify-start lg:justify-end order-1 lg:order-3 w-64 lg:w-auto"
      >
        <button class="lg:hidden">Menu</button>
        <div
          class="absolute hidden lg:block z-50 w-full bg-green-lighter left-0 top-20 mt-20 flex flex-col lg:relative lg:flex-row lg:top-0 lg:mt-0"
        >
          <NavBarLink url="/" label="Início" />
          <NavBarLink url="/loja" label="Loja" />
          <NavBarLink url="/sobre" label="Sobre" />
          <NavBarLink url="/contato" label="Contato" />
        </div>
      </nav>
      <div
        class="flex justify-end order-3 lg:order-4 w-64 lg:w-auto"
        aria-label="Ferramentas"
      >
        <NavBarSearch />
        <NavBarCart />
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="pcss" scoped>
.navbg {
  @apply bg-green-lighter;
  @apply w-screen;
  @apply absolute;
  margin-top: 60px;
}
</style>
