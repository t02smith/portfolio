<template>
  <a :href="props.link" class="quick-link">
    <img :src="props.icon_link" alt="" />
    <h2>{{ props.name }}</h2>
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  link: string;
  icon_link: string;
  name: string;
}>();
</script>
<style lang="scss">
@use "~/assets/style/util/index" as *;

.quick-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: 5px;
  position: relative;
  margin-bottom: 3rem;

  &:hover {
    text-decoration: none;

    >img {
      transform: translateY(-2.5rem);
    }
  }

  >*:first-child {
    color: rgb(0, 174, 255);
    font-size: 6rem;
  }

  >h2 {
    color: white;
    position: absolute;
    bottom: 5px;
    z-index: 1;
    text-align: center;
  }

  >img {
    width: 200px;
    height: 150px;
    background-color: $bg-primary;
    z-index: 2;
    transition: 300ms;
  }
}
</style>
