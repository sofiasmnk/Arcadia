<template>
  <main>
    <BaseBreadcrumbs>
      <li><nuxt-link to="/">Início</nuxt-link></li>
      <li><nuxt-link to="/loja">Loja</nuxt-link></li>
      <li>{{ product.name }}</li>
    </BaseBreadcrumbs>

    <BaseSection class="pt-5">
      <div class="w-full md:w-1/2 lg:w-1/3 p-4 pb-0">
        <ProductImageSlide :product="product" />
      </div>

      <div
        class="w-full md:w-1/2 lg:w-2/3 p-4 pb-2 flex flex-col justify-between"
      >
        <div class="mb-4">
          <h1 class="text-2xl font-bold">
            {{ product.name }}
          </h1>
          <div class="flex items-center mt-3">
            <StarRating class="text-brown fill-current" />
            <span class="ml-3">(5)</span>
            <nuxt-link class="ml-3" to="#aval">Avaliar</nuxt-link>
          </div>
        </div>

        <div class="mb-4 lg:w-2/3">
          <p class="truncate lg:break-normal">
            Mauris erat sapien, consectetur eget tellus nec, gravida vulputate
            mi. Curabitur nisi est, tempor volutpat purus nec, efficitur dictum
            nunc.
          </p>

          <nuxt-link to="#desc">Ver mais</nuxt-link>
        </div>
        <div class="mb-4">
          <span
            class="rounded inline-block px-4 py-2 bg-brown-lighter font-semibold text-xl"
          >
            {{ formattedPrice }}
          </span>
        </div>
        <div class="mb-4">
          <form>
            <label class="radiobutton mr-2">
              <input type="radio" name="opcao" checked />
              <span>Com fragrância</span>
            </label>
            <label class="radiobutton">
              <input type="radio" name="opcao" />
              <span>Sem fragrância</span>
            </label>
          </form>
        </div>
        <div>
          <ProductAddCount :product-id="product.id" />
        </div>
      </div>
    </BaseSection>

    <BaseSeparator id="desc" />

    <BaseSection>
      <div class="w-full p-4">
        <h2 class="text-lg font-semibold">Descrição</h2>
        <p class="mt-4">
          Mauris erat sapien, consectetur eget tellus nec, gravida vulputate mi.
          Curabitur nisi est, tempor volutpat purus nec, efficitur dictum nunc.
          Proin non lectus dolor. Donec a arcu nunc. Nam id maximus risus. Nam a
          dui lorem. Nullam risus sapien, iaculis at pretium et, pellentesque
          non felis. Nullam at scelerisque urna.
        </p>
        <p class="mt-4">
          Aliquam tincidunt vitae sem eu iaculis. Duis porta malesuada sem ut
          pulvinar. Duis ac justo sed dolor hendrerit bibendum ac id lacus.
          Pellentesque commodo a erat ut interdum. Mauris facilisis ultricies
          mauris et molestie. Curabitur pretium libero eros, in ultricies nibh
          dignissim quis. Donec scelerisque eget augue in porttitor.
        </p>
      </div>
      <div class="w-full sm:w-1/2 p-4 mt-4">
        <h2 class="text-lg font-semibold">Ingredientes</h2>
        <p class="mt-4">
          Mauris, erat, sapien, consectetur, eget tellus nec, gravida, vulputate
          mi.
        </p>
      </div>
      <div class="w-full sm:w-1/2 p-4 mt-4">
        <h2 class="text-lg font-semibold">Detalhes</h2>
        <ul class="mt-4">
          <li>Peso: 100g</li>
          <li>Dimensões: 10 × 5 × 2 cm</li>
        </ul>
      </div>
    </BaseSection>

    <BaseSeparator id="aval" />

    <BaseSection>
      <ProductReviews />
    </BaseSection>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import BaseBreadcrumbs from '@/components/BaseBreadcrumbs.vue'
import BaseSection from '@/components/BaseSection.vue'
import BaseSeparator from '@/components/BaseSeparator.vue'
import StarRating from '@/components/StarRating.vue'
import ProductImageSlide from '@/components/ProductImageSlide.vue'
import ProductAddCount from '@/components/ProductAddCount.vue'
import ProductReviews from '@/components/ProductReviews.vue'

export default {
  components: {
    BaseBreadcrumbs,
    BaseSection,
    BaseSeparator,
    StarRating,
    ProductImageSlide,
    ProductAddCount,
    ProductReviews
  },
  computed: {
    ...mapGetters({
      productsById: 'products/getById'
    }),
    product() {
      return this.productsById(this.$route.params.id)
    },
    imgUrl() {
      return require(`~/assets/img/produtos/${this.product.id}.jpg`)
    },
    formattedPrice() {
      const reais = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
      return reais.format(this.product.price)
    }
  }
}
</script>

<style lang="postcss">
.radiobutton {
  @apply relative;
  &:hover input[type='radio'] ~ span::after {
    @apply bg-green-light;
  }
  & input[type='radio'] {
    @apply absolute opacity-0;
    & ~ span::before {
      @apply inline-block border-2 border-green h-4 w-4 rounded-full mr-2;
      margin-bottom: -0.15em;
      content: '';
    }
    & ~ span::after {
      @apply absolute left-0 bottom-0 h-2 w-2 rounded-full ml-1;
      margin-bottom: 0.38em;
      content: '';
    }
    &:checked ~ span::after {
      @apply bg-green;
    }
    &:focus ~ span::after {
      @apply bg-green-light;
    }
  }
}
</style>
