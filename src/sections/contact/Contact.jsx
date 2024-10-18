import React, {useRef} from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import me from '../../constants/me.json'

import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>-</h5>
      <h2>Contactame</h2>

      <div className='container contact__container'>
        <div className='contact__options contact__links'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>eduardorrala@live.com</h5>
            <a href="mailto:eduardorrala@live.com"> Escribir mail</a>
          </article>

          <article className='contact__option'>
            <FaLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <a href={me.socials[0].url}>Jorman Orrala Lainez</a>
          </article>
        </div>
        <form>
          <input type="text" name="name" placeholder='Your full name' required />
          <input type="email" name="email" placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Ir a whatsapp</button>
        </form>
      </div>
    </section>
  )
}

export default Contact