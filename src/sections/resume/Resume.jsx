import React from 'react'
import './resume.css'
import me from '../../constants/me.json'
import { WORK_DATA } from './data'

const Resume = () => {
  const knowledge = me.knowledges
  return (
    <section id='resume'>
      <h5>-</h5>
      <h2>Experiencia laboral</h2>
      <div className="container about__container">
        <div className='about__content'>
          <div className="about__cards">
            {
              WORK_DATA.map(({ business, name, image }) => {
                return (
                  <article className='about__card' key={`${name}-${business}`}>
                    {/* <i className={icon} style={{ color: '#4db5ff', fontSize: '1.4rem', marginBottom: '1rem'}}></i> */}
                    <img src={image} alt="" />
                    <h5>{name}</h5>
                    <small>{business}</small>
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

export default Resume