<template>
  <div class="project-view">
    <div class="sidebar-wrapper">
      <div class="sidebar">
        <div class="selector-wrapper">
          <ProjectOption
            class="options selector"
            @click="
              () => (mobileProjectsDropdownOpen = !mobileProjectsDropdownOpen)
            "
            v-if="current"
            :title="current.title"
            :overview="current.overview"
            :logo="current.logo"
            :path="current._path"
            :current="true"
          />
        </div>

        <div
          :class="`options-wrapper ${
            mobileProjectsDropdownOpen && 'mob-menu-open'
          }`"
        >
          <ProjectOption
            :class="`options ${
              current && current._path === project._path && 'hide'
            }`"
            v-if="data"
            v-for="project in data"
            :path="project._path"
            :title="project.title"
            :overview="project.overview"
            :logo="project.logo"
            :current="route.path === project._path"
          />
        </div>
      </div>
    </div>

    <div class="project-content">
      <MarkdownContent />
    </div>
  </div>
</template>
<script setup lang="ts">
const { data } = await useAsyncData("projects", () =>
  queryContent("/projects").only(["title", "overview", "logo", "_path"]).find(),
);

const route = useRoute();

const current = computed(() =>
  data.value ? data.value.find((p) => p._path === route.path)! : null,
);

const mobileProjectsDropdownOpen = ref(false);
</script>
<style lang="scss" scoped>
@use "~/assets/style/util/index" as *;

.project-view {
  width: 100%;
  height: 100%;
  flex: 1;

  > .project-content {
    width: 100%;
    height: 100%;
    flex: 1;
  }

  > .sidebar-wrapper {
    width: 100%;
    max-width: 600px;
    display: flex;
    justify-content: center;

    > .sidebar {
      width: 100%;
      max-width: 600px;

      > .options-wrapper,
      > .selector-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
}

@media (max-width: 700px) {
  .project-view {
    display: flex;
    flex-direction: column;
    position: absolute;

    > .project-content {
      margin-top: 100px;
    }

    .selector-wrapper {
      z-index: 10;
      position: absolute;
      background-color: $bg-primary;

      > * {
        margin: 0.75rem;
      }
    }

    .options-wrapper {
      position: absolute;
      background-color: $bg-primary;
      width: 100vw;
      margin: 0;
      transition: 150ms;

      > * {
        margin: 0 0.75rem;

        &:last-child {
          margin-bottom: 0.75rem;
        }

        &:first-child {
          margin-top: 0.75rem;
        }
      }

      &.mob-menu-open {
        transform: translateY(100px);
      }

      &:not(.mob-menu-open) {
        transform: translateY(-500px);
      }
    }
  }
}

@media (min-width: 700px) {
  .project-view {
    display: grid;
    grid-template-columns: 1fr 3fr;

    .options-wrapper {
      margin: 1rem;
    }
  }
}
</style>
