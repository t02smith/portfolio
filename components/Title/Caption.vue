<template>
  <p v-motion :initial="initial" :enter="enter">
    Software Engineer @ <a href="https://www.bitweave.com/">Bitweave</a>
  </p>
</template>
<script setup lang="ts">
const initial = ref({
  opacity: 0,
  y: 25,
});

const enter = ref({
  opacity: 1,
  y: 0,
  transition: {
    delay: 3,
    duration: 1,
  },
});
</script>
<style scoped lang="scss">
@use "~/assets/style/util/index" as *;

p {
  position: absolute;
  font-style: italic;
  color: rgb(164, 164, 164);
  z-index: 100;
  top: 7rem;

  > a {
    font-weight: bold;
    color: $txt-secondary;
  }
}

@media (max-width: 700px) {
  p {
    margin-top: 1.3rem;
    font-size: 1.15rem;
  }
}
@media (min-width: 700px) {
  p {
    margin-top: 11rem;
    font-size: 1.8rem;
  }
}
</style>
