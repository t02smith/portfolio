<template>
  <div class="about">
    <div class="gallery">
      <div class="initial">
        <img
          v-for="i in images"
          v-bind:key="i"
          :src="`/img/me/${i}`"
          alt=""
        />
      </div>

      <div class="copy">
        <img
          v-for="i in images"
          v-bind:key="i"
          :src="`/img/me/${i}`"
          alt=""
        />
      </div>
    </div>

    <div class="about-content-wrapper">
      <div class="about-content">
        <div class="title">
          <h1>Hi! I'm Tom 😊</h1>
          <div class="social-links">
            <SocialLink
              v-for="social in socials"
              :key="social.link"
              :icon="social.icon"
              :backgroundColour="social.backgroundColour"
              :link="social.link"
              :fill="social.fill && social.fill"
            />
          </div>
        </div>
        <div class="about-sections">
          <div class="about-section">
            <h2>🔍 What I'm Doing Now</h2>
            <p>
              I am currently a
              <strong>Full-Stack Software Engineer</strong> at
              <a href="https://www.caci.co.uk/">CACI</a>. This includes:
            </p>
            <ul>
              <li>
                <strong>Frontend</strong>
                <p>
                  The design, creation, and testing of complex and accessible
                  Angular components. Designs were iterated through frequent
                  sessions with the PO and user feedback.
                </p>
                <div class="badges">
                  <Badge name="angular"></Badge>
                  <Badge name="typescript"></Badge>
                  <Badge name="sass"></Badge>
                </div>
              </li>
              <li>
                <strong>Backend</strong>
                <p>
                  The planning, building and testing of endpoints and other
                  functionality within various micro-services in a Java Spring
                  project.
                </p>
                <div class="badges">
                  <Badge name="java"></Badge>
                  <Badge name="spring"></Badge>
                  <Badge name="postgres"></Badge>
                </div>
              </li>
              <li>
                <strong>Release Coordinator</strong>
                <p>
                  The organisation of several of our monthly releases. I was
                  involved with appropriately scoping the release, running smoke
                  testing sessions, and building and deploying release
                  candidates to our development cluster.
                </p>
                <div class="badges">
                  <Badge name="k8s"></Badge>
                  <Badge name="gitlab"></Badge>
                </div>
              </li>
            </ul>
          </div>

          <div class="about-section">
            <h2>🎓 My Education</h2>
            <p>
              In July 2023, after three years of pain and suffering, I graduated
              from the
              <strong>University of Southampton</strong> with a first class
              Bachelor's degree in <strong>Computer Science</strong>.
            </p>
            <p>
              The final year of my studies was by far the most interesting and
              gave me the opportunity to work on several interesting projects,
              including
              <RouterLink to="/projects/blockware">BlockWare</RouterLink>,
              <RouterLink to="/projects/untitled+chore+app"
                >Untitled Chore App</RouterLink
              >, and <RouterLink to="/projects/wolkit">WolKit</RouterLink>
            </p>
          </div>

          <div class="about-section">
            <h2>🤘 My Hobbies</h2>
            <p>Some of the things I enjoy doing with my free time are:</p>
            <ul>
              <li>
                <strong>🏋️‍♂️ Lifting Weights</strong>
                <p>
                  I try and train at least 4 times a week. Currently my split
                  looks like <strong>Chest & Shoulders</strong> >
                  <strong>Biceps & Triceps</strong> > <strong>Back</strong> >
                  <strong>Legs</strong>
                </p>
              </li>
              <li>
                <strong>🕹️ Gaming</strong>
                <p>
                  I'm an avid gamer and mostly play on my custom-built PC. I
                  mostly play single-player games but don't mind Co-op games.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Badge from "@/components/badge/Badge.vue";
import SocialLink from "@/components/about/SocialLink.vue";

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
@use "../assets/util/index" as *;

@import url("https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap");

.about {
  width: 100%;

  .social-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  li {
    margin-bottom: 1rem;
    margin-right: 1rem;
    margin-left: 1.4rem;
  }

  .badges {
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
    margin-top: 0.5rem;
  }

  .gallery {
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
    gap: 0;

    .initial,
    .copy {
      display: flex;
      gap: 0;
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
      gap: 1rem;

      h1 {
        font-family: "Delicious Handrawn", cursive;
        margin-right: auto;
      }
    }

    .about-sections {
      column-fill: balance;

      .about-section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        break-inside: avoid-column;
        padding: 0.5rem;

        p {
          color: darken(white, 20%);
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .about {
    flex-direction: column;
    overflow-x: hidden;

    .title {
      flex-direction: column;
    }

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

    .about-sections {
      column-count: 1;
    }
  }
}

@media (min-width: 1200px) {
  .about {
    display: flex;

    .title {
      flex-direction: row;

      .social-links {
        align-self: center;
      }
    }

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

    .about-sections {
      column-count: 2;
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
