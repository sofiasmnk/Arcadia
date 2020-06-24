<template>
  <div
    v-lazy-container="{ selector: 'img' }"
    class="w-full md:h-full flex flex-col"
  >
    <div class="px-1 relative flex-1">
      <button
        class="arrow arrow-left absolute opacity-75 hover:opacity-100 h-full left-0 px-2"
        aria-label="Imagem anterior"
        @click="decrementIndex()"
      ></button>
      <button
        class="arrow arrow-right absolute opacity-75 hover:opacity-100 h-full right-0 px-2"
        aria-label="Próxima imagem"
        @click="incrementIndex()"
      ></button>
      <img
        :data-src="imgUrl"
        :data-loading="imgLoading"
        :alt="imgAlt"
        class="h-64 w-full md:h-full object-cover rounded"
      />
    </div>
    <div class="w-full flex py-1 ">
      <button
        v-for="index in 4"
        :key="index"
        class="rounded m-1 flex-1 w-full h-16"
        @click="changeIndex(index)"
      >
        <img
          :data-src="imgUrl"
          :data-loading="imgLoading"
          :alt="thumbAlt(index)"
          class="h-full w-full object-cover rounded transition duration-200"
          :class="
            index == imgIndex ? 'opacity-25' : 'opacity-100 hover:opacity-25'
          "
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      imgIndex: 1
    }
  },
  computed: {
    imgUrl() {
      return require(`~/assets/img/produtos/${this.product.id}.jpg`)
    },
    imgLoading() {
      return require(`~/assets/img/produtos/${this.product.id}.jpg?lqip`)
    },
    imgAlt() {
      return `Imagem ${this.imgIndex} do produto ${this.product.name}`
    }
  },
  methods: {
    incrementIndex() {
      if (this.imgIndex < 4) this.imgIndex++
      else this.imgIndex = 1
    },
    decrementIndex() {
      if (this.imgIndex > 1) this.imgIndex--
      else this.imgIndex = 4
    },
    changeIndex(index) {
      this.imgIndex = index
    },
    thumbAlt(index) {
      return `Ver imagem ${index} do produto ${this.product.name}`
    }
  }
}
</script>

<style lang="postcss">
.arrow {
  &::after {
    @apply p-2 border-white inline-block;
    content: '';
  }
  &.arrow-left::after {
    @apply border-l-4 border-t-4 ml-4;
    transform: rotate(-45deg);
  }
  &.arrow-right::after {
    @apply border-r-4 border-b-4 mr-4;
    transform: rotate(-45deg);
  }
}
</style>
