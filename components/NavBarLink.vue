<template>
  <router-link
    v-slot="{ href, route, navigate, isActive, isExactActive }"
    :to="url"
  >
    <a
      class="inline-block text-center mx-1  py-6 px-5"
      :class="[isExactActive && 'active-link']"
      :href="href"
      @click="navigate"
    >
      {{ label }}
    </a>
  </router-link>
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
a {
  width: 100px;
  height: 80px;
  @apply font-normal;
  @apply no-underline;
  @apply text-lg;
  transition: 300ms;
}
a:hover {
  @apply text-green;
  @apply underline;
  @apply bg-white;
  @apply bg-opacity-50;
}
.active-link {
  @apply bg-white;
}
.active-link:hover {
  @apply no-underline;
  @apply bg-opacity-100;
}
</style>
