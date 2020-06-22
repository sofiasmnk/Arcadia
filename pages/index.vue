<template>
  <main class="overflow-hidden">
    <BaseSection>
      <div class="w-full lg:w-1/2 px-4 pb-8">
        <h2 class="inline text-lg font-semibold">
          Nós somos lorem ipsum dolor sit amet,
        </h2>
        consectetur adipiscing elit. Aliquam sit amet rutrum quam. Fusce egestas
        fermentum dolor, ac imperdiet nisi rhoncus a. Pellentesque scelerisque
        consequat gravida. Duis enim mauris, finibus id rhoncus quis, tristique.
        <a href="/sobre">Saiba mais</a>
        <div
          class="flex justify-between items-center sm:justify-around mt-6 px-4"
        >
          <CertLeapingBunny class="h-24 w-24" />
          <CertEcoCert class="h-24 w-24" />
          <CertVegano class="h-20 w-20" />
        </div>
      </div>
      <div class="relative w-full lg:w-1/2 px-4">
        <img
          class="w-full h-48 lg:h-64 object-cover object-top rounded over"
          src="~assets/img/home.jpg"
          alt=""
        />
      </div>
    </BaseSection>

    <BaseSeparator />

    <BaseSection>
      <div class="w-full p-4 pb-6 mb-4">
        <ProductCarousel class="lg:hidden" :product-list="pinnedProducts" />
      </div>

      <div class="w-full lg:w-1/3 xl:w-1/4 p-4">
        <h2 class="inline text-lg font-semibold">
          Explore nossos produtos,
        </h2>
        consectetur adipiscing elit. Aliquam sit amet rutrum quam. Fusce egestas
        fermentum dolor, ac imperdiet nisi rhoncus a.
        <BaseButton class="block mt-3 w-full lg:w-auto"
          >Ir para loja</BaseButton
        >
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

    <BaseSection> </BaseSection>
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

export default {
  components: {
    BaseSeparator,
    BaseButton,
    BaseSection,
    ProductCard,
    ProductCarousel,
    CertLeapingBunny,
    CertEcoCert,
    CertVegano
  },
  computed: {
    ...mapGetters({
      pinnedProducts: 'products/getPinned'
    })
  }
}
</script>
