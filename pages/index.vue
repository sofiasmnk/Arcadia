<template>
  <main class="overflow-hidden">
    <BaseSection>
      <h1 class="sr-only">Arcádia Cosméticos Naturais</h1>
      <div class="w-full lg:w-1/2 px-4 pb-8">
        <span class="inline text-lg font-semibold">
          Nós somos lorem ipsum dolor sit amet,
        </span>
        consectetur adipiscing elit. Aliquam sit amet rutrum quam. Fusce egestas
        fermentum dolor, ac imperdiet nisi rhoncus a. Pellentesque scelerisque
        consequat gravida. Duis enim mauris, finibus id rhoncus quis, tristique.
        <nuxt-link to="/sobre">Saiba mais</nuxt-link>.
        <div
          class="flex justify-between items-center sm:justify-around mt-6 px-4"
        >
          <CertLeapingBunny class="h-24 w-24" />
          <CertEcoCert class="h-24 w-24" />
          <CertVegano class="h-20 w-20" />
        </div>
      </div>
      <div
        v-lazy-container="{ selector: 'img' }"
        class="relative w-full lg:w-1/2 px-4"
      >
        <img
          class="w-full h-48 lg:h-64 object-cover object-top rounded over"
          :data-src="require('~/assets/img/home.jpg')"
          :data-loading="require('~/assets/img/home.jpg?lqip')"
          alt="Pessoa trabalhando com sabonetes artesanais"
        />
      </div>
    </BaseSection>

    <BaseSeparator />

    <BaseSection>
      <h1 class="sr-only">Loja</h1>

      <div class="w-full p-4 pb-6 mb-4 lg:hidden">
        <ProductCarousel class="lg:hidden" :product-list="pinnedProducts" />
      </div>

      <div class="w-full lg:w-1/3 xl:w-1/4 p-4">
        <span class="inline text-lg font-semibold">
          Explore nossos produtos,
        </span>
        consectetur adipiscing elit. Aliquam sit amet rutrum quam. Fusce egestas
        fermentum dolor, ac imperdiet nisi rhoncus a.
        <BaseButton
          class="block mt-6 w-full lg:w-auto"
          @click.native="goToStore()"
        >
          Ir para loja
        </BaseButton>
      </div>

      <div
        v-for="(product, index) in pinnedProducts"
        :key="product.id"
        class="hidden xl:block w-1/3 xl:w-1/4 p-4"
        :class="[index < 5 ? 'lg:block' : '']"
      >
        <ProductCard :product="product" />
      </div>
    </BaseSection>

    <BaseSeparator />

    <BaseSection class="justify-between items-center">
      <h1 class="sr-only">Instagram</h1>
      <div class="sm:w-2/3 lg:w-auto p-4">
        <span class="inline text-lg font-semibold">
          Nosso Instagram
        </span>
        é cheio de novidades e inspiração para viver uma vida mais natural.
      </div>
      <div class="p-4 pt-0 sm:pt-4">
        <BaseButton type-secondary size-small class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 mr-2 text-green fill-current"
            viewBox="0 0 448 512"
            aria-hidden="true"
          >
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
          Siga no Instagram
        </BaseButton>
      </div>
      <InstagramWidget />
    </BaseSection>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import BaseSeparator from '@/components/BaseSeparator.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseSection from '@/components/BaseSection.vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductCarousel from '@/components/ProductCarousel.vue'
import CertLeapingBunny from '@/components/CertLeapingBunny.vue'
import CertEcoCert from '@/components/CertEcoCert.vue'
import CertVegano from '@/components/CertVegano.vue'
import InstagramWidget from '@/components/InstagramWidget.vue'

export default {
  components: {
    BaseSeparator,
    BaseButton,
    BaseSection,
    ProductCard,
    ProductCarousel,
    CertLeapingBunny,
    CertEcoCert,
    CertVegano,
    InstagramWidget
  },
  computed: {
    ...mapGetters({
      pinnedProducts: 'products/getPinned'
    })
  },
  methods: {
    goToStore() {
      this.$router.push({
        path: `/loja`
      })
    }
  }
}
</script>
