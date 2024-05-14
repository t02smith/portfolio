<template>
  <a
    v-if="badge"
    :href="badge.link"
    class="badge"
    :style="`background-color: ${
      badge.backgroundColour ? badge.backgroundColour : '#202020'
    }`"
  >
    <Icon
      :name="badge.icon"
      size="1.5em"
      :color="badge.iconFill"
      :style="`color: ${badge.iconFill}`"
      class="icon"
    />
    <p :style="`color: ${badge.textColour}`">{{ badge.name }}</p>
  </a>
  <div
    class="badge loading"
    v-else
  ></div>
</template>
<script setup lang="ts">
import badges from "~/assets/data/badges";

const badge = ref();
onMounted(() => (badge.value = badges[props.name]));

const props = defineProps<{
  name: keyof typeof badges;
}>();
</script>
<style scoped lang="scss">
@use "~/assets/style/util/index" as *;

.badge {
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
  cursor: pointer;
  text-decoration: none;

  &.loading {
    background-color: #202020;
    height: 19.2px;
    width: 40px;
  }

  &:hover > p {
    text-decoration: underline;
  }
}
</style>
