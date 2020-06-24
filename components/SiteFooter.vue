<template>
  <footer class="bg-green-lighter mt-20 text-sm bottom-0">
    <div class="flex flex-wrap container p-4 mx-auto">
      <address class="w-2/3 p-4 not-italic lg:flex">
        <p>
          Rua Bernardo Coutinho, 690 <br />
          Petrópolis – RJ
        </p>

        <p class="mt-4 lg:mt-0 lg:ml-8">
          contato@arcadia.com.br <br />
          (24) 99815-4221
        </p>
      </address>
      <div class="w-1/3 p-4">
        <FooterSocialMedia class="float-right" />
      </div>
      <div class="w-full text-center my-4">
        © Arcádia Cosméticos Naturais. Todos os direitos reservados .
      </div>
    </div>
  </footer>
</template>

<script>
import FooterSocialMedia from '@/components/FooterSocialMedia.vue'
export default {
  components: {
    FooterSocialMedia
  }
}
</script>

<style lang="postcss" scoped></style>
