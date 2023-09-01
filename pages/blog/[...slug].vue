<template>
  <div class="header-wrapper">
    <header>
      <p class="navigation">
        <NuxtLink to="/blog">Blog home</NuxtLink>
        {{ metadata ? `> ${metadata.title}` : "" }}
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
      <ContentDoc />
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "draft",
});

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
  justify-content: center;
  margin-top: 1rem;
  font-size: 0.9rem;

  header {
    display: flex;
  }

  .navigation {
    color: gray;

    > a {
      color: $txt-secondary;
    }
  }
}

@media (min-width: $size-mobile) {
  header {
    flex-direction: row;
    max-width: 1000px;
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
