<template>
  <div
    class="relative flex justify-center px-5 mx-1 "
    :class="[open ? 'bg-white bg-opacity-100' : 'bg-green-light bg-opacity-25']"
  >
    <svg
      class="h-6 w-6 text-green fill-current self-center"
      :class="{ 'absolute right-0 mr-8': open }"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      @click="openSearch"
    >
      <path
        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
      />
    </svg>
    <template v-if="open">
      <label for="buscar-nav" class="hidden">Buscar no site </label>
      <input
        id="buscar-nav"
        class="border rounded my-5 px-3 border-green"
        type="search"
        name="Buscar"
        placeholder="Buscar"
      />
    </template>
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
