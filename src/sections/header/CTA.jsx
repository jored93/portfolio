import React from 'react'
import personal from '../../constants/me.json'
import { BsFiletypePdf, BsTelephone } from "react-icons/bs";

const CTA = () => {
  return (
    <div className='cta'>
      <a href={personal.cv} download className='btn btn-download'>
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