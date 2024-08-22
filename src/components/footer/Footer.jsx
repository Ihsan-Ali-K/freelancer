import React from 'react'
import logo from "../../assets/logo.svg"
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer d-flex justify-content-evenly align-items-center flex-wrap'>
    <div className="footer-logo d-flex align-items-center">
      <img src={logo} alt='footer-log0' />
    </div>
    <div className="footer-copyright d-flex align-items-center">
      <p>© 2024 Freelancer - Phlox Elementor WordPress Theme. All rights reserved.</p>
    </div>
    <div className="footer-links d-flex gap-3 align-items-center">
    <div className="icon">

    <FaFacebook size={20} className='footer-icon' />
    </div>
    <div className="icon">
    <FaLinkedin size={20}  className='footer-icon'/>

    </div>
    <div className="icon">

    <FaInstagramSquare size={20}  className='footer-icon'/>
    </div>
    <div className="icon">

    <BsTwitterX  size={20} className='footer-icon'/>
    </div>
    </div>
    </div>
  )
}

export default Footer