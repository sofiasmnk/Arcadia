<template>
  <div
    class="border border-green-light rounded w-24 flex justify-center overflow-hidden"
  >
    <input
      v-model="quantity"
      class="w-12 text-center order-2"
      type="number"
      name="p-count"
      min="1"
      placeholder="1"
    />
    <button
      class="text-xl order-1 flex-grow"
      :class="[
        quantity > 1 ? 'text-green hover:bg-green-lighter' : 'text-gray-400'
      ]"
      @click="decrease()"
    >
      –
    </button>
    <button
      class="text-xl text-green order-3 flex-grow hover:bg-green-lighter"
      @click="increase()"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    increase() {
      this.quantity++
    },
    decrease() {
      if (this.quantity > 1) this.quantity--
    }
  }
}
</script>
