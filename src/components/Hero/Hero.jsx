import React from 'react'
import './Hero.scss'
const Hero = ({img, title, text}) => {
  return (
    <section className="hero">
        <div className="container">
            <div className="hero__wrap">
                <div className="hero__img">
                    <img src={img} alt="" />
                </div>
                <div className="hero__text">
                <h1>{title}</h1>
                <p>{text}</p>
                <button>клик</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero