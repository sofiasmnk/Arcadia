<template>
  <router-link
    v-slot="{ href, route, navigate, isActive, isExactActive }"
    :to="url"
  >
    <div
      class="inline-block py-8 mx-1 text-center"
      :class="[isExactActive && 'active-link']"
    >
      <a class="py-6 px-5" :href="href" @click="navigate">{{ label }}</a>
    </div>
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
div {
  width: 100px;
}
a {
  @apply font-normal;
  @apply no-underline;
  @apply text-lg;
}
a:hover {
  @apply text-green;
  @apply underline;
}
.active-link,
div:hover {
  @apply bg-white;
}

.active-link a:hover {
  @apply no-underline;
}
</style>
