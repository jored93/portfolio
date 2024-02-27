import React from 'react'
import './portfolio.css'
import porfolio from '../../constants/portfolio.json'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>-</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          porfolio.map (({id, image, imageAlt, tittle, description, github, demo}) => {
            return (
              <article className='portfolio__item'  key={`${tittle}-${id}`}>
                <div className='portfolio__item-image'>
                  <img src={image} alt={imageAlt} />
                </div>
                <h3>{tittle}</h3>
                <h6>{description}</h6>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel='noreferrer'><i className="bi bi-github"></i></a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'><i className="bi bi-globe"></i></a> */}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio