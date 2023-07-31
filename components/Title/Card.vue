<template>
  <div class="wrapper">
    <TitleName />
    <TitleCaption />
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
@use "~/assets/style/util/index" as *;

.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  position: relative;
}
</style>
