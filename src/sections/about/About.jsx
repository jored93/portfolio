import React from 'react'
import './about.css'
import me from '../../constants/me.json'
import profile from '../../assets/images/fullstack.jpg';

const About = () => {
  const knowledge = me.knowledges
  return (
    <section id='about'>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile} alt="About img" />
          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            {
              knowledge.map(({id, name, time, icon}) => {
                return (
                  <article className='about__card' key={`${name}-${id}`}>
                    <i className={icon} style={{ color: '#4db5ff', fontSize: '1.4rem', marginBottom: '1rem'}}></i>
                    <h5>{name}</h5>
                    <small>{time}</small>
                  </article>
                )
              })
            }
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default About