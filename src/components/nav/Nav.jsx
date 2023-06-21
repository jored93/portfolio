import React, {useState} from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { GoChecklist } from 'react-icons/go'
import { FaRegHandshake, FaUserCircle, FaBook } from 'react-icons/fa'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserCircle /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook /></a>
            <a href="#resume" onClick={() => setActiveNav('#resume')} className={activeNav === '#resume' ? 'active' : ''}><FaRegHandshake /></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GoChecklist /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
        </nav>
    )
}

export default Nav