import React from 'react'
import personal from '../../constants/me.json'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={personal.cv} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default CTA