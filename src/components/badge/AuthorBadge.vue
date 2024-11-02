<template>
  <a
    :href="props.link"
    v-if="props.link"
    class="author"
  >
    <b>{{ props.name }}</b>
    <p v-if="props.role">{{ props.role }}</p>
  </a>
  <div
    v-else
    class="author"
  >
    <b>{{ props.name }}</b>
    <p v-if="props.role">{{ props.role }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  name: string;
  link?: string;
  role?: string;
}>();
</script>
<style scoped lang="scss">
@use "../../assets/util/index" as *;

.author {
  background-color: lighten($bg-primary, 5%);
  padding: 4px 8px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: fit-content;

  > p {
    font-style: italic;
    font-size: 0.7rem;
    color: darken(white, 10%);
  }

  &:hover {
    text-decoration: none;

    > b {
      text-decoration: underline;
    }
  }
}
</style>
