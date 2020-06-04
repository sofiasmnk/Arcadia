<template>
  <div class="border border-brown-light rounded relative">
    <img
      class="h-32 w-full object-cover rounded rounded-b-none "
      src="~assets/img/produtos/produto-01.png"
      alt=""
    />
    <div class="p-4">
      <h5 class="text-lg font-semibold">Nome do produto</h5>
      <div class="flex items-center mt-3">
        <span
          class="rounded inline-block px-2 py-1 bg-brown-lighter font-semibold"
        >
          R$25,00
        </span>
        <StarRating class="pl-4 text-brown" />
      </div>
    </div>
    <button class="absolute right-0 -mt-5 mr-5 bg-green rounded-full p-2">
      <svg
        aria-hidden="true"
        class="w-5 h-5 text-white fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped></style>
