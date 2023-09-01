<template>
  <div></div>
</template>
<script setup lang="ts">
const DEFAULT_PROJECT = "this+website";
const router = useRouter();

useHead({
  title: "Tom Smith | Projects",
});

onMounted(() => router.push(`/projects/${DEFAULT_PROJECT}`));
</script>
