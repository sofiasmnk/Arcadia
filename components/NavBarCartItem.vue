<template>
  <div class="w-full flex p-1">
    <div
      v-lazy-container="{ selector: 'img' }"
      class="w-16 box-content p-1 bg-green-lighter border shadow-sm"
    >
      <img
        :data-src="imgUrl"
        :data-loading="imgLoading"
        class="h-16 w-16 object-cover"
        :alt="imgAlt"
        aria-hidden="true"
      />
    </div>
    <div class="flex-grow flex flex-col justify-between w-64 pl-3">
      <div class="flex justify-between items-start">
        <div aria-live="polite">
          {{ item.product.name }}
          <span class="sr-only" aria-live="polite">
            Quantidade: {{ item.quantity }}. Subtotal:
            <span>{{ formattedPrice }}</span
            >.
          </span>
        </div>
        <div>
          <button
            :aria-label="removeButtonLabel"
            @click="removeItemFromCart(itemIndex)"
          >
            <IconClose
              class="text-green fill-current h-6 w-6"
              alt="Ícone fechar"
            />
          </button>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <NavBarCartItemCount
          :item="item"
          :item-index="itemIndex"
          class="my-1 h-8"
        />
        <span class="font-semibold" aria-hidden="true">
          {{ formattedPrice }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import NavBarCartItemCount from '@/components/NavBarCartItemCount.vue'
import IconClose from '@/components/IconClose.vue'

export default {
  components: {
    NavBarCartItemCount,
    IconClose
  },
  props: {
    itemIndex: {
      type: Number,
      default: 0
    },
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    formattedPrice() {
      const reais = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
      return reais.format(this.item.product.price * this.item.quantity)
    },
    imgUrl() {
      return require(`~/assets/img/produtos/${this.item.product.id}.jpg`)
    },
    imgLoading() {
      return require(`~/assets/img/produtos/${this.item.product.id}.jpg?lqip`)
    },
    imgAlt() {
      return `Imagem do produto ${this.item.product.name}`
    },
    removeButtonLabel() {
      return `Remover ${this.item.product.name} do carrinho`
    }
  },
  methods: {
    ...mapActions(['removeItemFromCart'])
  }
}
</script>

<style lang="postcss" scoped></style>
