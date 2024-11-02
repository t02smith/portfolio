<template>
  <PageWrapper class="projects-home">
    <header>
      <h1>🏗️ My Projects</h1>
      <p>
        This page contains a selection of some of my personal favourite projects
        I've worked on in my spare time or through university. Most of these
        projects will have source code available for you to see on GitHub.
      </p>
    </header>
    <hr />
    <div
      v-if="projects"
      class="projects-wrapper"
    >
      <RouterLink
        v-for="project in projects"
        v-bind:key="project.key"
        :to="`/projects/${project.key}`"
        class="project"
      >
        <img
          :src="project.logo"
          alt=""
        />
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <BadgeList :badges="project.tools.slice(0, 3)" />
          <p>{{ project.description }}</p>
        </div>
      </RouterLink>
    </div>
    <p v-else>Loading...</p>
  </PageWrapper>
</template>
<script setup lang="ts">
import { projects } from "@/data/projects";
import PageWrapper from "@/components/PageWrapper.vue";
import BadgeList from "@/components/badge/BadgeList.vue";
</script>
<style lang="scss">
.projects-wrapper > .project {
  .badge {
    font-size: 0.8rem;

    .icon {
      font-size: 1em;
    }
  }
}
</style>
<style scoped lang="scss">
@use "../assets/util/index" as *;

.projects-home {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  hr {
    width: 100%;
  }

  > header {
    > p {
      color: darken(white, 20%);
    }
  }
}

.projects-wrapper {
  display: grid;
  gap: 0.75rem;
  margin: 0.5rem 0;
  border-radius: 15px;

  > .project {
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    text-decoration: none;

    &:hover {
      > .project-info {
        h3 {
          text-decoration: underline;
        }
      }
    }

    > .project-info {
      display: flex;
      flex-direction: column;
      gap: 5px;

      h3 {
        color: $txt-secondary;
      }

      p {
        color: darken(white, 25%);
        font-size: 0.75rem;
      }
    }

    img {
      max-width: 100px;
      max-height: 100px;
      border-radius: 10%;
    }
  }
}

@media (min-width: $size-mobile) {
  .projects-wrapper {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: $size-mobile) {
  .projects-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
