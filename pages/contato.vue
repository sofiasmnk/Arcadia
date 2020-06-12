<template>
  <main>
    <BaseBreadcrumbs>
      <li><nuxt-link to="/">Início</nuxt-link></li>
      <li>Contato</li>
    </BaseBreadcrumbs>
    <section class="flex flex-wrap container mx-auto relative px-8">
      <div class="w-full lg:w-1/2 pb-8 lg:pr-8">
        Conteúdo
      </div>
      <img
        class="w-full lg:w-1/2 h-48 lg:h-64 object-cover object-top rounded over"
        src="~assets/img/home.jpg"
        alt=""
      />
    </section>

    <BaseSeparator />
  </main>
</template>

<script>
import BaseSeparator from '@/components/BaseSeparator.vue'
import BaseBreadcrumbs from '@/components/BaseBreadcrumbs.vue'

export default {
  components: {
    BaseSeparator,
    BaseBreadcrumbs
  }
}
</script>

<style lang="postcss" scoped></style>
