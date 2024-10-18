import React from 'react'
import './experience.css'
import {SKILLS_DATA} from './data'
import imag from '../../assets/logos/logo.png'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>-</h5>
      <h2>Tecnologías & Experiencia</h2>

      <div className="container experience__container">
        {
          SKILLS_DATA.map(({experience, skills}) => {
            return (
              <div key={`${experience}-${skills}`}>
                <h3>{experience}</h3>
                <div className="experience__content">
                    {
                      skills.map (({name, icon, classNameColor}) => {
                        const IconComponent = icon
                        return (
                          <article className='experience__details' key={`${name}-${icon}`}>
                            <div key={name}>
                              <IconComponent className='skill_icons'/>
                              <p className='text-light'>{name}</p>
                            </div>
                          </article>
                        )
                      })
                    }
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Experience