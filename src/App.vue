<template>
  <div v-if="isHome">
    <RouterView />
  </div>

  <div
    v-else
    class="page"
  >
    <NavBar />

    <div class="page-content">
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import NavBar from "@/components/nav/NavBar.vue";

const route = useRoute();
const isHome = computed(() => route.path === "/");
</script>
<style scoped lang="scss">
@use "./assets/util/index" as *;
@use "sass:color";

* {
  margin: 0;
  padding: 0;
  font-family: $font-family;
}

hr {
  border-color: gray;
}

body {
  background-color: $bg-primary;
}

#root {
  height: 100%;
}

a {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

/* Width and height for the scrollbar track */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Background color of the scrollbar track */
::-webkit-scrollbar-track {
  background: #131313;
}

/* Color of the scrollbar handle */
::-webkit-scrollbar-thumb {
  background: color.scale(#131313, $lightness: 10%);
  border-radius: 5px;
}

/* On hover, color of the scrollbar handle */
::-webkit-scrollbar-thumb:hover {
  background: color.scale(#131313, $lightness: 12%);
}

strong {
  color: $txt-secondary;
}

.page {
  background-color: $bg-primary;
  color: white;
  overflow-y: hidden;
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .page-content {
    padding-top: $navbar-height;
    overflow-y: hidden;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
