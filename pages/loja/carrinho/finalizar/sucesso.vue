<template>
  <main>
    <BaseSection>
      <div class="w-full p-4 text-center">
        <h1 class="text-2xl font-bold">Compra finalizada</h1>
        <p class="mt-4">
          Você receberá uma confirmação deste pedido por email.
        </p>
        <nuxt-link class="mt-4 block" to="/loja">Continue comprando</nuxt-link>
      </div>
    </BaseSection>
  </main>
</template>

<script>
import BaseSection from '@/components/BaseSection.vue'

export default {
  components: {
    BaseSection
  }
}
</script>
