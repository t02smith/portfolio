<template>
  <p class="draft">⚠️ Draft</p>
</template>
<style scoped lang="scss">
@use "~/assets/style/util/index" as *;

.draft {
  background-color: lighten($bg-primary, 5%);
  padding: 3px 10px;
  border-radius: 8px;
  font-size: smaller;
  color: #ffb02e !important;
}
</style>
