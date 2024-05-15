<template>
  <div class="page">
    <NavBar :draft="true" />

    <div class="page-content">
      <slot />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/style/page.scss";
</style>
