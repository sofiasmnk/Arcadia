<template>
  <nav class="container mx-auto px-8 mb-6">
    <ol class="flex text-sm breadcrumbs">
      <slot></slot>
    </ol>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="postcss">
.breadcrumbs a {
  @apply mr-2;
  &::after {
    @apply ml-2 mb-px mr-1 border-gray-600 border-r border-b inline-block;
    padding: 2px;
    transform: rotate(-45deg);
    content: '';
  }
}
</style>
