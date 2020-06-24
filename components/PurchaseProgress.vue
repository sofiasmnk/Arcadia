<template>
  <ol class="purchase-progress flex justify-between">
    <li :class="[purchaseStep == 1 ? 'purchase-progress-current' : '']">
      <span>Dados</span>
    </li>
    <li :class="[purchaseStep == 2 ? 'purchase-progress-current' : '']">
      <span>Pagamento</span>
    </li>
    <li :class="[purchaseStep == 3 ? 'purchase-progress-current' : '']">
      <span>Cofirmar</span>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    purchaseStep: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="postcss">
.purchase-progress {
  @apply h-20 relative border-t-2 border-green-lighter mt-10 mb-10 relative;
  &::after {
    @apply absolute bg-white -mt-1 p-3 right-0 z-0;
    width: 2.2em;
    content: '';
  }
  &::before {
    @apply absolute bg-white -mt-1 p-3 left-0;
    width: 2.2em;
    content: '';
  }
  & li {
    @apply inline-block relative text-sm text-green -mt-10 z-10;
    @apply w-20 h-20 rounded-full;
    &.purchase-progress-current {
      @apply bg-green-lighter;
    }
    &::before {
      @apply absolute p-1 bg-green rounded-full;
      margin-left: 45%;
      margin-top: 45%;
      content: '';
    }
    & span {
      @apply absolute w-20 text-center mt-20 pt-2;
    }
  }
}
</style>
