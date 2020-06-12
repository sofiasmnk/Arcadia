<template>
  <div
    id="buscar-nav-container"
    class="relative flex justify-center px-5 mx-1 "
    :class="[open ? 'bg-white bg-opacity-100' : 'bg-green-light bg-opacity-25']"
    @mouseover="openSearch()"
    @mouseleave="
      if (!focus) {
        closeSearch()
      }
    "
    @click.self="focusSearch()"
  >
    <IconSearch
      class="absolute h-6 w-6 text-green fill-current self-center opacity-100 z-50"
      :class="[open ? 'svg-open' : 'svg-closed']"
      aria-hidden="true"
      @click="focusSearch()"
    />
    <div
      class="text-center flex-shrink"
      :class="[open ? 'buscar-nav-open' : 'buscar-nav-closed']"
    >
      <form>
        <input
          id="buscar-nav"
          class="border rounded my-5 px-3 border-green h-10"
          type="search"
          name="Buscar"
          placeholder="Buscar"
          aria-label="Buscar no site"
          @focus="
            openSearch()
            focus = true
          "
          @blur="
            closeSearch()
            focus = false
          "
        />
        <input class="sr-only" type="submit" value="Buscar" tabindex="-1" />
      </form>
    </div>
  </div>
</template>

<script>
import IconSearch from '@/components/IconSearch.vue'

export default {
  components: {
    IconSearch
  },
  data() {
    return {
      open: false,
      focus: false
    }
  },
  methods: {
    toggleSearch() {
      this.open = !this.open
    },
    focusSearch() {
      document.getElementById('buscar-nav').focus()
    },
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
  transition: 500ms;
}
#buscar-nav-container:hover {
  cursor: pointer;
}
input::placeholder {
  @apply text-green;
}

.svg-open {
  transform: translate(65px);
  transition: 500ms;
}
.svg-closed {
  transform: translate(0px);
  transition: 500ms;
}

.buscar-nav-closed {
  transform: scale(0, 1);
  opacity: 0;
  width: 0;
  transition: 500ms;
}
.buscar-nav-closed input {
  width: 0px;
  transition: 500ms;
}
.buscar-nav-open {
  transform: scale(1, 1);
  opacity: 100;
  width: 180px;
  transition: 500ms;
}
.buscar-nav-open input {
  width: 180px;
  transition: 500ms;
}
</style>
