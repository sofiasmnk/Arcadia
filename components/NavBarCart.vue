<template>
  <div>
    <button
      id="carrinho-nav-container"
      aria-label="Carrinho de compras"
      class="relative flex justify-center px-5 mx-1"
      :class="[
        open
          ? 'button-open bg-white bg-opacity-100'
          : 'button-closed bg-green-light bg-opacity-25'
      ]"
      @click="toggleCart"
    >
      <svg
        aria-hidden="true"
        class="absolute h-6 w-6 text-green fill-current self-center opacity-100 z-50"
        :class="[open ? 'svg-open' : 'svg-closed']"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
        />
      </svg>
    </button>
    <div
      v-show="open"
      aria-live="polite"
      class="absolute text-center bg-white border"
      :class="[open ? 'carrinho-nav-open' : 'carrinho-nav-closed']"
    >
      carrinho
      <button>botão</button>
    </div>
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
  transition: 300ms;
}

button.button-closed:hover {
  @apply bg-opacity-50;
}
button.button-open:hover {
}
</style>
