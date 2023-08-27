<template>
  <nav>
    <NuxtLink to="/"> <strong> Tom </strong>Smith</NuxtLink>
    <div
      v-if="props.draft"
      class="draft"
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
</script>
<style scoped lang="scss">
@use "~/assets/style/components/nav.scss" as *;
@use "~/assets/style/util/index" as *;

strong {
  color: $txt-secondary;
}

.draft {
  background-color: red;
  color: black;
  font-weight: bold;
  padding: 5px 5px;
  border-radius: 5px;
  font-size: small;

}
</style>
