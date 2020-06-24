<template>
  <main>
    <BaseBreadcrumbs>
      <li><nuxt-link to="/">Início</nuxt-link></li>
      <li>Contato</li>
    </BaseBreadcrumbs>
    <BaseSection>
      <h1 class="w-full text-2xl font-bold p-4 mb-8">Entre em contato</h1>
      <div class="w-full lg:w-2/3 pl-2 pr-4">
        <form class="flex flex-wrap">
          <div class="w-1/2">
            <label class="flex flex-col m-2">
              Nome
              <input class="mt-2" type="text" placeholder="Nome" />
            </label>
          </div>
          <div class="w-1/2">
            <label class="flex flex-col m-2">
              Email
              <input class="mt-2" type="email" placeholder="nome@email.com" />
            </label>
          </div>
          <div class="w-full">
            <label class="flex flex-col m-2">
              Título
              <input class="mt-2" type="text" placeholder="Título" />
            </label>
          </div>
          <div class="w-full">
            <label class="flex flex-col m-2">
              Mensagem
              <input class="mt-2 h-48" type="textarea" />
            </label>
          </div>
        </form>
        <BaseButton class="m-2">Enviar</BaseButton>
      </div>
      <div class="w-full lg:w-1/3 px-4">
        <address class="mt-6 lg:ml-6 not-italic">
          <p>
            Rua Bernardo Coutinho, 690 <br />
            Petrópolis – RJ
          </p>

          <p class="mt-4">
            contato@arcadia.com.br <br />
            (24) 99815-4221
          </p>
        </address>
      </div>
    </BaseSection>
  </main>
</template>

<script>
import BaseBreadcrumbs from '@/components/BaseBreadcrumbs.vue'
import BaseSection from '@/components/BaseSection.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  components: {
    BaseBreadcrumbs,
    BaseSection,
    BaseButton
  }
}
</script>

<style lang="postcss" scoped></style>
