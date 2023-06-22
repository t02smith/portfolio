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

      <div className="content">

        <h1>Hi! I'm Tom 😊</h1>
      </div>

    </Page>
  )
}

export default About