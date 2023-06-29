import React from 'react'
import Page from './Page'
import "@/style/pages/About.scss"
import Navbar from '@/components/Navbar'

const images = [
  "/img/cat.jpg",
  "/img/cheerleader.jpg",
  "/img/cowboy.jpg",
  "/img/poppy.jpg",
  "/img/lucy_grad.jpg",
]

const games = [
  "botw.jpg",
  "civ-6.jpg",
  "hitman.jpg",
  "rdr2.jpg",
  "skyrim.jpg",
  "bo3.jpg",
  "gta-v.jpg",
  "pokemon.jpg"
]

const watchlist = [
  "got.jpg",
  "peep-show.jpg",
  "rick-morty.jpg",
  "bb.jpg",
  "office.jpg"
]

const About = () => {
  return (
    <Page className='about'>

      <Navbar currentPageId='about-me' />

      <div className="page-content">

        <div className="gallery">

          <div className="initial">
            {images.map((img, i) => (
              <img src={img} key={i} alt="" />
            ))}
          </div>

          <div className="copy">
            {images.map((img, i) => (
              <img src={img} key={i} alt="" />
            ))}
          </div>

        </div>

        <div className="about-content-wrapper">
          <div className="about-content">

            <div className="title">
              <h1>Hi! I'm Tom 😊</h1>
              <div className="socials">
                <a href="https://github.com/t02smith">
                  <img className='github-icon' src="/svg/socials/github.svg" alt="" />
                </a>

                <a href="www.linkedin.com/in/tom-smith-uos">
                  <img className='linkedin-icon' src="/svg/socials/linkedin.svg" alt="" />
                </a>

                <a href="https://steamcommunity.com/profiles/76561198318217586/">
                  <img className='steam-icon' src="/svg/socials/steam.svg" alt="" />
                </a>
              </div>
            </div>

            <div className="info-sections">

              <p>
                I'm a software engineer and a recent graduate (more below) who has a passion for coding, lifting and gaming. Feel free to shoot me a message at any of my socials.
              </p>

              <div className="media">
                <p><b>🎮 What do I play?</b></p>
                <div className="media-covers">
                  {games.map((g, i) => (
                    <img src={`/img/games/${g}`} key={i} alt="" />
                  ))}
                </div>
              </div>

              <div className="media">
                <p><b>🎥 What do I watch?</b></p>
                <div className="media-covers">
                  {watchlist.map((w, i) => (
                    <img src={`/img/watch/${w}`} key={i} alt="" />
                  ))}
                </div>
              </div>

              <div className="section bitweave">
                <div className="section-title">
                  <em>(Graduate) Software Engineer</em>
                  <strong>Bitweave</strong>
                </div>
                <p>
                  Starting this role soon...
                </p>
              </div>

              <div className="section uos">
                <div className="section-title">
                  <em>BSc Computer Science</em>
                  <strong>University of Southampton</strong>
                </div>
                <p>
                  I finished university achieving a First (at 75%) and learnt a hell of a lot on the way. Below I'll talk about some of the more interesting things I did during my time:
                </p>

                <div>
                  <b>My Third Year</b><br />
                  The bulk of my third year was spent on my project, <b>Using Blockchain for Video Game Distribution</b> (<a href="/#/projects?project=Blockware">click here</a>), but I did some other things that are worth mentioning too:

                  <ul>
                    <li>Cloud Application development</li>
                    <p>How cloud services like Azure and Google Cloud can be used to host just about anything. During this module I helped create a full-stack website called <b>Unitled Chore App</b> (<a href="/#/projects?project=Untitled+Chore+App">click here</a>) and created a version of <b>Quiplash</b> based off of the Jackbox game.</p>

                    <li>Advanced Databases</li>
                    <p>How do DBMS' work and how can they work at a large-scale over the internet and the globe? This module took a deep dive into how a DBMS system is created and the design choices that each one makes from organising data to managing queries over a distributed database. The coursework involved me writing an algorithm that would use a heuristic to optimise SQL queries.</p>

                    <li>Advanced Networks</li>
                    <p>What protocols should I use for my network and how should devices be arranged? This module had me researching various protocols that each target different use-cases and looking at how they work and how they compare to similar technologies. As part of this module I created <b>Wol-Kit</b> (<a href="/#/projects?project=wol-kit">click here</a>).</p>

                    <li>Web and Cloud Security</li>
                    <p>How can I secure my website and how can I test that it is secure? This module looked at various ways security can be increased on web-facing services, including common vulnerabilities and methods on how to methodically find them. During this module I worked on <b>RobPress</b> and <b>Rob the Bank</b> (<a href="/#/projects?project=RobPress+and+RobBank">click here</a>).</p>

                    {/* <li>Web Architecture and Hypertext Technology</li> */}
                  </ul>

                </div>

                {/* <div>
                <b>My Second Year</b><br />

              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </Page>
  )
}

export default About