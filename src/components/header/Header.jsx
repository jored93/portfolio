import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h3>Hello I'm</h3>
                <h1>Jorman Orrala</h1>
                <h3 className="text-ligth">Fullstack Developer</h3>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt="" />
                </div>

                <a href="#contact" className='scroll__down'> Scroll down</a>
            </div>
        </header>
    )
}

export default Header