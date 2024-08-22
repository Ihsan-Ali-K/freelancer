import React, { useRef, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.svg"
import { RiGlobalLine } from 'react-icons/ri'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CiMenuFries } from 'react-icons/ci'
import { IoMdClose } from 'react-icons/io'
import { motion } from "framer-motion"
const Navbar = () => {
    const navRef = useRef()
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav")
    }

    return (
        <div className='nav d-flex justify-content-center align-items-center '>
            <div className="nav-container d-flex justify-content-between">
                <div className="nav-logo">
                    <motion.img
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                        src={logo} alt="Logo" className="navbar__logo-img" />
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    ref={navRef} className="nav-links d-flex align-items-center gap-3 ">
                    <IoMdClose size={30} className="close" onClick={showNavbar} />
                    <Link to='/'>Home</Link>
                    <Link to='portfolio'>Portflio</Link>
                    <Link to='contact'>Contact</Link>

                </motion.div>
                <motion.div
                    initial={{ opacity: 0,  x: 50 }}
                    animate={{ opacity:1,  x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }} 
                
                className="icon-button d-flex align-items-center">
                    <CiMenuFries className='menu' onClick={showNavbar} size={40} />
                    <div className="icon">
                        <RiGlobalLine className='custom-icon' />

                    </div>
                    <Button className='button'>
                        Contact Us
                    </Button>
                </motion.div>

            </div>
        </div>
    )
}

export default Navbar