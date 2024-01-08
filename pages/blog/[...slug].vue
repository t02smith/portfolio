<template>
  <div class="header-wrapper">
    <header>
      <p
        class="navigation"
        v-if="metadata"
      >
        <NuxtLink to="/blog">Blog home</NuxtLink>
        {{ `> ${metadata.title}` }}
      </p>
    </header>
  </div>

  <div class="md-page">
    <div class="md-content">
      <ContentHeader
        v-if="metadata"
        :badges="badges"
        :title="metadata.title"
        :authors="metadata.authors"
        authorPrefix="Written by"
      />
      <ContentDoc v-if="metadata" />
      <p v-else>Loading...</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const metadata = ref<any>(null);
const route = useRoute();

onMounted(async () => {
  metadata.value = await queryContent(route.path)
    .only(["recommended", "title", "draft", "authors", "badges"])
    .findOne();
});

const badges = computed(() => {
  if (!metadata.value) return [];

  let badgeList = [...metadata.value.badges];
  if (metadata.value.draft) badgeList.unshift("draft");
  if (metadata.value.recommended) badgeList.unshift("recommended");
  return badgeList;
});

onMounted(() => {});
</script>
<style lang="scss">
@use "~/assets/style/components/markdown.scss" as *;
</style>
<style scoped lang="scss">
@use "~/assets/style/util/index" as *;

.header-wrapper {
  display: flex;
  width: 100%;
  align-self: center;
  margin-top: 1rem;
  font-size: 0.9rem;

  header {
    display: flex;
  }

  .navigation {
    color: gray;
    max-width: 1000px;

    > a {
      color: $txt-secondary;
    }
  }
}

@media (min-width: $size-mobile) {
  .header-wrapper {
    max-width: 1000px;
  }

  header {
    flex-direction: row;
    width: 100%;
  }
}

@media (max-width: $size-mobile) {
  header {
    max-width: 100%;
    padding: 0 0.5rem;
    flex-direction: column;
    gap: 5px;
  }
}
</style>
