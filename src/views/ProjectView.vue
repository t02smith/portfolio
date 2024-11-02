<template>
  <div :class="`project-view ${mobileProjectsDropdownOpen ? 'no-scroll' : ''}`">
    <div class="sidebar-wrapper">
      <div
        class="sidebar"
      >
        <div class="selector-wrapper">
          <ProjectOption
            class="options selector"
            @click="
              () => (mobileProjectsDropdownOpen = !mobileProjectsDropdownOpen)
            "
            v-if="projectInfo"
            :title="projectInfo.title ? projectInfo.title : projectInfo.title"
            :description="
              projectInfo.description.length > 80
                ? `${projectInfo.description.slice(0, 80)}...`
                : projectInfo.description
            "
            :logo="projectInfo.logo"
            :path="`/projects/${projectInfo.key}`"
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
              projectInfo && projectInfo.key === project.key && 'hide'
            }`"
            v-for="project in projects"
            v-bind:key="project.key"
            :path="`/projects/${project.key}`"
            :title="project.title"
            :description="
              project.description.length > 80
                ? `${project.description.slice(0, 80)}...`
                : project.description
            "
            :logo="project.logo"
            :current="projectInfo.key === project.key"
            @navigate="navigate(project.key)"
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
          v-if="projectInfo"
        >
          <div
            class="title"
            v-if="projectInfo"
          >
            <div class="row">
              <h1>{{ projectInfo.title }}</h1>
              <GithubBadge
                v-if="projectInfo.link"
                :link="projectInfo.link"
              />
              <NoGithubBadge v-else />
            </div>
            <hr />
            <BadgeList
              :badges="projectInfo.tools"
              v-if="projectInfo.tools"
            />
            <hr />
            <div
              class="authors-wrapper"
              v-if="projectInfo.authors && projectInfo.authors.length > 0"
            >
              <p>Completed by</p>
              <AuthorBadge
                v-for="author in projectInfo.authors"
                :key="author.name"
                :name="author.name"
                :link="author.link"
                :role="author.role"
              />
            </div>
            <hr />
            <div v-html="renderedProjectContent"></div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { projects } from "@/data/projects";
import BadgeList from "@/components/badge/BadgeList.vue";
import ProjectOption from "@/components/project/ProjectOption.vue";
import markdownit from 'markdown-it'
import AuthorBadge from "@/components/badge/AuthorBadge.vue";
import GithubBadge from "@/components/badge/GithubBadge.vue";
import NoGithubBadge from "@/components/badge/NoGithubBadge.vue";

const route = useRoute();

function navigate(key: number): void {
  projectInfo.value = projects[key];
  getContent(projectInfo.value.file)
  mobileProjectsDropdownOpen.value = false;
}

async function getContent(filename: string): Promise<void> {
  const response = await fetch(`/projects/${filename}`);
  projectContent.value = await response.text();
}

const mobileProjectsDropdownOpen = ref(false);
const projectInfo = ref();
const projectContent = ref<string | undefined>(undefined);

const renderedProjectContent = computed(() => {
  if (!projectContent.value) return '';

  const md = markdownit({
    html: false,
    linkify: true,

  });
  return md.render(projectContent.value);
})

navigate(parseInt(route.params['key'] as string));

</script>
<style lang="scss">
@use "../assets/markdown.scss" as *;
</style>
<style lang="scss" scoped>
@use "../assets/util/index" as *;
@use "../assets/overlay" as *;

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
      margin-top: 125px;
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
      transition: 150ms;
      margin: 0.75rem 0;

      > * {
        margin: 0 0.75rem;
      }

      &.mob-menu-open {
        transform: translateY(120px);
      }

      &:not(.mob-menu-open) {
        transform: translateY(-500px);
      }
    }
  }

  .title {
    > *:last-child {
      margin-bottom: 0;
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

