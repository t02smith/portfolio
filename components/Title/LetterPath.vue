<template>
  <path
    :d="props.d"
    v-motion
    :enter="enter"
  ></path>
</template>
<script setup lang="ts">
const props = defineProps<{
  d: string;
  strokeDash: string;
}>();

const enter = ref({
  strokeDasharray: props.strokeDash,
  strokeDashoffset: props.strokeDash,
  transition: {
    duration: 3,
  },
});
</script>
<style lang="scss" scoped>
@keyframes line-in {
  to {
    stroke-dashoffset: 0;
  }
}

path {
  animation: line-in 5s ease forwards;
  stroke-width: 3;
}
</style>
