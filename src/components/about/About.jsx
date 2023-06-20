import React from 'react'
import './about.css'
import ME from '../../assets/full-stack-developer.svg'
import { BiServer } from 'react-icons/bi'
import { IoInfinite } from 'react-icons/io5'
import { CgWebsite } from 'react-icons/cg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About imag" />
          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            
            <article className='about__card'>
              <BiServer className='about__icon'/>
              <h5>Backend</h5>
              <small>3+ years</small>
            </article>

            <article className='about__card'>
              <CgWebsite className='about__icon'/>
              <h5>Frontend</h5>
              <small>3+ years</small>
            </article>

            <article className='about__card'>
              <IoInfinite className='about__icon'/>
              <h5>Devops</h5>
              <small>3+ years</small>
            </article>
          </div>

          <p>
            Experiencia en desarrollo backend Python, Typescript, Auth y RESTful.<br/>
            Experiencia con CI/CD, Docker, arquitecturas de microservicios y cultura devops.<br/>
            Conocimientos en desarrollo frontend en HTML, CSS y frameworks Javascript.<br/>
          </p>
          <a href="#contact" className='btn btm-primary'>Lets talk</a>
        </div>
      </div>
    </section>
  )
}

export default About