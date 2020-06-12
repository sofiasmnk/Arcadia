<template>
  <nuxt-link
    v-slot="{ href, route, navigate, isActive, isExactActive }"
    :to="url"
  >
    <a
      class="nav-link inline-block text-center lg:mx-1 py-6 px-5 h-20 w-full lg:w-24"
      :class="{ 'active-link': isExactActive }"
      :href="href"
      @click="navigate"
    >
      {{ label }}
    </a>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Link'
    },
    url: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style lang="postcss" scoped>
.nav-link {
  @apply font-normal no-underline text-lg transition duration-200;
}
.nav-link:hover {
  @apply text-green underline bg-white bg-opacity-50;
}
.active-link {
  @apply bg-white;
}
.active-link:hover {
  @apply no-underline bg-opacity-100;
}
</style>
