<template>
  <NuxtLink
    :to="props.path"
    class="blog-post-card"
  >
    <div class="title">
      <h4>{{ props.title }}</h4>
      <BadgeRecommended v-if="props.recommended" />
      <BadgeDraft v-if="props.draft" />
    </div>

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
    draft?: boolean;
  }>(),
  {
    recommended: false,
    draft: false,
  },
);
</script>
<style scoped lang="scss">
@use "~/assets/style/util/index" as *;

.blog-post-card {
  color: $txt-primary;
  transition: 150ms;
  padding: 5px 10px;

  .title {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &:hover {
    text-decoration: none;
    background-color: lighten($bg-primary, 5%);
    border-radius: 6px;

    h4 {
      color: $txt-secondary;
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
