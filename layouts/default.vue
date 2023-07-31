<template>
  <div class="page">
    <NavBar />

    <div class="page-content">
      <slot />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "~/assets/style/util/index" as *;

.page {
  background-color: $bg-primary;
  color: white;
  overflow-y: hidden;
  overflow-x: hidden;

  .page-content {
    padding-top: $navbar-height;
    overflow-y: hidden;
  }
}
</style>
