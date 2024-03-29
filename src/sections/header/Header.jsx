import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../constants/me.json'
import profile from '../../assets/images/me.png';
import HeaderSocial from './HeaderSocial'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h1>{me.name}</h1>
                <h3 className="text-light">{me.profile}</h3>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={profile} alt="Jored93" />
                </div>

                <a href="#portfolio" className='scroll__down'>Projects</a>
            </div>
        </header>
    )
}

export default Header