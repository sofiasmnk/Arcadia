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

      <nav
        class="flex justify-center sm:justify-start lg:justify-end order-1 lg:order-3 w-64 lg:w-auto z-40"
      >
        <NavBarButton
          icon-name="menu"
          class="lg:hidden"
          :class="[menuOpen ? 'navbar-button-open' : 'navbar-button-closed']"
          @click.native="toggleMenu()"
        />
        <div
          class="absolute lg:block w-screen lg:w-auto bg-green-lighter left-0 top-20 mt-24 flex flex-col lg:relative lg:flex-row lg:top-0 lg:mt-0 origin-top"
          :class="[menuOpen ? 'block' : 'hidden']"
        >
          <NavBarLink url="/" label="Início" />
          <NavBarLink url="/loja" label="Loja" />
          <NavBarLink url="/sobre" label="Sobre" />
          <NavBarLink url="/contato" label="Contato" />
        </div>
      </nav>

      <div
        class="flex justify-center sm:justify-end order-3 lg:order-4 w-64 lg:w-auto"
      >
        <NavBarSearch class="hidden lg:flex" />

        <div class="lg:relative">
          <NavBarButton
            icon-name="cart"
            :class="[cartOpen ? 'navbar-button-open' : 'navbar-button-closed']"
            @click.native="toggleCart()"
          />
          <NavBarCart v-show="cartOpen" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import StoreLogo from '@/components/StoreLogo.vue'
import NavBarLink from '@/components/NavBarLink.vue'
import NavBarSearch from '@/components/NavBarSearch.vue'
import NavBarCart from '@/components/NavBarCart.vue'
import NavBarButton from '@/components/NavBarButton.vue'

export default {
  components: {
    StoreLogo,
    NavBarLink,
    NavBarSearch,
    NavBarCart,
    NavBarButton
  },
  data() {
    return {
      cartOpen: false,
      menuOpen: false
    }
  },
  methods: {
    toggleCart() {
      this.menuOpen = false
      this.cartOpen = !this.cartOpen
    },
    toggleMenu() {
      this.cartOpen = false
      this.menuOpen = !this.menuOpen
    }
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
