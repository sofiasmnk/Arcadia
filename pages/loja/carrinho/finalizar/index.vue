<template>
  <main>
    <BaseBreadcrumbs>
      <li><nuxt-link to="/">Início</nuxt-link></li>
      <li><nuxt-link to="/loja">Loja</nuxt-link></li>
      <li><nuxt-link to="/loja">Carrinho</nuxt-link></li>
      <li>Finalizar compra</li>
    </BaseBreadcrumbs>

    <BaseSection>
      <div class="w-full lg:w-1/3  xl:w-1/4 p-4">
        <PurchaseProgress :purchase-step="purchaseStep" />
        <PurchaseSummary :item-list="itemList" />
      </div>
      <div class="w-full lg:w-2/3 xl:w-3/4 p-4 lg:pl-16 xl:pl-24">
        <div :class="[purchaseStep == 1 ? 'block' : 'hidden']">
          <div
            v-if="showWarning"
            class="w-full rounded bg-brown-lighter py-3 px-4 mb-8 flex justify-between items-center"
          >
            <p>
              Se você tiver um cadastro,
              <nuxt-link to="#">entre</nuxt-link> para carregar seus dados.
            </p>
            <button
              class="p-2"
              aria-label="Ocultar aviso"
              @click="closeWarning()"
            >
              <IconClose
                class="w-6 h-6 text-brown fill-current"
                aria-hidden="true"
              />
            </button>
          </div>
          <form
            id="dados"
            ref="dados"
            class="flex flex-wrap"
            onsubmit="return false"
          >
            <h2 class="w-full text-lg font-semibold p-2">Dados pessoais</h2>
            <div class="w-1/2">
              <label class="flex flex-col m-2">
                Nome
                <input
                  v-model="user.name"
                  class="mt-2"
                  type="text"
                  placeholder="Nome completo"
                  required
                />
              </label>
            </div>
            <div class="w-1/2">
              <label class="flex flex-col m-2 relative">
                Email
                <input
                  v-model="user.email"
                  class="mt-2"
                  name="email"
                  type="email"
                  placeholder="nome@email.com"
                  required
                />
              </label>
            </div>
            <div class="w-1/3">
              <label class="flex flex-col m-2 relative">
                CEP
                <input
                  ref="cepinput"
                  v-model="user.cep"
                  class="mt-2"
                  type="text"
                  pattern="[0-9]{8}"
                  placeholder="12345678"
                  required
                  @blur="validateCep"
                />
              </label>
            </div>
            <div class="w-1/3">
              <label class="flex flex-col m-2">
                Cidade
                <input
                  v-model="user.city"
                  class="mt-2"
                  type="text"
                  placeholder="Cidade"
                  :disabled="user.validCep"
                />
              </label>
            </div>
            <div class="w-1/3">
              <label class="flex flex-col m-2">
                Estado
                <input
                  v-model="user.state"
                  class="mt-2"
                  type="text"
                  placeholder="Estado"
                  :disabled="user.validCep"
                />
              </label>
            </div>
            <div class="w-1/2 sm:w-2/3">
              <label class="flex flex-col m-2">
                Rua
                <input
                  v-model="user.street"
                  class="mt-2"
                  type="text"
                  placeholder="Rua"
                  :disabled="user.validCep"
                />
              </label>
            </div>
            <div class="w-1/4 sm:w-1/6">
              <label class="flex flex-col m-2">
                Número
                <input
                  v-model="user.number"
                  class="mt-2"
                  type="text"
                  placeholder="123"
                  required
                />
              </label>
            </div>
            <div class="w-1/4 sm:w-1/6">
              <label class="flex flex-col m-2">
                Compl.
                <input
                  v-model="user.compl"
                  class="mt-2"
                  type="text"
                  placeholder="1A"
                />
              </label>
            </div>
            <div class="w-full">
              <label class="m-2 flex items-center">
                <input v-model="createAccount" type="checkbox" />
                <span class="ml-1">Criar cadastro</span>
              </label>
            </div>
            <div class="w-1/2" :class="[createAccount ? 'block' : 'hidden']">
              <label class="flex flex-col m-2 mt-0">
                Senha
                <input
                  class="mt-2"
                  type="password"
                  :required="createAccount"
                  placeholder="Senha"
                />
              </label>
            </div>
            <h2 class="w-full text-lg font-semibold p-2 mt-4">Entrega</h2>
            <div class="w-full">
              <label class="m-2 flex items-center">
                <input v-model="sameAddress" type="checkbox" />
                <span class="ml-1">Entregar no mesmo endereço</span>
              </label>
            </div>
            <div
              class="flex flex-wrap"
              :class="[sameAddress ? 'hidden' : 'block']"
            >
              <div class="w-1/3">
                <label class="flex flex-col m-2 relative">
                  CEP
                  <input
                    ref="deliverycepinput"
                    v-model="delivery.cep"
                    class="mt-2"
                    type="text"
                    pattern="[0-9]{8}"
                    placeholder="12345678"
                    :required="!sameAddress"
                    @blur="validateDeliveryCep"
                  />
                  <span class="reminder">CEP inválido</span>
                </label>
              </div>
              <div class="w-1/3">
                <label class="flex flex-col m-2">
                  Cidade
                  <input
                    v-model="delivery.city"
                    class="mt-2"
                    type="text"
                    placeholder="Cidade"
                    :disabled="delivery.validCep"
                  />
                </label>
              </div>
              <div class="w-1/3">
                <label class="flex flex-col m-2">
                  Estado
                  <input
                    v-model="delivery.state"
                    class="mt-2"
                    type="text"
                    placeholder="Estado"
                    :disabled="delivery.validCep"
                  />
                </label>
              </div>
              <div class="w-2/3">
                <label class="flex flex-col m-2">
                  Rua
                  <input
                    v-model="delivery.street"
                    class="mt-2"
                    type="text"
                    placeholder="Rua"
                    :disabled="delivery.validCep"
                  />
                </label>
              </div>
              <div class="w-1/6">
                <label class="flex flex-col m-2">
                  Número
                  <input
                    v-model="delivery.number"
                    class="mt-2"
                    type="text"
                    placeholder="123"
                    :required="!sameAddress"
                  />
                </label>
              </div>
              <div class="w-1/6">
                <label class="flex flex-col m-2">
                  Compl.
                  <input
                    v-model="delivery.compl"
                    class="mt-2"
                    type="text"
                    placeholder="1A"
                  />
                </label>
              </div>
            </div>
          </form>
          <div class="w-full p-2 mt-8 flex justify-end">
            <BaseButton type="submit" form="dados" @click.native="stepTwo">
              <span class="arrow-next">Pagamento</span>
            </BaseButton>
          </div>
        </div>

        <div :class="[purchaseStep == 2 ? 'block' : 'hidden']">
          <form
            id="pagamento"
            ref="pagamento"
            class="flex flex-wrap"
            onsubmit="return false"
          >
            <h2 class="w-full text-lg font-semibold p-2">Cartão de crédito</h2>
            <div class="w-2/3">
              <label class="flex flex-col m-2">
                Número do cartão
                <input
                  v-model="card.number"
                  class="mt-2 font-mono text-xs"
                  type="text"
                  pattern="[0-9]{16}"
                  placeholder="1234123412341234"
                  required
                />
              </label>
            </div>
            <div class="w-1/3">
              <label class="flex flex-col m-2">
                CVC
                <input
                  v-model="card.code"
                  class="mt-2 font-mono text-xs"
                  type="text"
                  pattern="[0-9]{3}"
                  placeholder="123"
                  required
                />
              </label>
            </div>
            <div class="w-2/3">
              <label class="flex flex-col m-2">
                Nome no cartão
                <input
                  v-model="card.name"
                  class="mt-2"
                  type="text"
                  placeholder="Nome"
                  required
                />
              </label>
            </div>
            <div class="w-1/3">
              <label class="flex flex-col m-2">
                Validade
                <input
                  v-model="card.date"
                  class="mt-2"
                  type="text"
                  placeholder="01/23"
                  required
                />
              </label>
            </div>
          </form>
          <div class="w-full p-2 mt-8 flex justify-between">
            <BaseButton type-secondary @click.native="prevStep">
              <span class="arrow-prev">Dados</span>
            </BaseButton>
            <BaseButton
              type="submit"
              form="pagamento"
              @click.native="stepThree"
            >
              <span class="arrow-next">Confirmação</span>
            </BaseButton>
          </div>
        </div>
        <div :class="[purchaseStep === 3 ? 'block' : 'hidden']">
          <h2 class="text-lg font-semibold p-2">Dados</h2>
          <div
            class="flex p-2 pr-0 mb-8 w-full lg:w-2/3 xl:w-1/2 justify-between"
          >
            <div>
              {{ user.name }} ({{ user.email }}) <br />
              {{ user.cep }} {{ user.city }} – {{ user.state }} <br />
              {{ user.street }} {{ user.number }} {{ user.compl }}
            </div>
            <div class="flex items-center ml-8">
              <BaseButton
                type-secondary
                size-small
                @click.native="purchaseStep = 1"
              >
                Editar
              </BaseButton>
            </div>
          </div>

          <h2 class="text-lg font-semibold p-2">Entrega</h2>
          <div
            class="flex p-2 pr-0 mb-8 w-full lg:w-2/3 xl:w-1/2 justify-between"
          >
            <div>
              {{ deliveryAddress.cep }} {{ deliveryAddress.city }} –
              {{ deliveryAddress.state }} <br />
              {{ deliveryAddress.street }} {{ deliveryAddress.number }}
              {{ deliveryAddress.compl }}
            </div>
            <div class="flex items-center ml-8">
              <BaseButton
                type-secondary
                size-small
                @click.native="purchaseStep = 1"
              >
                Editar
              </BaseButton>
            </div>
          </div>

          <h2 class="text-lg font-semibold p-2">Pagamento</h2>
          <div
            class="flex p-2 pr-0 mb-8 w-full lg:w-2/3 xl:w-1/2 justify-between"
          >
            <div>
              1 × {{ formattedTotal }} <br />
              Cartão de término {{ cardLastDigits }}
            </div>
            <div class="flex items-center ml-8">
              <BaseButton
                type-secondary
                size-small
                @click.native="purchaseStep = 2"
              >
                Editar
              </BaseButton>
            </div>
          </div>
          <BaseButton
            class="m-2 w-full lg:w-2/3 xl:w-1/2"
            @click.native="makePurchase()"
          >
            Confirmar pedido
          </BaseButton>
        </div>
      </div>
    </BaseSection>
  </main>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import IconClose from '@/components/IconClose.vue'
