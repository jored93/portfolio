import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import me from '../../constants/me.json'
import './footer.css'

const Footer = () => {
  const social = me.socials
  return (
    <footer>
      <a href="#" className='footer__logo'><img src={me.logotype} alt="joreddev" /></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        {
          social.map(({id, icon, url, name}) => {
            return (
              <a href={url} key={name}>
                <i className={icon}></i>
              </a>
            )
          })
        }
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