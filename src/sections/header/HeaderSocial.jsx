import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import me from '../../constants/me.json'

const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href={me.socials[0].url} target='_blank' rel='noreferrer'><BsLinkedin/></a>
            <a href={me.socials[1].url} target='_blank' rel='noreferrer'><FaGithub/></a>
        </div>
    )
}

export default HeaderSocial