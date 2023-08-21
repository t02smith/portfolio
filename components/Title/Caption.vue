<template>
  <p>Software Engineer @ <a href="https://www.bitweave.com/">Bitweave</a></p>
</template>
<style scoped lang="scss">
@use "~/assets/style/util/index" as *;

p {
  position: absolute;
  font-style: italic;
  color: rgb(164, 164, 164);
  z-index: 100;
  top: 7rem;
  opacity: 0;
  animation: fade-in 1s 3s ease-in forwards;

  > a {
    font-weight: bold;
    color: $txt-secondary;
  }
}

@media (max-width: 700px) {
  p {
    margin-top: 1.3rem;
    font-size: 1.15rem;
  }
}

@media (min-width: 700px) {
  p {
    margin-top: 11rem;
    font-size: 1.8rem;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}
</style>
