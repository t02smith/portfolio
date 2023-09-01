<template>
  <div class="gallery">
    <h6 v-if="props.title">{{ props.title }}</h6>
    <img
      :src="displayedImage"
      @click="nextImage"
      alt=""
    />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  images: string[];
  title?: string;
}>();

const displayedImageIndex = ref(0);
const displayedImage = computed(() => props.images[displayedImageIndex.value]);

function nextImage() {
  displayedImageIndex.value =
    (displayedImageIndex.value + 1) % props.images.length;
}
</script>
<style scoped lang="scss">
.gallery {
  > img {
    aspect-ratio: 0.75;
    width: 200px;
    object-fit: cover;
  }
}
</style>
