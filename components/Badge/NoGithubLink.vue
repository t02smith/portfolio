<template>
  <div class="github-link">
    <Icon
      name="mdi:github"
      size="1.8em"
    />
    <p>No GitHub Link :(</p>
  </div>
</template>
<style scoped lang="scss">
@use "@/assets/style/util/index" as *;

.github-link {
  background-color: #24292e;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 210px;
  max-width: 210px;
  gap: 10px;
  font-weight: bold;
  color: white;
  padding: 3px 10px;
  border-radius: 10px;
  height: fit-content;
  box-shadow: $shadow;
}
</style>
