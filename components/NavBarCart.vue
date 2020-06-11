<template>
  <div class="relative">
    <button
      id="carrinho-nav-container"
      aria-label="Carrinho de compras"
      class="relative flex justify-center px-5 mx-1 transition duration-200"
      :class="[
        open
          ? 'button-open bg-white bg-opacity-100'
          : 'button-closed bg-green-light bg-opacity-25'
      ]"
      @click="toggleCart"
    >
      <IconCart
        aria-hidden="true"
        class="absolute h-6 w-6 text-green fill-current self-center opacity-100 z-50"
        :class="[open ? 'svg-open' : 'svg-closed']"
      />
    </button>
    <NavBarCartInner
      v-show="open"
      id="inner"
      aria-live="polite"
      :class="[open ? 'carrinho-nav-open' : 'carrinho-nav-closed']"
    />
  </div>
</template>

<script>
export default {
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

<style lang="postcss" scoped>
#carrinho-nav-container {
  height: 80px;
  min-width: 100px;
}

#carrinho-nav-container.button-closed:hover {
  @apply bg-opacity-50;
}

#inner {
  @apply absolute text-center bg-white border border-t-0 shadow-md right-0 mx-1;
  min-width: 500px;
}
</style>
