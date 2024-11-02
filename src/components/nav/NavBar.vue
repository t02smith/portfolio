<template>
  <nav>
    <RouterLink to="/"> <strong> Tom </strong>Smith</RouterLink>
    <NavDropdown />
  </nav>
</template>
<style scoped lang="scss">
@use "../../assets/util/index" as *;

nav {
  background-color: darken($bg-primary, 2%);
  width: 100%;
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  color: white;
  height: $navbar-height;

  > * {
    padding: 0.75rem;
  }

  > a {
    font-weight: bold;
    color: white;
    font-size: 1.5rem;

    &:hover {
      text-decoration: none;
    }
  }

  > h2 {
    font-size: 1.5rem;
    margin-left: auto;
    color: $txt-secondary;
  }

  > *:last-child {
    margin-left: auto;
  }
}

strong {
  color: $txt-secondary;
}

.warning {
  color: black;
  font-weight: bold;
  padding: 5px 5px;
  border-radius: 5px;
  font-size: small;

  &.draft {
    background-color: yellow;
  }

  &.dev {
    background-color: rgb(0, 138, 218);
  }
}
</style>
<script setup lang="ts">
import NavDropdown from "@/components/nav/NavDropdown.vue";
</script>
