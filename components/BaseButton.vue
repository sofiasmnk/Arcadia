<template>
  <button
    class="font-semibold hover:bg-green-light transition duration-200 shadow-md hover:shadow-sm"
    :class="[
      typeSecondary
        ? 'bg-white text-green border-green-light border-4 rounded-lg'
        : 'bg-green text-white border-green rounded',
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
