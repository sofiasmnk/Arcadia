<template>
  <div
    id="navbar-cart"
    class="z-50 bg-white absolute border border-t-0 shadow-md right-0 lg:mr-1 w-screen lg:w-auto mt-6 lg:mt-0"
  >
    <div class="p-5 pt-3 container mx-auto relative">
      <ol class="divide-y divide-brown-lighter">
        <li v-if="shoppingCart.length === 0">
          <div class="w-full flex py-4 justify-center">
            <div class="w-64 mx-10 text-center" aria-live="polite">
              O carrinho está vazio
            </div>
          </div>
        </li>
        <li
          v-for="(item, index) in itemList"
          :key="index"
          class="flex text-left py-4"
        >
          <NavBarCartItem :item="item" :item-index="index" />
        </li>
      </ol>

      <hr class="mb-4 border-brown-lighter" aria-hidden="true" />

      <div v-if="shoppingCart.length > 0">
        <div class="text-right text-lg">
          Total: <span class="font-semibold">{{ formattedTotal }}</span>
        </div>

        <div class="flex mt-5">
          <div class="w-1/2 pr-2">
            <BaseButton
              class="w-full"
              :type-secondary="true"
              :size-small="true"
              @click.native="goToCart()"
            >
              Ver carrinho
            </BaseButton>
          </div>
          <div class="w-1/2 pl-2">
            <BaseButton
              class="w-full"
              :size-small="true"
              @click.native="goToPurchase()"
            >
              Finalizar compra
            </BaseButton>
          </div>
        </div>
      </div>

      <div class="mt-5">
        Com um cadastro, você pode guardar seus dados para compras futuras.
        <p class="mt-2">
          <nuxt-link to="#">Entrar</nuxt-link>
          <span aria-hidden="true"> / </span>
          <nuxt-link to="#">Cadastrar</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import BaseButton from '@/components/BaseButton.vue'
import NavBarCartItem from '@/components/NavBarCartItem.vue'

export default {
  components: {
    BaseButton,
    NavBarCartItem
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
  },
  methods: {
    ...mapActions(['closeCart', 'closeMenu']),
    closeAll() {
      this.closeCart()
      this.closeMenu()
    },
    goToCart() {
      this.closeAll()
      this.$router.push({
        path: `/loja/carrinho`
      })
    },
    goToPurchase() {
      this.closeAll()
      this.$router.push({
        path: `/loja/carrinho/finalizar`
      })
    }
  }
}
</script>
