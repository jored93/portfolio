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
                <h3>Hello I'm</h3>
                <h1>{me.name}</h1>
                <h3 className="text-ligth">{me.profile}</h3>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={me.logotype} alt="Jored93" />
                </div>

                <a href="#portfolio" className='scroll__down'>Projects</a>
            </div>
        </header>
    )
}

export default Header