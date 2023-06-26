import React, {useRef} from 'react'
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import './contact.css'

const Contact = () => {
  const MySwal = withReactContent(Swal)

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${serviceId}`, `${templateId}`, form.current, `${publicKey}`)
      .then((result) => {
          MySwal.fire({
            title: <strong>`Send ${result}!`</strong>,
            html: <i>The message was send successfuly!</i>,
            icon: 'success'
          })
      }, (error) => {
        MySwal.fire({
          title: <strong>Oops...</strong>,
          html: <i>Something went wrong!</i>,
          icon: 'error'
        })
      });
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>eduardorrala@live.com</h5>
            <a href="mailto:eduardorrala@live.com"> Send a message</a>
          </article>

          <article className='contact__option'>
            <FaInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>_jored93</h5>
            <a href="mailto:eduardorrala@live.com"> Send a message</a>
          </article>

          <article className='contact__option'>
            <FaLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Jorman Orrala Lainez</h5>
            <a href="mailto:eduardorrala@live.com"> Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your full name' required />
          <input type="email" name="email" placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact