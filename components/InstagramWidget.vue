<template>
  <div
    v-lazy-container="{ selector: 'img' }"
    class="flex flex-wrap w-full px-2"
  >
    <div class="p-2 w-1/2 sm:w-1/3 lg:w-1/6">
      <div class="relative ratio-square">
        <img
          class="absolute w-full h-full object-cover rounded"
          :data-src="require('~/assets/img/instagram/instagram-1.jpg')"
          :data-loading="require('~/assets/img/instagram/instagram-1.jpg?lqip')"
          alt=""
        />
      </div>
    </div>
    <div class="p-2 w-1/2 sm:w-1/3 lg:w-1/6">
      <div class="relative ratio-square">
        <img
          class="absolute w-full h-full object-cover rounded"
          :data-src="require('~/assets/img/instagram/instagram-2.jpg')"
          :data-loading="require('~/assets/img/instagram/instagram-2.jpg?lqip')"
          alt=""
        />
      </div>
    </div>
    <div class="p-2 w-1/2 sm:w-1/3 lg:w-1/6">
      <div class="relative ratio-square">
        <img
          class="absolute w-full h-full object-cover rounded"
          :data-src="require('~/assets/img/instagram/instagram-3.jpg')"
          :data-loading="require('~/assets/img/instagram/instagram-3.jpg?lqip')"
          alt=""
        />
      </div>
    </div>
    <div class="p-2 w-1/2 sm:w-1/3 lg:w-1/6">
      <div class="relative ratio-square">
        <img
          class="absolute w-full h-full object-cover rounded"
          :data-src="require('~/assets/img/instagram/instagram-4.jpg')"
          :data-loading="require('~/assets/img/instagram/instagram-4.jpg?lqip')"
          alt=""
        />
      </div>
    </div>
    <div class="p-2 w-1/2 sm:w-1/3 lg:w-1/6">
      <div class="relative ratio-square">
        <img
          class="absolute w-full h-full object-cover rounded"
          :data-src="require('~/assets/img/instagram/instagram-5.jpg')"
          :data-loading="require('~/assets/img/instagram/instagram-5.jpg?lqip')"
          alt=""
        />
      </div>
    </div>
    <div class="p-2 w-1/2 sm:w-1/3 lg:w-1/6">
      <div class="relative ratio-square">
        <img
          class="absolute w-full h-full object-cover rounded"
          :data-src="require('~/assets/img/instagram/instagram-6.jpg')"
          :data-loading="require('~/assets/img/instagram/instagram-6.jpg?lqip')"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss">
.ratio-square {
  padding-bottom: 100%;
}
</style>
