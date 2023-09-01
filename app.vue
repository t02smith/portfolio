<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
useHead({
  title: "Tom Smith",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    {
      name: "description",
      content: "A portfolio site containing lots of information about myself.",
    },
  ],
  link: [
    { rel: "icon", type: "image/png", href: "/icons/projects/this-site.png" },
  ],
});
</script>
