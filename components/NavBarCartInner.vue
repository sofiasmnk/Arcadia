<template>
  <div
    id="inner"
    class="absolute border border-t-0 shadow-md right-0 sm:mr-1 w-screen sm:w-auto"
  >
    <div class="h-4" aria-hidden="true"></div>
    <div class="bg-white p-5 pt-0 relative z-50">
      <ol class="divide-y divide-brown-lighter">
        <li v-for="index in 3" :key="index" class="flex text-left py-4">
          <div class="w-24 p-1 bg-green-lighter border shadow-sm">
            <img
              src="~/assets/img/produtos/produto-01.png"
              class="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div class="flex-grow flex flex-col justify-between w-64 pl-3">
            <div class="flex justify-between items-start">
              <div>Nome do produto Nome do produto Nome do produto</div>
              <div>
                <button class="mt-1">
                  <IconClose class="text-green fill-current h-6 w-6 " />
                </button>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <ProductCount class="my-1 h-8" />
              <span class="font-semibold">R$25,00</span>
            </div>
          </div>
        </li>
      </ol>

      <hr class="mb-4 border-brown-lighter" aria-hidden="true" />

      <div class="text-right text-lg">
        Total: <span class="font-semibold">R$25,00</span>
      </div>

      <div class="flex mt-5">
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

      <div class="mt-5">
        Com um cadastro, você pode guardar seus dados para compras futuras.
        <p class="mt-2"><a href="/">Entrar</a> / <a href="/">Cadastrar</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import ProductCount from '@/components/ProductCount.vue'
import IconClose from '@/components/IconClose.vue'

export default {
  components: {
    BaseButton,
    ProductCount,
    IconClose
  }
}
</script>

<style lang="postcss" scoped></style>
