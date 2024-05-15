<template>
  <nav>
    <NuxtLink to="/"> <strong> Tom </strong>Smith</NuxtLink>
    <div
      class="warning dev"
      v-if="dev"
    >
      dev
    </div>
    <div
      v-else-if="props.draft"
      class="warning draft"
    >
      draft
    </div>
    <NavDropdown />
  </nav>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    draft?: boolean;
  }>(),
  {
    draft: false,
  },
);

const dev = process.env.NODE_ENV === "development";
</script>
<style scoped lang="scss">
@use "@/assets/style/components/nav.scss" as *;
@use "@/assets/style/util/index" as *;

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
