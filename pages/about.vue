<template>
  <ClientOnly>
    <div class="about">
      <div class="gallery">
        <div class="initial">
          <NuxtImg
            v-if="imagesReady"
            v-for="i in images"
            :src="`/img/me/${i}`"
            alt=""
          />
          <div
            v-else
            v-for="_ in images.length"
            class="loading-image"
          ></div>
        </div>

        <div class="copy">
          <NuxtImg
            v-if="imagesReady"
            v-for="i in images"
            :src="`/img/me/${i}`"
            alt=""
          />
          <div
            v-else
            v-for="_ in images.length"
            class="loading-image"
          ></div>
        </div>
      </div>

      <div class="about-content-wrapper">
        <div class="about-content">
          <div class="title">
            <h1>Hi! I'm Tom 😊</h1>
            <hr />
            <div class="social-links">
              <AboutSocialLink
                v-for="social in socials"
                :icon="social.icon"
                :backgroundColour="social.backgroundColour"
                :link="social.link"
                :fill="social.fill && social.fill"
              />
            </div>
            <hr />
          </div>
          <div class="about-sections">
            <div class="about-section">
              <h2>🔍 What I'm Doing Now</h2>
              <p>
                In July 2023, I started my job as a
                <strong>(Junior) Software Engineer</strong> at
                <a href="https://bitweave.com">Bitweave</a>. Here I've been
                learning what it really means to work in software engineering
                and getting hands-on experience with frameworks like
                <strong>Spring Boot</strong> and infrastructure tools like
                <strong>Kubernetes</strong> and <strong>Helm</strong>.
              </p>
            </div>

            <div class="about-section">
              <h2>🎓 My Education</h2>
              <p>
                Also in July 2023, after three years of pain and suffering, I
                graduated from the
                <strong>University of Southampton</strong> with a first class
                Bachelor's degree in <strong>Computer Science</strong>.
              </p>
              <p>
                The final year of my studies was by far the most interesting and
                gave me the opportunity to work on several interesting projects,
                including
                <NuxtLink to="/projects/blockware">BlockWare</NuxtLink>,
                <NuxtLink to="/projects/untitled+chore+app"
                  >Untitled Chore App</NuxtLink
                >, and <NuxtLink to="/projects/wolkit">WolKit</NuxtLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
<script setup lang="ts">
import { useImage } from "@vueuse/core";

useHead({
  title: "Tom Smith | About Me",
});

const images = [
  "cat.jpg",
  "cheerleader.jpg",
  "cowboy.jpg",
  "poppy.jpg",
  "lucy_grad.jpg",
];

const imagesReady = computed(() => {
  return images.every((i) => {
    const { isLoading } = useImage({ src: `/img/me/${i}` });
    return isLoading;
  });
});

const socials: Array<{
  backgroundColour: string;
  icon: string;
  fill?: string;
  link: string;
}> = [
  {
    icon: "mdi:github",
    backgroundColour: "#24292e",
    link: "https://github.com/t02smith",
  },
  {
    icon: "devicon:linkedin",
    backgroundColour: "#0076B2",
    link: "https://www.linkedin.com/in/tom-smith-uos",
  },
  {
    icon: "mdi:spotify",
    backgroundColour: "#1ED760",
    fill: "#131313",
    link: "https://open.spotify.com/user/wuliay15jdubxccz84jz6czr9?si=f3678f5eb2c44e76",
  },
  {
    icon: "fa:steam",
    backgroundColour: "#455A64",
    fill: "#fff",
    link: "https://steamcommunity.com/profiles/76561198318217586/",
  },
];
</script>
<style scoped lang="scss">
@use "~/assets/style/util/index" as *;

@import url("https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap");

.about {
  width: 100%;

  .social-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .gallery {
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
    gap: 0rem;

    .initial,
    .copy {
      display: flex;
      gap: 0rem;
    }

    img,
    .loading-image {
      max-width: 350px;
      border-radius: 0.5rem;
    }

    .loading-image {
      background-color: #202020;
    }
  }

  .about-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .about-content {
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p > a {
      color: $txt-secondary;
    }

    > * {
      padding-right: 1.5rem;
      padding-left: 10px;
    }

    > .title {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h1 {
        font-family: "Delicious Handrawn", cursive;
        margin-right: auto;
      }
    }

    .about-sections {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;

      .about-section {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        gap: 1rem;

        p {
          color: darken(white, 20%);
        }
      }
    }
  }
}

@media (max-width: $size-mobile) {
  .about {
    flex-direction: column;
    overflow-x: hidden;

    .social-links {
      gap: 0.6rem;
    }

    .gallery {
      flex-direction: row;

      .initial,
      .copy {
        animation: none;
        flex-direction: row;
        animation: gallery-cycle-mobile 20s infinite linear;

        > img {
          max-height: 150px;
          margin: 1.5rem 0.8rem;
        }

        > .loading-image {
          height: 150px;
          width: 175px;
          margin: 1.5rem 0.8rem;
        }
      }
    }
  }

  .about-content-wrapper {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .about-content {
    .title {
      > h1 {
        font-size: 2.25rem;
      }
    }

    > .info-sections {
      p,
      em,
      strong {
        font-size: 0.8rem;
      }
    }

    .about-sections {
      .about-section {
        width: 100%;
      }
    }
  }
}

@media (min-width: $size-mobile) {
  .about {
    display: flex;

    .gallery {
      max-height: calc(100vh - $navbar-height);

      .initial,
      .copy {
        animation: gallery-cycle-desktop 20s infinite linear;
        flex-direction: column;

        > img,
        .loading-image {
          margin: 0.8rem 1.5rem;
        }

        .loading-image {
          height: 350px;
          width: 350px;
        }
      }
    }
  }

  .page-content {
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
  }

  .about-content {
    margin-left: auto;
    margin-right: auto;

    .title {
      > h1 {
        font-size: 4rem;
      }
    }

    > .info-sections {
      > .section {
        p {
          font-size: 1rem;
        }
      }

      p {
        font-size: 1.25rem;
      }
    }

    .about-sections {
      .about-section {
        width: 45%;
      }
    }
  }
}

@keyframes gallery-cycle-desktop {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100%);
  }
}

@keyframes gallery-cycle-mobile {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>
