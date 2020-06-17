<template>
  <div
    class="product-card relative border border-brown-lighter rounded
    cursor-pointer transition duration-200 hover:shadow-md"
  >
    <div
      aria-hidden="true"
      class="absolute h-full w-full rounded"
      @click="navigate()"
    ></div>
    <img
      class="h-32 w-full object-cover rounded rounded-b-none "
      :src="imgUrl"
      alt=""
    />
    <div class="p-4 relative">
      <h5 class="text-lg z-50 truncate">
        <nuxt-link
          :to="`/loja/produtos/${product.id}`"
          class="text-black font-semibold no-underline hover:underline hover:text-black"
        >
          {{ product.name }}
        </nuxt-link>
      </h5>
      <div class="flex items-center mt-3">
        <span
          class="rounded inline-block px-2 py-1 bg-brown-lighter font-semibold"
        >
          {{ formattedPrice }}
        </span>
        <StarRating class="pl-4 text-brown" />
      </div>
    </div>
    <button
      :aria-label="buttonLabel"
      class="absolute right-0 -mt-5 mr-5 z-40
      flex p-2 bg-green rounded-full
      transition duration-200 hover:bg-green-light"
      @click="addProductToCart()"
    >
      <IconCart
        aria-hidden="true"
        class="h-6 w-6 text-white fill-current self-center"
      />
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import IconCart from '@/components/IconCart.vue'
import StarRating from '@/components/StarRating.vue'

export default {
  components: {
    IconCart,
    StarRating
  },
  props: {
    product: {
      type: Object,
      default() {
        return {
          name: 'Nome do produto',
          price: 0.0
        }
      }
    }
  },
  computed: {
    formattedPrice() {
      const reais = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
      return reais.format(this.product.price)
    },
    imgUrl() {
      return require(`~/assets/img/produtos/${this.product.id}.jpg`)
    },
    buttonLabel() {
      return `Adicionar ${this.product.name} ao carrinho`
    }
  },
  methods: {
    ...mapActions(['addItemToCart']),
    addProductToCart() {
      this.addItemToCart({ id: this.product.id, quantity: 1 })
    },
    navigate() {
      this.$router.push({
        path: `/loja/produtos/${this.product.id}`
      })
    }
  }
}
</script>

<style lang="postcss">
.product-card:hover a {
  @apply underline;
}
</style>
