import React from 'react'
import personal from '../../constants/me.json'
import CV from '../../assets/docs/JormanOrrala.pdf'
import { BsFiletypePdf, BsTelephone } from "react-icons/bs";

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn btn-download'>
        <BsFiletypePdf
          size={20}
        /> Download CV
      </a>
      <a href={personal.socials[2].url} className='btn btn-call-me'>
        <BsTelephone
          size={20}
        /> Call me
      </a>
    </div>
  )
}

export default CTA