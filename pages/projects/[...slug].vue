<template>
  <div :class="`project-view ${mobileProjectsDropdownOpen ? 'no-scroll' : ''}`">
    <div class="sidebar-wrapper">
      <div
        class="sidebar"
        v-if="!!data"
      >
        <div class="selector-wrapper">
          <ProjectOption
            class="options selector"
            @click="
              () => (mobileProjectsDropdownOpen = !mobileProjectsDropdownOpen)
            "
            v-if="current"
            :title="current.shortTitle ? current.shortTitle : current.title"
            :description="
              current.description.length > 80
                ? `${current.description.slice(0, 80)}...`
                : current.description
            "
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
            v-for="project in data.filter((p) => p._path !== '/projects')"
            :path="project._path"
            :title="project.shortTitle ? project.shortTitle : project.title"
            :description="
              project.description.length > 80
                ? `${project.description.slice(0, 80)}...`
                : project.description
            "
            :logo="project.logo"
            :current="route.path === project._path"
          />
        </div>
      </div>
    </div>

    <div
      class="overlay"
      v-if="mobileProjectsDropdownOpen"
      @click="mobileProjectsDropdownOpen = false"
    ></div>

    <div class="project-content">
      <div class="md-page">
        <div
          class="md-content"
          v-if="current"
        >
          <div
            class="title"
            v-if="current"
          >
            <div class="row">
              <h1>{{ current.title }}</h1>
              <BadgeGithubLink
                v-if="current.link"
                :link="current.link"
              />
              <BadgeNoGithubLink v-else />
            </div>
            <hr />
            <BadgeList
              :badges="current.tools"
              v-if="current.tools"
            />
            <hr />
            <div
              class="authors-wrapper"
              v-if="current.authors && current.authors.length > 0"
            >
              <p>Completed by</p>
              <BadgeAuthor
                v-for="author in current.authors"
                :name="author.name"
                :link="author.link"
                :role="author.role"
              />
            </div>
            <hr />
          </div>
          <ContentDoc />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const data = ref<any>();
onMounted(async () => {
    data.value = await queryContent("/projects")
      .only([
        "title",
        "shortTitle",
        "description",
        "logo",
        "_path",
        "authors",
        "link",
        "tools",
      ])
      .find()
})

const route = useRoute();

const current = computed(() =>
  data.value ? data.value.find((p) => p._path === route.path)! : null,
);

const mobileProjectsDropdownOpen = ref(false);
</script>
<style lang="scss">
@use "~/assets/style/components/markdown.scss" as *;
</style>
<style lang="scss" scoped>
@use "~/assets/style/util/index" as *;
@use "~/assets/style/components/overlay" as *;

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
      z-index: 10;

      > .options-wrapper,
      > .selector-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
}

.authors-wrapper {
  display: flex;
  gap: 10px;

  align-items: center;
  flex-wrap: wrap;

  > p {
    align-self: flex-start;
    font-style: italic;
  }
}

.title {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media (max-width: $size-mobile) {
  .no-scroll {
    overflow-y: hidden;
  }

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
      margin-top: 0.75rem;
      margin-bottom: 0.75rem;

      > * {
        margin: 0 0.75rem;
      }

      &.mob-menu-open {
        transform: translateY(100px);
      }

      &:not(.mob-menu-open) {
        transform: translateY(-500px);
      }
    }
  }

  .title {
    > *:last-child {
      margin-bottom: 0rem;
    }

    > .row {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }

  .authors-wrapper {
    > p {
      display: none;
    }
  }
}

@media (min-width: $size-mobile) {
  .project-view {
    display: grid;
    grid-template-columns: 1fr 3fr;

    .options-wrapper {
      margin: 1rem;
    }
  }

  .title {
    > hr {
      display: none;
    }

    .authors-wrapper {
      margin-bottom: 1rem;
    }

    > .row {
      display: flex;

      > *:last-child {
        margin-left: auto;
      }
    }
  }

  .overlay {
    display: none;
  }
}
</style>
