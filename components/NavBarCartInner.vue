<template>
  <div class="p-4 z-40">
    <table class="table-fixed w-full">
      <thead class="sr-only">
        <tr>
          <th scope="column">Imagem</th>
          <th scope="column">Produto</th>
          <th scope="column">Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="index in 3"
          :key="index"
          class="flex items-center text-left p-1"
        >
          <td>
            <div class="h-20 w-20 p-1 border shadow-sm">
              <img
                src="~/assets/img/produtos/produto-01.png"
                class="h-full w-full object-cover"
                alt=""
              />
            </div>
          </td>
          <th scope="row" class="flex-grow self-start px-3">
            Nome do produto
          </th>
          <td>R$25,00</td>
        </tr>
      </tbody>
    </table>
    <BaseButton>test</BaseButton>
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
