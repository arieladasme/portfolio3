import React from 'react'
import react from '../assets/img/react.svg'
import nest from '../assets/img/nest.svg'
import nodejs from '../assets/img/nodejs.svg'
import git from '../assets/img/git.svg'
import js from '../assets/img/js.svg'
import mysql from '../assets/img/mysql.svg'
import mongodb from '../assets/img/mongodb.svg'
import angular from '../assets/img/angular.svg'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Habilidades</h2>
              <p>
                He trabajado con las siguientes tecnologías:
                <br />
              </p>
              <Carousel
                responsive={responsive}
                infinite
                className="owl-carousel owl-theme skill-slider"
              >
                {[js, react, angular, nodejs, nest, git, mongodb, mysql].map((meter, index) => (
                  <div className="item" key={index}>
                    <img src={meter} alt="" />
                    <h5>
                      {index === 0 && 'Javascript'}
                      {index === 1 && 'ReactJs'}
                      {index === 2 && 'Angular'}
                      {index === 3 && 'NodeJs'}
                      {index === 4 && 'NestJs'}
                      {index === 5 && 'Git'}
                      {index === 6 && 'MongoDB'}
                      {index === 7 && 'MySQL'}
                    </h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
