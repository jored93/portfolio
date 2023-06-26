import React from 'react'
import './header.css'
import CTA from './CTA'
import personal from '../../constants/me.json'
import HeaderSocial from './HeaderSocial'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h3>Hello I'm</h3>
                <h1>{personal.name}</h1>
                <h3 className="text-ligth">{personal.profile}</h3>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={personal.image} alt="" />
                </div>

                <a href="#portfolio" className='scroll__down'>Projects</a>
            </div>
        </header>
    )
}

export default Header