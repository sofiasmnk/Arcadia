<template>
  <main>
    <BaseBreadcrumbs>
      <li><nuxt-link to="/">Início</nuxt-link></li>
      <li><nuxt-link to="/loja">Loja</nuxt-link></li>
      <li>Carrinho de compras</li>
    </BaseBreadcrumbs>

    <BaseSection>
      <div class="w-full p-4">
        <table
          class="text-left w-full relative table-fixed overflow-hidden md:border border-brown-lighter"
        >
          <thead>
            <tr class="bg-green-lighter">
              <th class="p-4 w-12">
                <span class="sr-only">Remover item</span>
              </th>
              <th class="p-4">Item</th>
              <th class="p-4 w-32">Preço</th>
              <th class="p-4 w-32">Quantidade</th>
              <th class="p-4 text-right w-32">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in itemList"
              :key="item.product.id"
              class="border border-brown-lighter"
              :class="[index % 2 === 1 ? 'bg-green-lighter bg-opacity-25' : '']"
            >
              <td class="p-4">
                <button class="mt-1" @click="removeItemFromCart(index)">
                  <IconClose class="text-green fill-current h-6 w-6 " />
                </button>
              </td>
              <td class="p-4 flex md:items-center">
                <div
                  class="w-16 box-content p-1 bg-green-lighter border shadow-sm"
                >
                  <img
                    :src="imgUrl(item)"
                    class="h-16 w-16 object-cover"
                    alt=""
                  />
                </div>
                <span class="ml-4">
                  {{ item.product.name }}
                </span>
              </td>
              <td class="p-4">
                {{ formattedPrice(item.product.price) }}
              </td>
              <td class="p-4">
                <NavBarCartItemCount :item="item" :item-index="index" />
              </td>
              <td class="p-4 text-right">
                {{ formattedPrice(subTotal(item)) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="w-full md:w-1/3 p-4 flex-col flex md:order-1">
        <div class="rounded border border-brown-lighter pl-4">
          <ol>
            <li class="flex justify-between py-3">
              <span class="w-24">Subtotal</span>
              <span class="px-4">{{ formattedPrice(total) }}</span>
            </li>
            <li class="flex justify-between py-3">
              <span class="w-24">Cupom</span>
              <span class="coupon-value px-4 text-green">R$10,00</span>
            </li>
            <li class="flex justify-between py-3">
              <span class="w-24">Frete</span>
              <span class="px-4">R$10,00</span>
            </li>
          </ol>
        </div>
        <div
          class="bg-green-lighter rounded rounded-t-none self-end p-4 font-bold text-xl text-right w-full"
        >
          <span class="inline-block">{{ formattedPrice(total) }}</span>
        </div>
        <div class="self-end w-full mt-4">
          <BaseButton class="w-full" @click.native="goToPurchase()">
            Finalizar compra
          </BaseButton>
        </div>
      </div>
      <!--  -->
      <div class="w-full md:w-1/3 p-4">
        <div class="rounded border border-brown-lighter p-4">
          <form>
            <label class="block text-sm mb-2" for="cupom">Cupom</label>
            <div class="flex flex-wrap items-center">
              <div
                class="w-2/3 md:w-full lg:w-2/3 pr-2 md:pr-0 lg:pr-2 md:mb-2 lg:mb-0"
              >
                <input
                  id="cupom"
                  class="w-full"
                  type="text"
                  placeholder="Código"
                />
              </div>
              <div class="w-1/3 md:w-full lg:w-1/3">
                <BaseButton
                  class="w-full"
                  :type-secondary="true"
                  :size-small="true"
                >
                  Aplicar
                </BaseButton>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!--  -->
      <div class="w-full md:w-1/3 p-4">
        <div class="rounded border border-brown-lighter p-4">
          <form>
            <label class="block text-sm mb-2" for="frete">Frete</label>
            <div class="flex flex-wrap items-center">
              <div
                class="w-2/3 md:w-full lg:w-2/3 pr-2 md:pr-0 lg:pr-2 md:mb-2 lg:mb-0"
              >
                <input
                  id="frete"
                  class="w-full"
                  type="text"
                  placeholder="CEP"
                />
              </div>
              <div class="w-1/3 md:w-full lg:w-1/3">
                <BaseButton
                  class="w-full"
                  :type-secondary="true"
                  :size-small="true"
                >
                  Calcular
                </BaseButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </BaseSection>
  </main>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import BaseBreadcrumbs from '@/components/BaseBreadcrumbs.vue'
import BaseSection from '@/components/BaseSection.vue'
import BaseButton from '@/components/BaseButton.vue'
import IconClose from '@/components/IconClose.vue'
import NavBarCartItemCount from '@/components/NavBarCartItemCount.vue'

export default {
  components: {
    BaseBreadcrumbs,
    BaseSection,
    BaseButton,
    IconClose,
    NavBarCartItemCount
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
    }
  },
  methods: {
    ...mapActions(['removeItemFromCart']),
    formattedPrice(price) {
      const reais = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
      return reais.format(price)
    },
    subTotal(item) {
      return item.product.price * item.quantity
    },
    imgUrl(item) {
      return require(`~/assets/img/produtos/${item.product.id}.jpg`)
    },
    goToPurchase() {
      this.$router.push({
        path: `/loja/carrinho/finalizar`
      })
    }
  }
}
</script>

<style lang="postcss">
.coupon-value::before {
  @apply absolute -ml-3;
  content: '– ';
}
@media (max-width: 767px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
    border: none;
  }

  table {
    border: 1px solid;
  }

  thead tr {
    @apply sr-only;
  }

  td {
    position: relative;
  }

  td:before {
    @apply absolute -mt-6 text-sm;
    white-space: nowrap;
  }

  td:nth-of-type(1) {
    @apply absolute right-0;
  }
  td:nth-of-type(3) {
    @apply absolute -mt-16 z-30;
    margin-left: 5.6em;
  }
  td:nth-of-type(5) {
    @apply absolute;
    margin-top: -3.3em;
    right: 0;
    &:before {
      @apply pr-4;
      right: 0;
      content: 'Subtotal';
    }
  }
}
</style>
