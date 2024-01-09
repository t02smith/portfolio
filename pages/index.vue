<template>
  <ClientOnly>
    <div class="home">
      <div class="code">
        <pre>{{ codeOutput }}</pre>
      </div>
      <button
        @click="skip"
        class="skip"
        v-if="pointer < codeSteps.length - 1"
      >
        <Icon
          name="bi:skip-end-fill"
          color="white"
          size="1.5em"
        />skip
      </button>
      <div class="home-content">
        <div class="title">
          <h1>{{ nameOutput }}</h1>
          <p :style="captionPointer === 0 ? 'display: none' : ''">
            {{ captionOutput }}
          </p>
        </div>
        <div class="quick-links">
          <div v-for="q in quickLinks">
            <QuickLink
              v-if="getQuickLinkStart(q.link) <= pointer"
              :link="q.link"
              :icon_link="q.icon_link"
              :name="
                q.name.substring(
                  0,
                  Math.min(q.name.length, pointer - getQuickLinkStart(q.link)),
                )
              "
              :draft="
                q.draft &&
                pointer >= q.name.length + getQuickLinkStart(q.link) + 1
              "
              :description="
                q.description &&
                pointer >= q.name.length + getQuickLinkStart(q.link) + 1
                  ? q.description
                  : ''
              "
            />
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
<script setup lang="ts">
import quickLinks from "~/assets/data/home/quickLinks";
import {
  codeSteps,
  NAME_START_INDEX,
  SUBTITLE_START_INDEX,
  LINK_1_START_INDEX,
  LINK_2_START_INDEX,
  LINK_3_START_INDEX,
} from "~/assets/data/home/code";

definePageMeta({
  layout: "nonav",
});

useHead({
  title: "Tom Smith",
});

const pointer = ref(0);
const codeOutput = computed(() => codeSteps[pointer.value]);

const interval = setInterval(() => {
  pointer.value = pointer.value + 1;
}, 75);

watch(pointer, () => {
  if (pointer.value === codeSteps.length - 1) {
    clearInterval(interval);
  }

  if (
    pointer.value >= NAME_START_INDEX &&
    pointer.value <= NAME_START_INDEX + name.length
  ) {
    namePointer.value = namePointer.value + 1;
  }

  if (
    pointer.value >= SUBTITLE_START_INDEX &&
    pointer.value <= SUBTITLE_START_INDEX + caption.length
  ) {
    captionPointer.value = captionPointer.value + 1;
  }
});

const name = "Tom Smith";
const namePointer = ref(0);
const nameOutput = computed(() => name.substring(0, namePointer.value));

const caption = "Software Engineer";
const captionPointer = ref(0);
const captionOutput = computed(() =>
  caption.substring(0, captionPointer.value),
);

function getQuickLinkStart(link: string): number {
  if (link === "/about") return LINK_1_START_INDEX;
  else if (link === "/projects") return LINK_2_START_INDEX;
  else if (link === "/blog") return LINK_3_START_INDEX;
  return 0;
}

function skip() {
  pointer.value = codeSteps.length - 1;
  namePointer.value = name.length;
  captionPointer.value = caption.length;
}

onMounted(async () => {});
</script>
<style scoped lang="scss">
@use "~/assets/style/util/index" as *;

.home {
  overflow: hidden;
  height: 100vh;
  max-height: 100vh;
  display: flex;
}

.home-content {
  display: flex;
  flex-direction: column;
}

.code {
  color: rgb(86, 86, 86);
  font-size: 1rem;
  z-index: -1;
}

.skip {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background-color: lighten($bg-primary, 10%);
  border: none;
  padding: 0.25rem 0.75rem;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  box-shadow: $shadow;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: $txt-secondary;
    text-decoration: underline;
  }
}

.quick-links {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: start;
  padding: 1.5rem;
  padding-bottom: 3rem;
  gap: 0.5rem;
  margin-top: auto;
  margin-bottom: auto;
  align-self: flex-start;
}

.title {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  overflow-x: hidden;

  > h1 {
    $title-shadow-thickness: 3px;
    $neg-title-shadow-thickness: calc(-1 * $title-shadow-thickness);
    $title-shadow-color: $bg-primary;
    font-size: 7.5rem;
    color: white;
    text-shadow:
      $neg-title-shadow-thickness $neg-title-shadow-thickness 0
        $title-shadow-color,
      $title-shadow-thickness $neg-title-shadow-thickness 0 $title-shadow-color,
      $neg-title-shadow-thickness $title-shadow-thickness 0 $title-shadow-color,
      $title-shadow-thickness $title-shadow-thickness 0 $title-shadow-color;
  }

  > p {
    color: green;
    font-size: 2rem;
    margin-top: -1.5rem;
    background-color: lighten($bg-primary, 5%);
    width: fit-content;
    border-radius: 4px;
    box-shadow: $shadow;
    margin-left: 0.25rem;
    padding: 0.25rem;
    padding-right: 0.5rem;
  }
}

@media (max-width: 900px) {
  .title {
    text-align: left;
    margin-top: 8rem;

    > h1 {
      line-height: 8rem;
    }
  }

  .code {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  .quick-links {
    margin-top: auto;
    justify-self: flex-end;
  }

  .skip {
    left: auto;
    right: 1rem;
  }
}

@media (min-width: 900px) {
  .home {
    display: flex;
  }

  .home-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .quick-links {
    margin-top: auto;
    margin-bottom: 0;
    padding-bottom: 1.5rem;
    gap: 1rem;
  }

  .code {
    position: inherit;
    background-color: darken($bg-primary, 1%);
    padding: 1rem;
    right: 1rem;
    left: auto;
    width: 300px;
    color: darken(white, 30%);
  }

  .title {
    > h1 {
      font-size: 7rem;
    }
    > p {
      font-size: 2.75rem;
    }
  }
}
</style>
