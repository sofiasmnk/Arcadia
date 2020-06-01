<template>
  <div
    id="buscar-nav-container"
    class="relative flex justify-center px-5 mx-1 "
    :class="[open ? 'bg-white bg-opacity-100' : 'bg-green-light bg-opacity-25']"
    @mouseover="openSearch"
    @mouseleave="closeSearch"
  >
    <svg
      class="absolute h-6 w-6 text-green fill-current self-center opacity-100 z-50"
      :class="[open ? 'svg-open' : 'svg-closed']"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
      />
    </svg>
    <div
      class="text-center"
      :class="[open ? 'buscar-nav-open' : 'buscar-nav-closed']"
    >
      <label for="buscar-nav" class="hidden">Buscar no site </label>
      <input
        id="buscar-nav"
        class="border rounded my-5 px-3 border-green h-10"
        type="search"
        name="Buscar"
        placeholder="Buscar"
        @focus="openSearch"
        @blur="closeSearch"
      />
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
    openSearch() {
      this.open = true
    },
    closeSearch() {
      this.open = false
    }
  }
}
</script>

<style lang="postcss" scoped>
#buscar-nav-container {
  height: 80px;
  min-width: 100px;
  transition: 600ms;
}
input::placeholder {
  @apply text-green;
}

.svg-open {
  transform: translate(90px);
  transition: 600ms;
}
.svg-closed {
  transform: translate(0px);
  transition: 600ms;
}

.buscar-nav-closed {
  transform: scale(0, 1);
  opacity: 0;
  width: 0;
  transition: 600ms;
}
.buscar-nav-closed input {
  width: 0px;
  transition: 600ms;
}
.buscar-nav-open {
  transform: scale(1, 1);
  opacity: 100;
  width: 225px;
  transition: 600ms;
}
.buscar-nav-open input {
  width: 225px;
  transition: 600ms;
}
</style>
