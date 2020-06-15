<template>
  <main>
    <BaseBreadcrumbs>
      <li><nuxt-link to="/">Início</nuxt-link></li>
      <li><nuxt-link to="/loja">Loja</nuxt-link></li>
      <li>{{ product.name }}</li>
    </BaseBreadcrumbs>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import BaseBreadcrumbs from '@/components/BaseBreadcrumbs.vue'

export default {
  components: {
    BaseBreadcrumbs
  },
  computed: {
    ...mapGetters({
      productsById: 'products/getById'
    }),
    product() {
      return this.productsById(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped></style>
