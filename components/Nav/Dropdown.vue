<template>
  <div class="wrapper">
    <div class="page-select">
      <div
        v-if="currentPage"
        class="current"
        @click="() => (optionsOpen = !optionsOpen)"
      >
        <div class="item">
          <img
            :src="currentPage.logo_link"
            alt=""
          />
          <b>{{ currentPage.text }}</b>
        </div>
        <div class="toggle">
          <div :class="`triangle ${optionsOpen && 'active'}`"></div>
        </div>
      </div>
    </div>

    <div :class="`options ${optionsOpen && 'active'}`">
      <NuxtLink
        @click="() => (currentPage = p)"
        v-for="p in pages.filter((pg) => !route.path.startsWith(pg.link))"
        :to="p.link"
        class="item"
      >
        <img
          :src="p.logo_link"
          alt=""
        />
        <b>{{ p.text }}</b>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();

type PageSelect = {
  text: string;
  link: string;
  logo_link: string;
};

const pages: Array<PageSelect> = [
  {
    text: "About Me",
    link: "/about",
    logo_link: "/icons/quick_links/about.svg",
  },
  {
    text: "Projects",
    link: "/projects",
    logo_link: "/icons/quick_links/books.svg",
  },
  {
    text: "Blog",
    link: "/blog",
    logo_link: "/icons/quick_links/megaphone.svg",
  },
];

const optionsOpen = ref<boolean>(false);
const currentPage = ref<PageSelect>(
  pages.find((p) => route.path.startsWith(p.link))!,
);

watch(currentPage, () => (optionsOpen.value = false));
</script>
<style scoped lang="scss">
@use "~/assets/style/util/index" as *;

.wrapper {
  padding-right: 5px;
  position: relative;
  z-index: 10;

  .item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.6rem;
    min-width: 103px;

    > img {
      height: 25px;
    }
  }
}

.page-select {
  height: $navbar-height;
  background-color: darken($bg-primary, 2%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: relative;

  > .current {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    > * {
      border-radius: 7px;
    }

    > .item {
      background-color: lighten($bg-primary, 5%);
      padding: 0.3rem 1rem;
    }

    > .toggle {
      padding: 0.5rem 0.6rem;
    }
  }
}

.options {
  position: absolute;
  transform: translateY(-100px);
  z-index: -1;
  transition: 200ms;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;

  &.active {
    transform: translateY(0);
  }

  > .item {
    background-color: lighten($bg-primary, 5%);
    padding: 7px 15px;
    color: darken(white, 20%);
    width: 103px;
    transition: 150ms;

    &:hover {
      background-color: lighten($bg-primary, 2%);
      text-decoration: none;
      color: white;
    }

    &:first-of-type {
      border-radius: 7px 7px 0 0;
    }

    &:last-of-type {
      border-radius: 0 0 7px 7px;
    }
  }
}

.triangle {
  $triangle-size: 10px;
  width: 0;
  height: 0;
  border-left: $triangle-size solid transparent;
  border-right: $triangle-size solid transparent;
  border-bottom: $triangle-size solid darken(white, 15%);
  transform: rotate(180deg);
  transition: 300ms;

  &.active {
    transform: rotate(0deg);
  }
}
</style>