import React from 'react'
import './about.css'
import me from '../../constants/me.json'

const About = () => {
  const knowledge = me.knowledges
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me.fullstackImage} alt="About img" />
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

          <p>
            {me.about.split('.').map((sentence, index) => (
              <React.Fragment key={index}>
                {sentence.trim()}
                <br />
              </React.Fragment>
            ))}
          </p>
          <a href="#contact" className='btn btm-primary'>Lets talk</a>
        </div>
      </div>
    </section>
  )
}

export default About