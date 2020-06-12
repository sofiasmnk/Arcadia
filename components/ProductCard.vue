<template>
  <div
    class="relative border border-brown-lighter rounded
    cursor-pointer transition duration-200 hover:shadow-md"
  >
    <img
      class="h-32 w-full object-cover rounded rounded-b-none "
      src="~assets/img/produtos/produto-01.png"
      alt=""
    />
    <div class="p-4">
      <h5 class="text-lg">
        <a
          href="/"
          class="text-black font-semibold no-underline hover:underline hover:text-black"
          >Nome do produto</a
        >
      </h5>
      <div class="flex items-center mt-3">
        <span
          class="rounded inline-block px-2 py-1 bg-brown-lighter font-semibold"
        >
          R$25,00
        </span>
        <StarRating class="pl-4 text-brown" />
      </div>
    </div>
    <button
      class="absolute right-0 -mt-5 mr-5 z-40
      flex p-2 bg-green rounded-full
      transition duration-200 hover:bg-green-light"
    >
      <IconCart
        aria-hidden="true"
        class="h-6 w-6 text-white fill-current self-center"
      />
      <span class="sr-only">Adicionar ao carrinho</span>
    </button>
  </div>
</template>

<script>
import IconCart from '@/components/IconCart.vue'
import StarRating from '@/components/StarRating.vue'

export default {
  components: {
    IconCart,
    StarRating
  }
}
</script>
