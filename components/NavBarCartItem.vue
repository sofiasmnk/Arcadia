<template>
  <div class="w-full flex p-1">
    <div class="w-16 box-content p-1 bg-green-lighter border shadow-sm">
      <img :src="imgUrl" class="h-16 w-16 object-cover" alt="" />
    </div>
    <div class="flex-grow flex flex-col justify-between w-64 pl-3">
      <div class="flex justify-between items-start">
        <div>{{ item.product.name }}</div>
        <div>
          <button class="mt-1" @click="removeItemFromCart(itemIndex)">
            <IconClose class="text-green fill-current h-6 w-6 " />
          </button>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <NavBarCartItemCount
          :item="item"
          :item-index="itemIndex"
          class="my-1 h-8"
        />
        <span class="font-semibold">{{ formattedPrice }}</span>
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
    }
  },
  methods: {
    ...mapActions(['removeItemFromCart'])
  }
}
</script>

<style lang="postcss" scoped></style>
