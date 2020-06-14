<template>
  <div class="lg:relative">
    <button
      aria-label="Carrinho de compras"
      class="h-20 w-16 sm:w-24 relative flex justify-center sm:mx-1 transition duration-200"
      :class="[
        open
          ? 'bg-white bg-opacity-100'
          : 'sm:bg-green-light sm:bg-opacity-25 hover:bg-opacity-50'
      ]"
      @click="toggleCart"
    >
      <IconCart
        aria-hidden="true"
        class="absolute h-6 w-6 text-green fill-current self-center opacity-100 z-50"
        :class="[open ? 'svg-open' : 'svg-closed']"
      />
    </button>
    <transition name="dropdown">
      <NavBarCartInner
        v-show="open"
        role="dialog"
        aria-labelledby="Carrinho de compras"
        aria-describedby="3 items"
        class="origin-top"
      />
    </transition>
  </div>
</template>

<script>
import IconCart from '@/components/IconCart.vue'
import NavBarCartInner from '@/components/NavBarCartInner.vue'

export default {
  components: {
    IconCart,
    NavBarCartInner
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggleCart() {
      this.open = !this.open
    }
  }
}
</script>
