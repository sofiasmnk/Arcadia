<template>
  <div
    id="inner"
    class="absolute border border-t-0 shadow-md right-0 sm:mr-1 w-screen sm:w-auto"
  >
    <div class="h-4" aria-hidden="true"></div>
    <div class="bg-white p-4 pt-0 relative z-50">
      <ol>
        <li v-for="index in 3" :key="index" class="flex text-left p-1">
          <div class="w-24 p-1 bg-green-lighter border shadow-sm">
            <img
              src="~/assets/img/produtos/produto-01.png"
              class="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div class="flex-grow sm:w-64 px-3">Nome do produto</div>
          <div>R$25,00</div>
        </li>
      </ol>

      <hr class="my-5 border-brown-lighter" aria-hidden="true" />

      <div>Total: R$25,00</div>

      <div class="flex mt-4">
        <div class="w-1/2 pr-2">
          <BaseButton class="w-full" type-secondary="true" size-small="true">
            Ver carrinho
          </BaseButton>
        </div>
        <div class="w-1/2 pl-2">
          <BaseButton class="w-full" size-small="true">
            Finalizar compra
          </BaseButton>
        </div>
      </div>

      <hr class="my-5 border-brown-lighter" aria-hidden="true" />

      <div>
        Com um cadastro, você pode guardar seus dados para compras futuras.
        <p class="mt-2"><a href="/">Entrar</a> / <a href="/">Cadastrar</a></p>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
  components: {
    BaseButton
  }
}
</script>

<style lang="postcss" scoped></style>
