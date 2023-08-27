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
      <div
        v-if="metadata"
        class="blog-post-title"
      >
        <h1>{{ metadata.title }}</h1>
        <div class="title-small">
          <BadgeRecommended v-if="metadata.recommended" />
          <p v-if="metadata.recommended">•</p>
          <BadgeDraft v-if="metadata.draft" />
          <p v-if="metadata.draft">•</p>
          <p class="author">Written by Tom Smith</p>
        </div>
      </div>
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
    .only(["recommended", "title", "draft"])
    .findOne();
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
    align-items: center;
  }

  .navigation {
    color: gray;

    > a {
      color: $txt-secondary;
    }
  }

  .recommend {
    color: yellow;
    font-weight: bold;
    margin-left: auto;
  }
}

.blog-post-title {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  > .title-small {
    display: flex;
    align-items: center;
    gap: 3px;
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
  .header-wrapper {
    flex-direction: column;
  }

  header {
    max-width: 100%;
    padding: 0 0.5rem;
    flex-direction: column;
    gap: 5px;

    .recommend {
      margin-left: none;
      margin-right: auto;
    }
  }
}
</style>
