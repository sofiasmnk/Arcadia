<template>
  <div class="w-full p-4">
    <div class="flex items-center">
      <div class="flex items-center">
        <h2 class="text-xl font-semibold">Avaliações</h2>
        <span class="ml-2 text-gray-600">(5)</span>
      </div>
      <div class="flex items-center ml-8">
        <span class="font-semibold text-brown text-lg">5.0</span>
        <StarRating class="text-brown fill-current ml-2" />
      </div>
    </div>
    <div class="mt-4 w-32">
      <BaseButton class="w-full" :type-secondary="true" :size-small="true"
        >Avaliar</BaseButton
      >
    </div>
    <div class="mt-4 w-full">
      <h3>Andrea</h3>
    </div>
  </div>
</template>

<script>
import StarRating from '@/components/StarRating.vue'
import BaseButton from '@/components/BaseButton.vue'
export default {
  components: {
    StarRating,
    BaseButton
  }
}
</script>

<style lang="postcss" scoped></style>
