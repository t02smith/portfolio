<template>
  <NuxtLink
    :to="props.path"
    class="blog-post-card"
  >
    <h4>{{ props.recommended ? "⭐" : "" }}{{ props.title }}</h4>
    <p>{{ props.description }}</p>
  </NuxtLink>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    path: string;
    title: string;
    description: string;
    recommended?: boolean;
  }>(),
  {
    recommended: false,
  },
);
</script>
<style scoped lang="scss">
@use "~/assets/style/util/index" as *;

.blog-post-card {
  color: $txt-primary;

  > p {
    color: darken($txt-primary, 25%);

    &.recommended {
      color: yellow;
      font-weight: bold;
      font-size: 0.8rem;
    }
  }
}
</style>
