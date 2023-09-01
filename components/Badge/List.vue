<template>
  <div class="tools">
    <Badge
      v-for="badge in props.badges"
      :name="badge"
    />
  </div>
</template>
<script setup lang="ts">
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
