<template>
  <section class="container mx-auto relative p-4">
    <h1 class="inline-block text-xl font-bold p-4">
      Categoria
    </h1>
    <button
      class="see-all-button"
      :class="[open ? 'see-all-button-open' : 'see-all-button-closed']"
      @click="open = !open"
    >
      Ver todos
    </button>

    <div class="loja-product-list flex flex-wrap">
      <transition-group name="list" tag="div">
        <div
          v-for="index in quantity"
          :key="index"
          class="w-1/2 xl:w-1/4 p-4 list-item"
        >
          <ProductCard />
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  components: {
    ProductCard
  },
  props: {
    categoryName: {
      type: String,
      default: 'Categoria'
    }
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    quantity() {
      if (this.open) return 8
      else return 4
    }
  }
}
</script>

<style lang="postcss">
.see-all-button {
  @apply text-sm text-green font-semibold;
  &::after {
    @apply mb-px mr-1 border-r-2 border-b-2 border-green inline-block transition duration-200;
    padding: 0.2em;
    content: '';
  }
  &.see-all-button-closed::after {
    @apply ml-0;
    transform: rotate(-45deg);
  }
  &.see-all-button-open::after {
    @apply ml-1;
    transform: rotate(45deg);
  }
}

.list-item {
  display: inline-block;
}
.list-enter-active,
.list-leave-active {
  transition: all 300ms;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  @apply opacity-0;
  transform: translateY(-1em);
}

.loja-product-list > div {
  @apply w-full;
}
</style>
