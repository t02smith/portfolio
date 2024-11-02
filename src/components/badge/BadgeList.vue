<template>
  <div class="tools">
    <Badge
      v-for="badge in props.badges"
      v-bind:key="badge"
      :name="badge"
    />
  </div>
</template>
<script setup lang="ts">
import Badge from "@/components/badge/Badge.vue";

const props = defineProps<{
  badges: string[];
}>();
</script>
<style scoped lang="scss">
.tools {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}
</style>
