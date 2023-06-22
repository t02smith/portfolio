import React from 'react'
import Page from './Page'
import "@/style/pages/About.scss"

const images = [
  "/img/cat.jpg",
  "/img/cheerleader.jpg",
  "/img/cowboy.jpg",
  "/img/poppy.jpg",
  "/img/lucy_grad.jpg",
]

const About = () => {
  return (
    <Page className='about'>

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
          </div>
        </div>

        <div className="info-sections">

          <p>
            I'm a software engineer...
          </p>

          <div className="section">
            <h2>
              <em>Software Engineer</em>
              <strong>Bitweave</strong>
            </h2>
            <p></p>
          </div>
          <div className="section">
          <h2>
              <em>BSc Computer Science</em>
              <strong>University of Southampton</strong>
            </h2>
            <p></p>
          </div>
        </div>
      </div>

    </Page>
  )
}

export default About