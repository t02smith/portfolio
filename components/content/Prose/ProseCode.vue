<template>
  <div class="code-wrapper">
    <header>
      <strong>{{ props.filename }}</strong>
      <p>{{ props.language }}</p>
      <div :class="`copy-wrapper ${copied && 'active'}`">
        <Icon
          class="copy-text"
          name="uil:copy"
          :color="`${copied ? 'white' : 'gray'}`"
          size="1.4em"
          @click="!copied && copy(props.code)"
        />
        <p v-if="copied">copied!</p>
      </div>
    </header>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from "@vueuse/core";

const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
});

const { copy, copied } = useClipboard();
</script>
<style scoped lang="scss">
@use "@/assets/style/util/index" as *;

.code-wrapper {
  background-color: darken($bg-primary, 3%);
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  overflow-y: hidden;
  overflow-x: hidden;
  border-radius: 5px;

  > header {
    display: flex;
    border-bottom: solid rgb(112, 112, 112) 1px;
    padding: 5px 10px;
    align-items: center;
    gap: 5px;

    > strong {
      color: $txt-secondary;
    }

    > p {
      font-weight: bold;
    }

    > *:first-child {
      margin-right: auto;
    }
  }

  > .content {
    overflow-x: scroll;
    padding-right: 5px;
  }
}

.copy-wrapper {
  display: flex;
  justify-content: center;
  border-radius: 5px;

  &.active {
    background-color: darken($txt-secondary, 10%);
    padding: 0 3px;

    > .cursor-pointer {
      cursor: default;
    }
  }

  > .copy-text {
    cursor: pointer;
  }
}
</style>
