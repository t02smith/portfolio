<template>
  <NuxtLink
    :to="props.path"
    class="blog-post-card"
  >
    <h4 :class="props.recommended ? 'recommended' : ''">
      {{ props.recommended ? "⭐" : "" }}{{ props.title }}
    </h4>
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
  transition: 150ms;
  padding: 5px 10px;

  &:hover {
    text-decoration: none;
    background-color: lighten($bg-primary, 5%);
    border-radius: 6px;

    > h4 {
      color: $txt-secondary;

      &.recommended {
        color: yellow;
      }
    }

    > p {
      color: white;
    }
  }

  > p {
    color: darken($txt-primary, 25%);
  }
}
</style>
