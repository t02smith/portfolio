<template>
  <a
    :href="props.link"
    :style="`background-color: ${props.backgroundColour}`"
    class="social-link"
  >
    <Icon
      :icon="props.icon"
      :color="props.fill"
    />
  </a>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = withDefaults(
  defineProps<{
    backgroundColour: string;
    icon: string;
    fill?: string;
    link: string;
  }>(),
  {
    fill: "none",
  },
);
</script>
<style scoped lang="scss">
@use "../../assets/util/index" as *;

.social-link {
  aspect-ratio: 1;
  height: 62.5px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  box-shadow: $shadow;
  color: white;
  transition: 150ms;
  font-size: 3em;

  &:hover {
    opacity: 0.65;
  }
}

@media (max-width: $size-mobile) {
  .social-link {
    height: 50px;
    font-size: 2.25em;
  }
}
</style>
