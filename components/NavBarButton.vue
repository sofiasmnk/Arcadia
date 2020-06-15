<template>
  <button
    class="h-20 w-16 sm:w-24 relative flex justify-center sm:mx-1 transition duration-200"
  >
    <template v-if="iconName === 'menu'">
      <IconMenu class="h-6 w-6 text-green fill-current self-center" />
    </template>
    <template v-if="iconName === 'cart'">
      <IconCart
        aria-hidden="true"
        class="h-6 w-6 text-green fill-current self-center"
      />
    </template>
  </button>
</template>

<script>
import IconCart from '@/components/IconCart.vue'
import IconMenu from '@/components/IconMenu.vue'
export default {
  components: {
    IconCart,
    IconMenu
  },
  props: {
    iconName: {
      type: String,
      default: 'none'
    }
  }
}
</script>

<style lang="postcss">
.navbar-button-open {
  @apply bg-white bg-opacity-100;
}
.navbar-button-closed {
  @apply bg-green-light bg-opacity-25;
  &:hover {
    @apply bg-opacity-50;
  }
}
</style>
