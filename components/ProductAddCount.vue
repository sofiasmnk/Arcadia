<template>
  <div class="flex">
    <div
      class="border border-green-light rounded w-24 flex justify-center items-center overflow-hidden"
    >
      <span class="w-12 text-center order-2">
        {{ quantity }}
      </span>
      <button
        class="text-xl order-1 flex-grow h-full px-2"
        :class="[
          quantity > 1 ? 'text-green hover:bg-green-lighter' : 'text-gray-400'
        ]"
        :disabled="quantity <= 1"
        @click="decrease()"
      >
        –
      </button>
      <button
        class="text-xl text-green order-3 flex-grow hover:bg-green-lighter h-full px-2"
        @click="increase()"
      >
        +
      </button>
    </div>
    <BaseButton
      v-scroll-to="'#navbar'"
      class="flex items-center ml-2"
      @click.native="addToCart()"
    >
      <IconCart class="h-6 w-6 text-white fill-current mr-3" />
      Adicionar ao carrinho
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
