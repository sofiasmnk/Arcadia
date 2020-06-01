<template>
  <div
    class="relative flex justify-center px-5 mx-1 "
    :class="[open ? 'bg-white bg-opacity-100' : 'bg-green-light bg-opacity-25']"
  >
    <svg
      class="h-6 w-6 text-green fill-current self-center"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      @click="openSearch"
    >
      <path
        d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
      />
    </svg>
    <template v-if="open"> </template>
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
    openSearch() {
      this.open = !this.open
    }
  }
}
</script>

<style lang="postcss" scoped>
div {
  height: 80px;
  min-width: 100px;
}
input::placeholder {
  @apply text-green;
}
</style>
