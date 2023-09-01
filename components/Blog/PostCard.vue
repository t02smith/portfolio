<template>
  <NuxtLink
    :to="props.path"
    class="blog-post-card"
  >
    <div class="title">
      <h4>{{ props.title }}</h4>
      <div class="badges">
        <Badge
          v-if="props.recommended"
          name="recommended"
        />
        <Badge
          v-if="props.draft"
          name="draft"
        />
      </div>
    </div>

    <p>{{ props.description }}</p>
  </NuxtLink>
  <hr />
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
  gap: 0.5rem;
  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    gap: 8px;

    .badges {
      display: flex;
      gap: 0.5rem;
    }
  }

  h4 {
    font-size: 1.2rem;
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

@media (max-width: $size-mobile) {
  .title {
    flex-direction: column;

    > .badges {
      flex-direction: row;
      font-size: 0.8rem;
    }
  }
}

@media (min-width: $size-mobile) {
  .title {
    flex-direction: row;

    > .badges {
      margin-left: auto;
    }
  }

  hr {
    display: none;
  }
}
</style>
