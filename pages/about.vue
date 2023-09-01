<template>
  <div class="about">
    <div class="gallery">
      <div class="initial">
        <img
          v-for="i in images"
          :src="`/img/me/${i}`"
          alt=""
        />
      </div>

      <div class="copy">
        <img
          v-for="i in images"
          :src="`/img/me/${i}`"
          alt=""
        />
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
          <BadgeList
            class="badges"
            :badges="['location']"
          />
          <hr />
          <p>
            I'm a <strong>Software Engineer</strong> currently working at
            <a href="https://bitweave.com">Bitweave </a>as well as a recent
            graduate from the <strong>University of Southampton</strong> having
            achieved a 1st class Bachelor's degree in Computer Science.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "draft",
});

const images = [
  "cat.jpg",
  "cheerleader.jpg",
  "cowboy.jpg",
  "poppy.jpg",
  "lucy_grad.jpg",
];

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

    img {
      max-width: 350px;
      border-radius: 0.5rem;
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

    > .info-sections {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > .media {
        display: flex;
        flex-direction: column;
        gap: 5px;

        > .media-covers {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;

          > img {
            height: 100px;
          }
        }
      }

      > .section {
        display: flex;
        flex-direction: column;
        box-shadow: $shadow;
        border-radius: 0 0 5px 5px;

        > * {
          padding: 10px;
        }

        &.uos {
          $uos-bg: #045889;

          > h5 {
            background-color: $uos-bg;
          }

          > .subtitle {
            background-color: lighten($uos-bg, 10%);
          }
        }

        &.bitweave {
          $bitweave-bg: rgb(28, 66, 66);

          > h5 {
            background-color: $bitweave-bg;
          }

          > .subtitle {
            background-color: lighten($bitweave-bg, 10%);
          }
        }

        > h5 {
          display: flex;
          border-radius: 5px 5px 0 0;
        }

        > .subtitle {
          padding: 4px 10px;
          display: flex;
          align-items: center;
          gap: 15px;

          > p {
            font-size: 0.75rem;
            font-style: italic;
            color: darken(white, 10%);
            margin-left: auto;
          }
        }

        > p,
        div {
          background-color: lighten($bg-primary, 3%);
        }

        > *:last-child {
          border-radius: 0 0 5px 5px;
        }

        a,
        b {
          color: $txt-secondary;
        }

        ul {
          > li {
            margin-top: 5px;
            margin-left: 1.5rem;
          }

          > p {
            margin-left: 1.5rem;
            font-style: italic;
            color: darken(white, 15%);
          }
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

        > img {
          margin: 0.8rem 1.5rem;
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
