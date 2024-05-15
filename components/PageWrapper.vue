<template>
  <div class="wrapper">
    <slot />
  </div>
</template>
<style lang="scss">
@use "@/assets/style/util/index" as *;

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
}

@media (min-width: $size-mobile) {
  .wrapper {
    > * {
      max-width: 1000px;
    }
  }
}

@media (max-width: $size-mobile) {
}
</style>
