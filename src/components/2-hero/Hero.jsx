import React from 'react'
import './hero.css'
import Lottie from "lottie-react";
import developerAnimation from '../../animation/developer.json'

function Hero() {
  return (
    <section className="hero">
      <div className="content">
        <div className="card">
          <img src='./MOSTAFA-curcle.png' alt="" />
          <span className="icon-verified"></span>
        </div>
        <h1>Software designer, founder, and amateur astronaut</h1>
        <p>I'm Mostafa El_Sayed, a software designer and entrepreneur based in New York city. I'm the founder and CEO of planetaria, where we develop technologies. </p>
        <div className="icons">
          <i className="icon-twitter"></i>
          <i className="icon-instagram"></i>
          <i className="icon-github"></i>
          <i className="icon-linkedin-square"></i>
        </div>
      </div>
      <div className="animation"><Lottie animationData={developerAnimation} className='developerAnimation' /></div>
    </section>
  )
}

export default Hero