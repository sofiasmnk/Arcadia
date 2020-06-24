<template>
  <section class="container mx-auto relative p-4">
    <h1 class="inline-block text-xl font-bold p-4">
      {{ categoryName }}
    </h1>
    <button
      class="see-all-button"
      :class="[open ? 'see-all-button-open' : 'see-all-button-closed']"
      @click="open = !open"
    >
      Ver todos
    </button>

    <ul
      class="flex flex-wrap"
      :class="[open ? 'product-list-open' : 'product-list-closed']"
    >
      <li
        v-for="product in listByQuantity"
        :key="product.id"
        class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
      >
        <ProductCard :product="product" />
      </li>
    </ul>
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
    },
    productList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    quantity() {
      if (this.open) return 1000
      else return 4
    },
    listByQuantity() {
      return this.productList.slice(0, this.quantity)
    }
  }
}
</script>

<style lang="postcss">
.see-all-button {
  @apply text-sm text-green font-semibold;
  &::after {
    @apply mb-px border-r-2 border-b-2 border-green inline-block transition duration-200;
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

.product-list-closed {
  height: 17rem;
  overflow: hidden;
}
.product-list-open {
  height: auto;
}
</style>
