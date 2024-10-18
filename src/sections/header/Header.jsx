import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../constants/me.json'
import JORED from '../../assets/images/about.jpg'
import HeaderSocial from './HeaderSocial'

const Header = () => {
    return (
        <header className='header'>
            <div className="container header__container">
                <h1>{me.name}</h1>
                <h3 className="text-light">{me.profile}</h3>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={JORED} alt="Jored93" />
                </div>

                <a href="#portfolio" className='scroll__down'>Projects</a>
            </div>
        </header>
    )
}

export default Header