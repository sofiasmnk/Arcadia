<template>
  <div>
    <h2 class="text-lg font-semibold mb-4">Resumo do pedido</h2>
    <div
      class="border rounded border-brown-lighter text-sm divide-y divide-brown-lighter mb-4"
    >
      <div class="p-4">
        <ul>
          <li
            v-for="item in itemList"
            :key="item.product.id"
            class="flex items-center justify-between py-1"
          >
            <p class="flex items-center flex-grow">
              <span class="summary-product-name">
                {{ item.product.name }}
              </span>
              <span class="ml-2"> × {{ item.quantity }} </span>
            </p>
            <span>
              {{ formatPrice(subtotal(item)) }}
            </span>
          </li>
        </ul>
      </div>
      <div class="p-4">
        <ul>
          <li class="flex items-center justify-between py-1">
            <span>Cupom</span>
            <span class="coupon-value text-green">R$10,00</span>
          </li>
          <li class="flex items-center justify-between py-1">
            <span>Frete</span>
            <span>R$10,00</span>
          </li>
        </ul>
      </div>
      <div class="p-4 font-semibold flex justify-between">
        <span>Total</span>
        <span>{{ formatPrice(total) }}</span>
      </div>
    </div>
    <BaseButton
      type-secondary
      size-small
      class="w-full"
      @click.native="goToCart()"
    >
      Voltar para carrinho
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
  components: {
    BaseButton
  },
  props: {
    itemList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    total() {
      let total = 0
      this.itemList.forEach(
        (item) => (total += item.product.price * item.quantity)
      )
      return total
    }
  },
  methods: {
    formatPrice(price) {
      const reais = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
      return reais.format(price)
    },
    subtotal(item) {
      return item.product.price * item.quantity
    },
    goToCart() {
      this.$router.push({
        path: `/loja/carrinho`
      })
    }
  }
}
</script>

<style lang="postcss">
.summary-product-name {
  @apply truncate;
  max-width: 75%;
}
</style>
