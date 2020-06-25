<template>
  <div
    class="h-20 relative flex justify-center px-5 mx-1 cursor-pointer transition-all duration-300"
    :class="[
      open
        ? 'bg-white bg-opacity-100 w-56'
        : 'bg-green-light bg-opacity-25 w-24'
    ]"
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
        <input
          class="invisible"
          aria-hidden="true"
          type="submit"
          value="Buscar"
          tabindex="-1"
        />
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
.svg-open {
  transform: translate(65px);
  transition: 300ms;
}
.svg-closed {
  transform: translate(0px);
  transition: 300ms;
}

.buscar-nav-closed {
  transform: scale(0, 1);
  opacity: 0;
  width: 0;
  transition: 300ms;
  & input {
    width: 0px;
    transition: 300ms;
  }
}

.buscar-nav-open {
  transform: scale(1, 1);
  opacity: 100;
  width: 180px;
  transition: 300ms;
  & input {
    width: 180px;
    transition: 300ms;
  }
}
</style>
