<template>
  <main>
    <section class="flex flex-wrap container mx-auto relative px-10">
      <div class="w-full lg:w-1/2 pb-8 lg:pr-8">
        <h2 class="inline text-lg font-semibold">
          Nós somos lorem ipsum dolor sit amet,
        </h2>
        consectetur adipiscing elit. Aliquam sit amet rutrum quam. Fusce egestas
        fermentum dolor, ac imperdiet nisi rhoncus a. Pellentesque scelerisque
        consequat gravida. Duis enim mauris, finibus id rhoncus quis, tristique.
        <a href="/sobre">Saiba mais</a>
      </div>
      <img
        class="w-full lg:w-1/2 h-48 lg:h-64 object-cover object-top rounded over"
        src="~assets/img/home.jpg"
        alt=""
      />
    </section>

    <BaseSeparator />

    <section class="flex flex-wrap container mx-auto relative px-6 -m-4">
      <div class="w-1/2 xl:w-1/4 p-4">
        <h2 class="inline text-lg font-semibold">
          Explore nossos produtos,
        </h2>
        consectetur adipiscing elit. Aliquam sit amet rutrum quam. Fusce egestas
        fermentum dolor, ac imperdiet nisi rhoncus a.
      </div>
      <div v-for="index in 7" :key="index" class="w-1/2 xl:w-1/4 p-4">
        <ProductCard />
      </div>
    </section>

    <BaseSeparator />
  </main>
</template>

<script>
export default {}
</script>

<style lang="pcss"></style>
