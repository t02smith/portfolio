<template>
  <div class="md-page">
    <div class="md-content">
      <ContentDoc />
    </div>
  </div>
</template>
<style lang="scss">
@use "~/assets/style/util/index" as *;

.md-page {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex: 1;
}

.md-content {
  max-width: 1000px;
  background-color: lighten($bg-primary, 3%);
  padding-top: 1rem;
  padding: 1rem;
  height: 100%;
  flex: 1;

  h3 {
    margin-bottom: 0.4rem;
  }

  h2 {
    margin: 10px 0;
  }

  li {
    margin-left: 1.2rem;
  }

  blockquote {
    background-color: lighten($bg-primary, 15%);
    padding: 0.5rem;
    font-weight: bold;
    border-left: solid 5px $txt-secondary;
    margin: 5px 0;
  }

  a {
    color: $txt-secondary;
  }

  p,
  li {
    color: darken(white, 15%);
  }

  img {
    background-color: darken(white, 5%);
  }

  strong {
    color: orangered;
  }
}
</style>