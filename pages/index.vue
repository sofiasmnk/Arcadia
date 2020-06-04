<template>
  <main>
    <section class="flex flex-wrap container mx-auto relative px-10">
      <p class="w-full lg:w-1/2 pb-8 lg:pr-8">
        <span class="text-lg font-semibold">
          Nós somos lorem ipsum dolor sit amet,
        </span>
        consectetur adipiscing elit. Aliquam sit amet rutrum quam. Fusce egestas
        fermentum dolor, ac imperdiet nisi rhoncus a. Pellentesque scelerisque
        consequat gravida. Duis enim mauris, finibus id rhoncus quis, tristique.
      </p>
      <img
        class="w-full lg:w-1/2 h-48 lg:h-64 object-cover object-top rounded over"
        src="~assets/img/home.jpg"
        alt=""
      />
    </section>

    <hr class="my-10" aria-hidden="true" />

    <section class="flex flex-wrap container mx-auto relative px-6 -m-4">
      <p class="w-1/2 xl:w-1/4 p-4">
        <span class="text-lg font-semibold">
          Explore nossos produtos,
        </span>
        consectetur adipiscing elit. Aliquam sit amet rutrum quam. Fusce egestas
        fermentum dolor, ac imperdiet nisi rhoncus a.
      </p>
      <div v-for="index in 7" :key="index" class="w-1/2 xl:w-1/4 p-4">
        <ProductCard />
      </div>
    </section>

    <hr class="my-10 border-brown-lighter" aria-hidden="true" />
  </main>
</template>

<script>
export default {}
</script>

<style lang="pcss"></style>
