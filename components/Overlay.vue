<template>
  <div
    class="overlay"
    v-if="overlay.open"
    @click="close()"
  ></div>
</template>
<script setup lang="ts">
const overlay = useOverlay();

const emit = defineEmits(["close"]);

const close = () => {
  overlay.set(false);
  emit("close");
};
</script>
