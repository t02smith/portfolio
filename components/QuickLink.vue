<template>
  <a
    :href="props.link"
    :class="`quick-link ${props.draft && 'draft'}`"
  >
    <img
      :src="props.icon_link"
      alt=""
    />
    <div class="text">
      <div class="row">
        <h2>{{ props.name }}</h2>
        <BadgeDraft v-if="props.draft" />
      </div>
      <p
        class="description"
        v-if="props.description"
      >
        {{ props.description }}
      </p>
    </div>
  </a>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    link: string;
    icon_link: string;
    name: string;
    draft?: boolean;
    description?: string;
  }>(),
  {
    draft: false,
  },
);
</script>
<style lang="scss">
@use "~/assets/style/util/index" as *;

.quick-link {
  display: flex;
  place-self: start;
  align-items: center;
  text-decoration: none;
  gap: 1rem;
  position: relative;

  &.draft {
    &:hover {
      h2 {
        color: yellow;
      }
    }
  }

  &:hover {
    text-decoration: none;

    h2 {
      text-decoration: underline;
      color: $txt-secondary;
    }
  }

  h2 {
    font-family: $font-family;
    color: $txt-secondary;
    bottom: 5px;
    z-index: 1;
    text-align: center;
  }

  img {
    background-color: $bg-primary;
    object-fit: scale-down;
    z-index: 2;
    transition: 300ms;
  }
}

.text {
  display: flex;
  flex-direction: column;

  > .row {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  > .description {
    color: darken(white, 15%);
    background-color: lighten($bg-primary, 5%);
    padding: 5px;
    width: fit-content;
    max-width: 600px;
    font-size: 0.85rem;
  }
}

@media (max-width: $size-mobile) {
  .quick-link {
    h2 {
      font-size: 1.5rem;
    }

    img {
      width: 75px;
      height: 50px;
    }
  }

  .description {
    display: none;
  }
}

@media (min-width: $size-mobile) {
  .quick-link {
    img {
      width: 100px;
      height: 75px;
    }

    h2 {
      font-size: 2.5rem;
    }
  }

  .description {
    display: block;
  }
}
</style>
