<template>
  <p class="recommended">⭐Recommended</p>
</template>
<style scoped lang="scss">
@use "~/assets/style/util/index" as *;

.recommended {
  background-color: lighten($bg-primary, 5%);
  padding: 3px 10px;
  border-radius: 8px;
  font-size: smaller;
  color: yellow !important;
}
</style>
