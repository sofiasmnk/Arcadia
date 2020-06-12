<template>
  <main>
    <BaseBreadcrumbs>
      <li><nuxt-link to="/">Início</nuxt-link></li>
      <li>Sobre</li>
    </BaseBreadcrumbs>
    <section class="flex flex-wrap container mx-auto relative px-8">
      <div class="w-full lg:w-1/2 pb-8 lg:pr-8">
        <h2 class="inline text-lg font-semibold">
          Nós somos lorem ipsum dolor sit amet,
        </h2>
        consectetur adipiscing elit. Aliquam sit amet rutrum quam. Fusce egestas
        fermentum dolor, ac imperdiet nisi rhoncus a. Pellentesque scelerisque
        consequat gravida. Duis enim mauris, finibus id rhoncus quis, tristique.
        <a href="/sobre">Saiba mais</a>
        <div
          class="flex justify-between items-center sm:justify-around mt-6 md:pr-6"
        ></div>
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
