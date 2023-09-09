<template>
  <NuxtLink
    :to="props.path"
    :class="`project-option ${props.current && 'current'}`"
  >
    <img
      :src="props.logo"
      alt=""
    />
    <div class="text">
      <h4>{{ props.title }}</h4>
      <p>{{ props.description }}</p>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  logo: string;
  path: string;
  current: boolean;
}>();
</script>
<style scoped lang="scss">
@use "~/assets/style/util/index" as *;

.project-option {
  color: white;
  display: flex;
  align-items: center;
  background-color: lighten($bg-primary, 5%);
  transition: 150ms;
  border-radius: 5px;
  padding: 5px;
  border: solid 2px lighten($bg-primary, 5%);
  box-shadow: $shadow;

  &.current {
    border: solid 2px lighten($txt-secondary, 5%);

    &:hover {
      border: solid 2px lighten($txt-secondary, 5%);
    }

    > .text > h4 {
      color: $txt-secondary;
    }
  }

  &:hover {
    text-decoration: none;
    background-color: lighten($bg-primary, 3%);
    border: solid 2px lighten($bg-primary, 3%);

    > .text {
      > h4 {
        color: $txt-secondary;
      }
    }
  }

  > img {
    width: 65px;
    height: 65px;
    border-radius: 5px;
  }

  > .text {
    padding-right: 1rem;
    padding-left: 0.5rem;

    > h4 {
      font-size: 1.2rem;
    }

    > p {
      color: darken(white, 10%);
      font-size: 0.8rem;
      font-style: italic;
    }
  }
}

@media (min-width: $size-mobile) {
  .project-option.hide {
    display: content;
  }

  .project-option.selector {
    display: none;
  }
}

@media (max-width: $size-mobile) {
  .project-option.hide {
    display: none;
  }

  .project-option.selector {
    display: content;
  }
}
</style>
