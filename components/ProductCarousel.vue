<template>
  <div v-swiper="swiperOption">
    <div class="swiper-wrapper">
      <div
        v-for="product in productList"
        :key="product.id"
        class="swiper-slide"
      >
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>
<script>
import { directive } from 'vue-awesome-swiper'
import ProductCard from '@/components/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  directives: {
    swiper: directive
  },
  props: {
    productList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        loop: true
      }
    }
  }
}
</script>

<style lang="postcss">
@import 'node_modules/swiper/css/swiper.css';
@media (max-width: 640px) {
  .swiper-slide {
    width: 76%;
  }
}
@media (min-width: 641px) {
  .swiper-slide {
    width: 60%;
  }
}
</style>
