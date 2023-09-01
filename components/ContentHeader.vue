<template>
  <div class="content-header">
    <div class="title">
      <h1>{{ props.title }}</h1>
      <BadgeGithubLink
        v-if="props.githubLink"
        :link="props.githubLink"
      />
      <BadgeNoGithubLink v-else-if="props.noGithubLink" />
    </div>
    <hr />
    <BadgeList :badges="props.badges" />
    <hr />
    <div class="authors-wrapper">
      <p>{{ props.authorPrefix }}</p>
      <BadgeAuthor
        v-for="author in props.authors"
        :name="author.name"
        :link="author.link"
        :role="author.role"
      />
    </div>
    <hr />
  </div>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    badges: Array<string>;
    title: string;
    authors: Array<Author>;
    authorPrefix?: string;

    // for github link to relevant repo if exists
    // box for no link may be shown
    githubLink?: string;
    noGithubLink?: boolean;
  }>(),
  {
    authorPrefix: "Completed by",
  },
);

export type Author = {
  name: string;
  link: string;
  role: string;
};
</script>
<style scoped lang="scss">
@use "~/assets/style/util/index" as *;

.content-header {
  display: flex;
  flex-direction: column;
  gap: 10px;

  > .authors-wrapper {
    display: flex;
    gap: 10px;

    align-items: center;
    flex-wrap: wrap;

    > p {
      align-self: flex-start;
      font-style: italic;
    }
  }
}

@media (max-width: $size-mobile) {
  .content-header {
    > *:last-child {
      margin-bottom: 0rem;
    }

    > .title {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    > .authors-wrapper {
      > p {
        display: none;
      }
    }
  }
}

@media (min-width: $size-mobile) {
  .content-header {
    > hr {
      display: none;
    }

    .authors-wrapper {
      margin-bottom: 1rem;
    }

    > .title {
      display: flex;

      > *:last-child:not(:only-child) {
        margin-left: auto;
      }
    }
  }
}
</style>
