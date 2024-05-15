<template>
  <NuxtLink
    :to="props.path"
    class="blog-post-card"
  >
    <div class="title">
      <h4>{{ props.title }}</h4>
    </div>
    <BadgeList :badges="shownBadges" />
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
    badges: string[];
  }>(),
  {
    recommended: false,
    draft: false,
  },
);

const shownBadges = computed(() => {
  let badges = [...props.badges.slice(0, 3)];
  if (props.draft) badges.unshift("draft");
  if (props.recommended) badges.unshift("recommended");
  return badges;
});
</script>
<style lang="scss">
.blog-post-card {
  .badge {
    font-size: 0.8rem;

    .icon {
      font-size: 1em;
    }
  }
}
</style>
<style scoped lang="scss">
@use "@/assets/style/util/index" as *;

.blog-post-card {
  color: $txt-primary;
  transition: 150ms;
  padding: 5px 10px;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 1.2rem;
  }

  &:hover {
    text-decoration: none;
    background-color: lighten($bg-primary, 5%);
    border-radius: 6px;

    h4 {
      color: $txt-secondary;
      text-decoration: underline;
    }

    > p {
      color: white;
    }
  }

  > p {
    color: darken($txt-primary, 25%);
  }
}

@media (min-width: $size-mobile) {
  hr {
    display: none;
  }
}
</style>
