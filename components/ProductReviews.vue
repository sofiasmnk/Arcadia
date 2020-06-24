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
      <BaseButton class="w-full my-4" type-secondary size-small>
        Avaliar
      </BaseButton>
    </div>
    <ul>
      <li class="mt-4 w-full">
        <h3 class="flex items-center">
          <StarRating size-small class="text-brown fill-current mr-2" />
          Andrea <span class="mx-2">–</span>
          <span class="text-sm text-gray-600 self-end">São Paulo SP</span>
        </h3>
        <p class="mt-4">
          Mauris erat sapien, consectetur eget tellus nec, gravida vulputate mi.
          Curabitur nisi est, tempor volutpat purus nec, efficitur dictum nunc.
          Proin non lectus dolor. Donec a arcu nunc. Nam id maximus risus. Nam a
          dui lorem. Nullam risus sapien, iaculis at pretium et, pellentesque
          non felis. Nullam at scelerisque urna.
        </p>
      </li>
      <li class="mt-8 w-full">
        <h3 class="flex items-center">
          <StarRating size-small class="text-brown fill-current mr-2" />
          Solange <span class="mx-2">–</span>
          <span class="text-sm text-gray-600 self-end">Belo Horizonte MG</span>
        </h3>
        <p class="mt-4">
          Mauris erat sapien, consectetur eget tellus nec, gravida vulputate mi.
          Curabitur nisi est, tempor volutpat purus nec, efficitur dictum nunc.
          Proin non lectus dolor. Donec a arcu nunc. Nam id maximus risus. Nam a
          dui lorem. Nullam risus sapien, iaculis at pretium et, pellentesque
          non felis. Nullam at scelerisque urna.
        </p>
      </li>
      <li class="mt-8 w-full">
        <h3 class="flex items-center">
          <StarRating size-small class="text-brown fill-current mr-2" />
          M.L <span class="mx-2">–</span>
          <span class="text-sm text-gray-600 self-end">Ibaté SP</span>
        </h3>
        <p class="mt-4">
          Mauris erat sapien, consectetur eget tellus nec, gravida vulputate mi.
          Curabitur nisi est, tempor volutpat purus nec, efficitur dictum nunc.
          Proin non lectus dolor. Donec a arcu nunc. Nam id maximus risus. Nam a
          dui lorem. Nullam risus sapien, iaculis at pretium et, pellentesque
          non felis. Nullam at scelerisque urna.
        </p>
      </li>
    </ul>
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
