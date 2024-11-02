<template>
  <a
    :href="props.link"
    class="github-link"
  >
    <Icon
      icon="mdi:github"
      size="1.8em"
    />
    <p>View on GitHub</p>
  </a>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  link: string;
}>();
</script>
<style scoped lang="scss">
@use "../../assets/util/index" as *;

.github-link {
  background-color: #24292e;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  max-width: 180px;
  gap: 10px;
  font-weight: bold;
  color: white;
  padding: 3px 10px;
  border-radius: 10px;
  height: fit-content;
  box-shadow: $shadow;

  &:hover {
    text-decoration: none;

    > p {
      color: $txt-secondary;
      text-decoration: underline;
    }
  }
}
</style>
