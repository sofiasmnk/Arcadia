<template>
  <button
    class="font-semibold transition duration-200 shadow-sm focus:shadow-outline"
    :class="[
      typeSecondary
        ? 'bg-white text-green border-green-light border-2 rounded-md hover:bg-green-lighter'
        : 'bg-green text-white border-green border-2 rounded-md hover:bg-green-light hover:border-green-light',
      sizeSmall ? 'px-4 py-2 text-sm' : 'px-5 py-3'
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    typeSecondary: {
      type: Boolean,
      default: false
    },
    sizeSmall: {
      type: Boolean,
      default: false
    }
  }
}
</script>
