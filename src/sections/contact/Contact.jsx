import React, { useState } from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import { SiWhatsapp } from "react-icons/si";
import me from '../../constants/me.json'

import './contact.css'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    subject: '',
  })

  const handleClick = (e) => {
    e.preventDefault()

    if (form) {
      const phoneNumber = '593968392972'
      const message = `Hola, Mi nombre es ${form.name}.\nMe encantaría preguntarle sobre ${
        form.subject
      }. Gracias!`
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`
      window.open(url, '_blank')
    }
  }

  const onChangeForm = (
    event
  ) => {
    const { id, value } = event.target
    setForm({ ...form, [id]: value })
  }

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
          <input 
            type="text"
            id='name'
            name="name"
            placeholder='Tu nombre'
            value={form?.name}
            onChange={onChangeForm}
            required />
          <textarea
            id='subject'
            name="subject"
            rows="7"
            placeholder='Tu mensaje'
            value={form?.subject}
            onChange={onChangeForm}
            required></textarea>
          <button
            type='submit'
            className='btn btn-whatsapp'
            onClick={handleClick}
          >
            Chatear {" "} <SiWhatsapp />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact