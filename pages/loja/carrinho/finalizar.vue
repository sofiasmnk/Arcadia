<template>
  <main>
    <BaseBreadcrumbs>
      <li><nuxt-link to="/">Início</nuxt-link></li>
      <li><nuxt-link to="/loja">Loja</nuxt-link></li>
      <li><nuxt-link to="/loja">Carrinho de compras</nuxt-link></li>
      <li>Finalizar compra</li>
    </BaseBreadcrumbs>

    <BaseSection>
      <div class="w-full lg:w-1/3  xl:w-1/4 p-4">
        <PurchaseProgress :purchase-step="1" />
        <PurchaseSummary :item-list="itemList" />
      </div>
      <div class="w-full lg:w-2/3 xl:w-3/4 p-4 lg:pl-16 xl:pl-24">
        <form class="flex flex-wrap">
          <div class="w-1/2">
            <label class="flex flex-col m-2">
              Nome
              <input
                class="mt-2"
                type="text"
                placeholder="Nome completo"
                required
              />
            </label>
          </div>
          <div class="w-1/2">
            <label class="flex flex-col m-2 relative">
              Email
              <input
                class="mt-2"
                name="email"
                type="email"
                placeholder="nome@email.com"
                required
              />
              <span class="reminder">Email inválido</span>
            </label>
          </div>
          <div class="w-1/3">
            <label for="" class="flex flex-col m-2 relative">
              CEP
              <input
                ref="cepinput"
                class="mt-2"
                type="text"
                pattern="[0-9]{8}"
                placeholder="12345678"
                required
                @blur="validateCep"
              />
              <span class="reminder">CEP inválido</span>
            </label>
          </div>
          <div class="w-1/3">
            <label for="" class="flex flex-col m-2">
              Cidade
              <input
                class="mt-2"
                type="text"
                placeholder="Cidade"
                :disabled="validCep"
                :value="cityValue"
              />
            </label>
          </div>
          <div class="w-1/3">
            <label for="" class="flex flex-col m-2">
              Estado
              <input
                class="mt-2"
                type="text"
                placeholder="Estado"
                :disabled="validCep"
                :value="stateValue"
              />
            </label>
          </div>
          <div class="w-2/3">
            <label for="" class="flex flex-col m-2">
              Rua
              <input
                class="mt-2"
                type="text"
                placeholder="Rua"
                :disabled="validCep"
                :value="streetValue"
              />
            </label>
          </div>
          <div class="w-1/6">
            <label for="" class="flex flex-col m-2">
              Número
              <input class="mt-2" type="text" placeholder="123" />
            </label>
          </div>
          <div class="w-1/6">
            <label for="" class="flex flex-col m-2">
              Compl.
              <input class="mt-2" type="text" placeholder="1A" />
            </label>
          </div>
        </form>
      </div>
    </BaseSection>
  </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import BaseBreadcrumbs from '@/components/BaseBreadcrumbs.vue'
import BaseSection from '@/components/BaseSection.vue'
import PurchaseSummary from '@/components/PurchaseSummary.vue'
import PurchaseProgress from '@/components/PurchaseProgress.vue'

export default {
  components: {
    BaseBreadcrumbs,
    BaseSection,
    PurchaseSummary,
    PurchaseProgress
  },
  data() {
    return {
      validCep: false
    }
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
    cityValue() {
      if (this.validCep) return 'São Carlos'
      else return ''
    },
    stateValue() {
      if (this.validCep) return 'São Paulo'
      else return ''
    },
    streetValue() {
      if (this.validCep) return 'Av. Trabalhador São Carlense'
      else return ''
    }
  },
  methods: {
    validateCep() {
      this.validCep = this.$refs.cepinput.checkValidity()
    }
  }
}
</script>

<style lang="postcss">
.reminder {
  @apply absolute right-0 hidden;
}
input {
  &:invalid:not(:focus):not(:placeholder-shown) {
    @apply border-red-700 shadow-none;
    &::placeholder {
      @apply text-red-700;
    }
    & ~ .reminder {
      @apply block text-red-700;
    }
  }
  &:disabled {
    @apply text-gray-600 border-gray-600 bg-gray-300;
  }
}
</style>
