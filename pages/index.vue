<template>
  <div class="home">
    <TitleCard />
    <QuickLinkSet />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "nonav",
});
</script>
<style scoped lang="scss">
.home {
  overflow-y: hidden;
  max-height: 100vh;
}
</style>