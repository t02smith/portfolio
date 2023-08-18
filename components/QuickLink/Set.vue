<template>
  <div class="quick-links">
    <QuickLinkItem v-for="q in quickLinks" :link="q.link" :icon_link="q.icon_link" :name="q.name" />
  </div>
</template>
<script setup lang="ts">
const quickLinks: Array<{
  link: string;
  icon_link: string;
  name: string;
}> = [
    {
      name: "About Me",
      link: "/about",
      icon_link: "/icons/quick_links/about.svg",
    },
    {
      name: "My Projects",
      link: "/projects",
      icon_link: "/icons/quick_links/books.svg",
    },
    {
      name: "Blog",
      link: "/blog",
      icon_link: "/icons/quick_links/megaphone.svg",
    },
  ];
</script>
<style scoped lang="scss">
@use "~/assets/style/util/index" as *;

.quick-links {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transform: translateY(400px);
  animation: fade-in 1s 3s ease-in forwards;
}

@keyframes fade-in {
  from {
    transform: translateY(300px);
  }

  to {
    transform: none;
  }
}
</style>
