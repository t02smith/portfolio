<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  title: "Tom Smith",
  meta: [
    {
      name: "description",
      content:
        "A portfolio site containing lots of information about my work as a full stack software engineer",
    },
  ],
  link: [
    { rel: "icon", type: "image/png", href: "/icons/projects/this-site.png" },
  ],
});

useSeoMeta({
  title: "Tom Smith",
  ogTitle: "Tom Smith",
  description:
    "A portfolio site containing lots of information about my work as a full stack software engineer",
  ogDescription:
    "A portfolio site containing lots of information about my work as a full stack software engineer",
  ogImage: "/icons/projects/this-site.png",
});
</script>
