<template>
  <div class="flex">
    <div
      class="border border-green-light rounded w-24 flex justify-center items-center overflow-hidden"
    >
      <span class="w-12 text-center order-2" aria-hidden="true">
        {{ quantity }}
      </span>
      <span class="sr-only" aria-live="polite">
        Quantidade: {{ quantity }}.
      </span>
      <button
        class="text-xl order-1 flex-grow h-full px-2"
        :class="[
          quantity > 1 ? 'text-green hover:bg-green-lighter' : 'text-gray-400'
        ]"
        :disabled="quantity <= 1"
        aria-label="Diminuir quantidade"
        @click="decrease()"
      >
        –
      </button>
      <button
        class="text-xl text-green order-3 flex-grow hover:bg-green-lighter h-full px-2"
        aria-label="Aumentar quantidade"
        @click="increase()"
      >
        +
      </button>
    </div>
    <BaseButton
      v-scroll-to="'#navbar'"
      class="flex items-center ml-2"
      :aria-label="addToCartLabel"
      @click.native="addToCart()"
    >
      <IconCart
        class="h-4 w-4 sm:h-6 sm:w-6 text-white fill-current mr-2 -ml-2 sm:ml-0"
      />
      <span class="text-sm sm:text-base">Adicionar ao carrinho</span>
    </BaseButton>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BaseButton from '@/components/BaseButton.vue'
import IconCart from '@/components/IconCart.vue'

export default {
  components: {
    BaseButton,
    IconCart
  },
  props: {
    productId: {
      type: String,
      default: '0'
    }
  },
  data() {
    return {
      quantity: 1
    }
  },
  computed: {
    addToCartLabel() {
      if (this.quantity === 1) return `Adicionar uma unidade ao carrinho`
      else return `Adicionar ${this.quantity} unidades ao carrinho`
    }
  },
  methods: {
    ...mapActions(['addItemToCart', 'openCart']),
    increase() {
      this.quantity++
    },
    decrease() {
      this.quantity--
    },
    addToCart() {
      this.addItemToCart({ id: this.productId, quantity: this.quantity })
      this.quantity = 1
      this.openCart()
    }
  }
}
</script>
