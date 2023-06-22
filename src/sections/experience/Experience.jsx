import React from 'react'
import './experience.css'
import experience from '../../constants/skills.json'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills i have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        {
          experience.map(({experience, skills}) => {
            return (
              <div key={`${experience}-${skills}`}>
                <h3>{experience}</h3>
                <div className="experience__content">
                    {
                      skills.map (({id, skill, level}) => {
                        return (
                          <article className='experience__details' key={`${skill}-${id}`}>
                            <div>
                              <i className="bi bi-patch-check-fill" style={{ color: '#4db5ff', marginTop: '6px'}}></i>
                              <h4>{skill}</h4>
                              <small className='text-ligth'>{level}</small>
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