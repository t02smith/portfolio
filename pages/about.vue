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
          <div class="socials">
            <a href="https://github.com/t02smith">
              <img
                class="github-icon"
                src="/icons/socials/github.svg"
                alt=""
              />
            </a>

            <a href="www.linkedin.com/in/tom-smith-uos">
              <img
                class="linkedin-icon"
                src="/icons/socials/linkedin.svg"
                alt=""
              />
            </a>

            <a href="https://steamcommunity.com/profiles/76561198318217586/">
              <img
                class="steam-icon"
                src="/icons/socials/steam.svg"
                alt=""
              />
            </a>
          </div>
        </div>

        <div class="info-sections">
          <p>
            I'm a software engineer and a recent graduate (more below) who has a
            passion for coding, lifting and gaming. Feel free to shoot me a
            message at any of my socials.
          </p>

          <div class="media">
            <p><b>🎮 What do I play?</b></p>
            <div class="media-covers">
              <img
                v-for="g in games"
                :src="`/img/games/${g}`"
                alt=""
              />
            </div>
          </div>

          <div class="media">
            <p><b>🎥 What do I watch?</b></p>
            <div class="media-covers">
              <img
                v-for="w in watchlist"
                :src="`/img/watch/${w}`"
                alt=""
              />
            </div>
          </div>

          <div class="section bitweave">
            <h5>💾 (Graduate) Software Engineer</h5>
            <div class="subtitle">
              <h6>Bitweave</h6>
              <p>July 2023 - present</p>
            </div>
            <p>
              Sadly I can't actually talk about anything I do at this job so
              just close your eyes and imagine some really interesting story
              about all the exciting dev work the great people at Bitweave have
              been allocating their (hopefully) favourite Graduate Software
              Engineer.
            </p>
          </div>

          <div class="section uos">
            <h5>🎓 BSc Computer Science</h5>
            <div class="subtitle">
              <h6>University of Southampton</h6>
              <p>Sept 2020 - July 2023</p>
            </div>

            <p>
              I finished university achieving a First (at 75%) and learnt a hell
              of a lot on the way. Below I'll talk about some of the more
              interesting things I did during my time:
            </p>

            <div>
              <b>🥉 My Third Year</b><br />
              <p>
                The bulk of my third year was spent on my project,
                <b>Using Blockchain for Video Game Distribution</b> (<a
                  href="/projects?project=Blockware"
                  >click here</a
                >), but I did some other things that are worth mentioning too:
              </p>

              <ul>
                <li>☁️ Cloud Application development</li>
                <p>
                  How cloud services like Azure and Google Cloud can be used to
                  host just about anything. During this module I helped create a
                  full-stack website called <b>Unitled Chore App</b> (<a
                    href="/projects?project=Untitled+Chore+App"
                    >click here</a
                  >) and created a version of <b>Quiplash</b> based off of the
                  Jackbox game.
                </p>

                <li>📦 Advanced Databases</li>
                <p>
                  How do DBMS' work and how can they work at a large-scale over
                  the internet and the globe? This module took a deep dive into
                  how a DBMS system is created and the design choices that each
                  one makes from organising data to managing queries over a
                  distributed database. The coursework involved me writing an
                  algorithm that would use a heuristic to optimise SQL queries.
                </p>

                <li>🚦 Advanced Networks</li>
                <p>
                  What protocols should I use for my network and how should
                  devices be arranged? This module had me researching various
                  protocols that each target different use-cases and looking at
                  how they work and how they compare to similar technologies. As
                  part of this module I created <b>Wol-Kit</b> (<a
                    href="/projects?project=wolkit"
                    >click here</a
                  >).
                </p>

                <li>🔒 Web and Cloud Security</li>
                <p>
                  How can I secure my website and how can I test that it is
                  secure? This module looked at various ways security can be
                  increased on web-facing services, including common
                  vulnerabilities and methods on how to methodically find them.
                  During this module I worked on <b>RobPress</b> and
                  <b>Rob the Bank</b> (<a
                    href="/projects?project=RobPress+and+RobBank"
                    >click here</a
                  >).
                </p>
              </ul>
            </div>

            <div>
              <b>🥈 My Second Year</b>
              <p>
                My second year was less exciting but there were still some gems
                in there that are worth mentioning:
              </p>
              <ul>
                <li>🌍 Distributed Systems & Networks</li>
                <p>
                  This module had me learning about how global networks of
                  computers can communicate to maintain state by considering
                  CAPs theorem and the desired properties of the network. The
                  coursework had me creating a distributed storage system that
                  provide redundancy for data by storing replicas across
                  multiple nodes. If nodes failed then replicas would be
                  distributed to ensure sufficient copies of data existed in the
                  network.
                </p>
                <li>🧠 Intelligent Systems</li>
                <p>
                  This module was all about traditional AIs and how they used
                  various heuristics to find optimal solutions to problems. One
                  topic of interest from this was genetic algorithms which
                  absolutely fascinated me; Check out
                  <a href="https://github.com/t02smith/Knapsack-Solver"
                    >this repository</a
                  >
                  for a genetic algorithm I created that would solve the
                  Knapsack Problem for me.
                </p>
                <li>🚀 Agile Group Project</li>
                <p>
                  This group project had me as part of a team of 6 using agile
                  principles to create an application according to our client's
                  requirements. Through consistent client meetings and ability
                  to coordinate and delegate work to my teammates we were able
                  to produce a useful application that was built iteratively.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const images = [
  "cat.jpg",
  "cheerleader.jpg",
  "cowboy.jpg",
  "poppy.jpg",
  "lucy_grad.jpg",
];

const games = [
  "botw.jpg",
  "civ-6.jpg",
  "hitman.jpg",
  "rdr2.jpg",
  "skyrim.jpg",
  "bo3.jpg",
  "gta-v.jpg",
];

const watchlist = ["got.jpg", "peep-show.jpg", "bb.jpg", "office.jpg"];
</script>
<style scoped lang="scss">
@use "~/assets/style/util/index" as *;

@import url("https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap");

.about {
  width: 100%;

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

    > * {
      padding-right: 1.5rem;
      padding-left: 10px;
    }

    > .title {
      display: flex;
      margin-bottom: 0.5rem;

      h1 {
        font-family: "Delicious Handrawn", cursive;
        margin-right: auto;
      }

      > .socials {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-top: 5px;
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

      > .socials {
        gap: 5px;

        img {
          &.github-icon {
            width: 30px;
          }

          &.linkedin-icon {
            width: 35px;
          }

          &.steam-icon {
            width: 35px;
          }
        }
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

      > .socials {
        gap: 15px;

        img {
          &.github-icon {
            width: 40px;
          }

          &.linkedin-icon {
            width: 50px;
          }

          &.steam-icon {
            width: 45px;
          }
        }
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
