import React from 'react'
import "./Footer.css"
import { AiFillInstagram } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="links">
        <a href="https://www.instagram.com/dgn_t75/"><AiFillInstagram size={50}/></a>
        <a href="https://github.com/ogutdgn"><BsGithub size={50}/></a>
        <a href="https://www.linkedin.com/in/doganogut/"><BsLinkedin size={50}/></a>
      </div>
    </div>
  )
}

export default Footer