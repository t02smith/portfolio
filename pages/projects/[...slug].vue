<template>
  <div class="project-view">
    <div class="sidebar-wrapper">
      <div class="sidebar">
        <ProjectOption v-if="data" v-for="project in data" :path="project._path" :title="project.title" :overview="project.overview" :logo="project.logo" :current="route.path === project._path" />

      </div>
    </div>

    <div class="project-content">
      <MarkdownContent />

    </div>
  </div>
</template>
<script setup lang="ts">

const { data } = await useAsyncData(
  "projects",
  () => queryContent("/projects").only(['title', 'overview', 'logo', '_path']).find()
);

const route = useRoute();

</script>
<style lang="scss" scoped>
.project-view {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;

  >.project-content {
    width: 100%;
  }

  >.sidebar-wrapper {
    width: 100%;
    max-width: 600px;
    display: flex;
    justify-content: center;


    >.sidebar {
      width: 100%;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 1rem;
    }
  }

}
</style>