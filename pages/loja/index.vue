<template>
  <main>
    <BaseBreadcrumbs>
      <li><nuxt-link to="/">Início</nuxt-link></li>
      <li>Loja</li>
    </BaseBreadcrumbs>

    <StoreCategory
      category-name="Rosto"
      :product-list="productsByType('Rosto')"
    />

    <BaseSeparator />

    <StoreCategory
      category-name="Corpo"
      :product-list="productsByType('Corpo')"
    />

    <BaseSeparator />

    <StoreCategory
      category-name="Cabelo"
      :product-list="productsByType('Cabelo')"
    />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import BaseSeparator from '@/components/BaseSeparator.vue'
import BaseBreadcrumbs from '@/components/BaseBreadcrumbs.vue'
import StoreCategory from '@/components/StoreCategory.vue'

export default {
  components: {
    BaseSeparator,
    BaseBreadcrumbs,
    StoreCategory
  },
  computed: {
    ...mapGetters({
      productsByType: 'products/getByType'
    })
  }
}
</script>
