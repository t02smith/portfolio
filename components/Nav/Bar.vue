<template>
  <nav>
    <NuxtLink to="/"> <strong> Tom </strong>Smith</NuxtLink>
    <NavDropdown />
  </nav>
</template>
<style scoped lang="scss">
@use "~/assets/style/components/nav.scss" as *;
@use "~/assets/style/util/index" as *;

strong {
  color: $txt-secondary;
}
</style>
