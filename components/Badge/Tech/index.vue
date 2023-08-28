<template>
  <a
    :href="props.link"
    v-if="props.link"
    class="tech-badge"
    :style="`background-color: ${props.backgroundColour}`"
  >
    <Icon
      :name="props.icon"
      size="1.5em"
    />
    <p :style="`color: ${props.textColour}`">{{ props.name }}</p>
  </a>

  <div
    v-else
    class="tech-badge"
    :style="`background-color: ${props.backgroundColour}`"
  >
    <Icon
      :name="props.name"
      size="1.5em"
    />
    <p :style="`color: ${props.textColour}`">{{ props.name }}</p>
  </div>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string;
    backgroundColour?: string;
    icon: string;
    link?: string;
    textColour?: string;
  }>(),
  {
    backgroundColour: "#202020",
    textColour: "white",
  },
);
</script>
<style scoped lang="scss">
@use "~/assets/style/util/index" as *;

.tech-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  gap: 7px;
  font-weight: bold;
  color: white;
  padding: 3px 10px;
  border-radius: 7px;
  height: fit-content;
  box-shadow: $shadow;
}
</style>
