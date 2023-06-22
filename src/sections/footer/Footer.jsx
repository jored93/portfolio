import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Jored93</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://github">
          <FaGithub />
        </a>
        <a href="https://instagram">
          <FaInstagram />
        </a>
        <a href="https://linkedin">
          <FaLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Jored93. All rights reserved
        </small>
      </div>
    </footer>
  )
}

export default Footer