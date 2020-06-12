<template>
  <nav
    class="flex justify-center sm:justify-start lg:justify-end order-1 lg:order-3 w-64 lg:w-auto z-40"
  >
    <button
      class="flex justify-center h-20 w-16 sm:w-24 sm:mx-1 lg:hidden"
      :class="[
        open
          ? 'bg-white bg-opacity-100'
          : 'sm:bg-green-light sm:bg-opacity-25 hover:bg-opacity-50'
      ]"
      @click="toggleMenu"
    >
      <IconMenu class="h-6 w-6 text-green fill-current self-center" />
    </button>
    <div
      class="absolute lg:block w-screen lg:w-auto bg-green-lighter left-0 top-20 mt-24 flex flex-col lg:relative lg:flex-row lg:top-0 lg:mt-0"
      :class="[open ? 'block' : 'hidden']"
    >
      <NavBarLink url="/" label="Início" />
      <NavBarLink url="/loja" label="Loja" />
      <NavBarLink url="/sobre" label="Sobre" />
      <NavBarLink url="/contato" label="Contato" />
    </div>
  </nav>
</template>

<script>
import IconMenu from '@/components/IconMenu.vue'
import NavBarLink from '@/components/NavBarLink.vue'

export default {
  components: {
    IconMenu,
    NavBarLink
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggleMenu() {
      this.open = !this.open
    }
  }
}
</script>

<style lang="postcss" scoped></style>
