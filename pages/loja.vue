<template>
  <main>
    <BaseBreadcrumbs>
      <li><nuxt-link to="/">Início</nuxt-link></li>
      <li>Loja</li>
    </BaseBreadcrumbs>
    <StoreCategory />
    <BaseSeparator />
    <StoreCategory />
    <BaseSeparator />
    <StoreCategory />
  </main>
</template>

<script>
import BaseSeparator from '@/components/BaseSeparator.vue'
import BaseBreadcrumbs from '@/components/BaseBreadcrumbs.vue'
import StoreCategory from '@/components/StoreCategory.vue'

export default {
  components: {
    BaseSeparator,
    BaseBreadcrumbs,
    StoreCategory
  }
}
</script>

<style lang="postcss" scoped></style>
