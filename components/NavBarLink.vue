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
}
a:hover {
  @apply text-green;
  @apply underline;
}
.active-link,
a:hover {
  @apply bg-white;
}
.active-link:hover {
  @apply no-underline;
}
</style>
