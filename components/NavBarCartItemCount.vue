<template>
  <div
    class="border border-green-light bg-white rounded w-24 flex justify-center items-center overflow-hidden"
  >
    <span class="w-12 text-center order-2" aria-hidden="true">
      {{ item.quantity }}
    </span>
    <button
      class="text-xl order-1 flex-grow"
      :class="[
        item.quantity > 1
          ? 'text-green hover:bg-green-lighter'
          : 'text-gray-400'
      ]"
      :disabled="item.quantity <= 1"
      :aria-label="decrementLabel"
      @click="decrease()"
    >
      –
    </button>
    <button
      class="text-xl text-green order-3 flex-grow hover:bg-green-lighter"
      :aria-label="incrementlabel"
      @click="increase()"
    >
      +
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    },
    itemIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    incrementlabel() {
      return `Adicionar uma unidade de ${this.item.product.name}`
    },
    decrementLabel() {
      return `Retirar uma unidade de ${this.item.product.name}`
    }
  },
  methods: {
    ...mapActions(['changeItemQuantity']),
    increase() {
      let quantity = this.item.quantity
      quantity++
      this.changeItemQuantity({ index: this.itemIndex, quantity })
    },
    decrease() {
      let quantity = this.item.quantity
      quantity--
      this.changeItemQuantity({ index: this.itemIndex, quantity })
    }
  }
}
</script>
