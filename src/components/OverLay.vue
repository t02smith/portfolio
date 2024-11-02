<template>
  <div
    class="overlay"
    v-if="overlay.open"
    @click="close()"
  ></div>
</template>
<script setup lang="ts">
import { useOverlay } from "@/stores/overlay.store";

const overlay = useOverlay();

const emit = defineEmits(["close"]);

const close = () => {
  overlay.set(false);
  emit("close");
};
</script>
