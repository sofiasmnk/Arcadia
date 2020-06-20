<template>
  <main>
    <BaseBreadcrumbs>
      <li><nuxt-link to="/">Início</nuxt-link></li>
      <li><nuxt-link to="/loja">Loja</nuxt-link></li>
      <li><nuxt-link to="/loja">Carrinho de compras</nuxt-link></li>
      <li>Finalizar compra</li>
    </BaseBreadcrumbs>

    <BaseSection>
      <div class="w-1/3 p-4">
        <h2>Resumo do pedido</h2>
        <div class="p-4 border rounded border-brown-lighter text-sm">
          <ul>
            <li v-for="item in itemList" :key="item.product.id">
              {{ item.product.name }} × {{ item.quantity }}
              <span class="float-right">{{ item.product.price }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-2/3 p-4">b</div>
    </BaseSection>
  </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import BaseBreadcrumbs from '@/components/BaseBreadcrumbs.vue'
import BaseSection from '@/components/BaseSection.vue'

export default {
  components: {
    BaseBreadcrumbs,
    BaseSection
  },
  computed: {
    ...mapState(['shoppingCart']),
    ...mapGetters({
      getProductById: 'products/getById'
    }),
    itemList() {
      return this.shoppingCart.map((item) => {
        return {
          product: this.getProductById(item.id),
          quantity: item.quantity
        }
      })
    },
    total() {
      let total = 0
      this.itemList.forEach(
        (item) => (total += item.product.price * item.quantity)
      )
      return total
    },
    formattedTotal() {
      const reais = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
      return reais.format(this.total)
    }
  }
}
</script>

<style lang="postcss" scoped></style>