import BaseBreadcrumbs from '@/components/BaseBreadcrumbs.vue'
import BaseSection from '@/components/BaseSection.vue'
import BaseButton from '@/components/BaseButton.vue'
import PurchaseSummary from '@/components/PurchaseSummary.vue'
import PurchaseProgress from '@/components/PurchaseProgress.vue'

export default {
  components: {
    IconClose,
    BaseBreadcrumbs,
    BaseSection,
    BaseButton,
    PurchaseSummary,
    PurchaseProgress
  },
  data() {
    return {
      purchaseStep: 1,
      showWarning: true,
      validCep: false,
      validDeliveryCep: false,
      createAccount: false,
      sameAddress: true,
      user: {
        validCep: false,
        name: '',
        email: '',
        cep: '',
        city: '',
        state: '',
        street: '',
        number: '',
        compl: ''
      },
      delivery: {
        validCep: false,
        cep: '',
        city: '',
        state: '',
        street: '',
        number: '',
        compl: ''
      },
      card: {
        number: '',
        name: '',
        code: '',
        date: ''
      }
    }
  },
  computed: {
    ...mapState(['shoppingCart']),
    ...mapGetters({
      getProductById: 'products/getById'
    }),
    itemList() {
      return this.shoppingCart.map((item) => {
        return {
          product: this.getProductById(item.id),
          quantity: item.quantity
        }
      })
    },
    deliveryAddress() {
      if (this.sameAddress) return this.user
      else return this.delivery
    },
    cardLastDigits() {
      return this.card.number.slice(-4)
    },
    formattedTotal() {
      let total = 0
      this.itemList.forEach(
        (item) => (total += item.product.price * item.quantity)
      )
      const reais = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
      return reais.format(total)
    }
  },
  methods: {
    ...mapActions(['emptyCart']),
    stepTwo() {
      if (this.$refs.dados.checkValidity()) {
        this.purchaseStep = 2
      }
    },
    stepThree() {
      if (this.$refs.pagamento.checkValidity()) {
        this.purchaseStep = 3
      }
    },
    prevStep() {
      this.purchaseStep--
    },
    validateCep() {
      this.user.validCep = this.$refs.cepinput.checkValidity()
      if (this.user.validCep) {
        this.user.city = 'São Carlos'
        this.user.state = 'São Paulo'
        this.user.street = 'Av. Trabalhador São Carlense'
      }
    },
    validateDeliveryCep() {
      this.delivery.validCep = this.$refs.deliverycepinput.checkValidity()
      if (this.delivery.validCep) {
        this.delivery.city = 'São Carlos'
        this.delivery.state = 'São Paulo'
        this.delivery.street = 'Av. São Carlos'
      }
    },
    makePurchase() {
      this.emptyCart()
      this.$router.push({
        path: `/loja/carrinho/finalizar/sucesso`
      })
    },
    closeWarning() {
      this.showWarning = false
    }
  }
}
</script>

<style lang="postcss">
.reminder {
  @apply absolute right-0 hidden;
}

.arrow-next {
  &::after {
    @apply ml-1 mb-px border-white border-r-2 border-b-2 inline-block;
    padding: 0.2em;
    transform: rotate(-45deg);
    content: '';
  }
}

.arrow-prev {
  &::before {
    @apply mr-1 mb-px border-green border-l-2 border-t-2 inline-block;
    padding: 0.2em;
    transform: rotate(-45deg);
    content: '';
  }
}

input {
  &:invalid:not(:focus):not(:placeholder-shown) {
    @apply border-red-700 shadow-none;
    &::placeholder {
      @apply text-red-700;
    }
    & ~ .reminder {
      @apply block text-red-700;
    }
  }
  &:disabled {
    @apply text-gray-600 border-gray-600 bg-gray-300;
  }
}
</style>
