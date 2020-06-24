<template>
  <main>
    <BaseBreadcrumbs>
      <li><nuxt-link to="/">Início</nuxt-link></li>
      <li>Sobre</li>
    </BaseBreadcrumbs>
    <BaseSection class="overflow-hidden md:pr-8">
      <h1 class="w-full text-2xl font-bold p-4 mb-8">Quem somos?</h1>
      <div class="w-full md:w-1/2 px-4 mb-8">
        <p>
          Nós somos lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam sit amet rutrum quam. Fusce egestas fermentum dolor, ac
          imperdiet nisi rhoncus a. Pellentesque scelerisque consequat gravida.
          Duis enim mauris, finibus id rhoncus quis, tristique.
        </p>
        <p class="mt-4">
          Ut dictum ullamcorper mauris porta mollis. Integer nec velit placerat,
          mollis velit vel, posuere est. Morbi in neque eu dui pulvinar
          malesuada. Quisque sed erat eget augue efficitur accumsan eu non
          risus. Morbi varius, diam ut rutrum finibus, velit velit varius ex,
          vel condimentum ex augue quis ex.
        </p>
        <p class="mt-4">
          Nulla lorem odio, sagittis a ipsum in, malesuada auctor purus.
          Curabitur at fermentum velit. Donec sollicitudin urna id dignissim
          finibus. Sed consequat dolor nec tincidunt bibendum. Sed sagittis
          felis et neque porta, quis consectetur mauris aliquam. Cras et nulla
          vitae purus venenatis blandit ac et erat. Quisque faucibus, nulla
          vitae luctus elementum.
        </p>
      </div>
      <div
        v-lazy-container="{ selector: 'img' }"
        class="w-1/2 md:w-1/4 flex flex-wrap relative overflow-hidden px-4 rounded"
      >
        <img
          :data-src="require('~/assets/img/sobre1.jpg')"
          :data-loading="require('~/assets/img/sobre1.jpg?lqip')"
          alt="Ingredientes e ferramentas para a criação de cosméticos artesanais sobre uma mesa"
          class="md:absolute h-64 md:h-full w-full object-cover rounded"
        />
      </div>
      <div
        v-lazy-container="{ selector: 'img' }"
        class="w-1/2 md:w-1/4 flex flex-wrap relative overflow-hidden px-4 rounded"
      >
        <img
          :data-src="require('~/assets/img/sobre2.jpg')"
          :data-loading="require('~/assets/img/sobre2.jpg?lqip')"
          alt="Mulher escondendo o rosto atrás de folhas e verduras"
          class="md:absolute h-64 md:h-full w-full object-cover rounded"
        />
      </div>
      <div class="w-full lg:w-1/3 p-4 md:pr-0 mt-4">
        <div class="rounded border border-brown-lighter flex overflow-hidden">
          <div v-lazy-container="{ selector: 'img' }" class="h-40 w-1/3">
            <img
              :data-src="require('~/assets/img/marcela.jpg')"
              :data-loading="require('~/assets/img/marcela.jpg?lqip')"
              alt="Marcela acenando com a mão"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="p-4 w-2/3">
            <h2 class="text-lg font-semibold mb-2">Marcela</h2>
            <p>
              Nulla pulvinar ante non lorem sollicitudin, at iaculis nunc
              elementum.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/3 p-4 md:pr-0 self-end">
        <div class="rounded border border-brown-lighter flex overflow-hidden">
          <div v-lazy-container="{ selector: 'img' }" class="h-40 w-1/3">
            <img
              :data-src="require('~/assets/img/alessandra.jpg')"
              :data-loading="require('~/assets/img/alessandra.jpg?lqip')"
              alt="Alessandra tomando café"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="p-4 w-2/3">
            <h2 class="text-lg font-semibold mb-2">Alessandra</h2>
            <p>
              Nulla pulvinar ante non lorem sollicitudin, at iaculis nunc
              elementum.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/3 p-4 md:pr-0 self-end">
        <div class="rounded border border-brown-lighter flex overflow-hidden">
          <div v-lazy-container="{ selector: 'img' }" class="h-40 w-1/3">
            <img
              :data-src="require('~/assets/img/anamaria.jpg')"
              :data-loading="require('~/assets/img/anamaria.jpg?lqip')"
              alt="Ana Maria sorrindo para a câmera"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="p-4 w-2/3">
            <h2 class="text-lg font-semibold mb-2">Ana Maria</h2>
            <p>
              Nulla pulvinar ante non lorem sollicitudin, at iaculis nunc
              elementum.
            </p>
          </div>
        </div>
      </div>
    </BaseSection>

    <BaseSeparator />

    <BaseSection>
      <h1 class="w-full text-2xl font-bold p-4 mb-8">História</h1>
      <HistoryInfographic />
    </BaseSection>

    <BaseSeparator />

    <BaseSection>
      <h1 class="w-full text-2xl font-bold p-4 mb-8">Certificações</h1>
      <div class="w-full lg:w-1/3 px-4 flex items-center">
        <CertLeapingBunny aria-hidden="true" class="h-32 w-32" />
        <p class="w-64 p-4">
          Certificado Cruelty Free por Leaping Bunny® desde 2015.
        </p>
      </div>
      <div class="w-full lg:w-1/3 px-4 flex items-center">
        <CertEcoCert aria-hidden="true" class="h-32 w-32" />
        <p class="w-64 px-4">
          Certificado como produtor de cosméticos naturais e orgânicos pela
          EcoCert® desde 2016.
        </p>
      </div>
      <div class="w-full lg:w-1/3 px-4 flex items-center">
        <CertVegano aria-hidden="true" class="h-32 w-32 p-3" />
        <p class="w-64 px-4">
          Certificado Vegano pela Sociedade Vegetariana Brasileira desde 2014.
        </p>
      </div>
    </BaseSection>
  </main>
</template>

<script>
import BaseSection from '@/components/BaseSection.vue'
import BaseSeparator from '@/components/BaseSeparator.vue'
import BaseBreadcrumbs from '@/components/BaseBreadcrumbs.vue'
import HistoryInfographic from '@/components/HistoryInfographic.vue'
import CertLeapingBunny from '@/components/CertLeapingBunny.vue'
import CertEcoCert from '@/components/CertEcoCert.vue'
import CertVegano from '@/components/CertVegano.vue'

export default {
  components: {
    BaseSeparator,
    BaseBreadcrumbs,
    BaseSection,
    HistoryInfographic,
    CertLeapingBunny,
    CertEcoCert,
    CertVegano
  }
}
</script>
