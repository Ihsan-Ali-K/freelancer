import React from 'react'
import "./Hero.css"
import { Button } from 'react-bootstrap'
import bigImage from "../../assets/hero-img.png"
import { motion } from "framer-motion"
const Hero = () => {

    

    return (
        <div className='hero '>
            <div className="hero-container d-flex ">
                <div className="information">
                    <h5>--Introducing</h5>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h1">
                        <h1>Hello</h1>
                        <h1 className="text-md-start"> I am Jessy Walter</h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >Since beginning my journey as a freelance designer nearby 7 years ago, I 've done remote work for agencies, consulted for startup, and collaborated with talented people to create digital products.</motion.p>
                    <motion.Button className='button'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Contact Us
                    </motion.Button>
                </div>
                <div className="big-image">
                    <motion.div

                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, }}

                        className="circle">



                    </motion.div>
                    <motion.div 
                    initial={{ opacity: 0, }}
                        animate={{ opacity:1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="logo logo-id">Id</motion.div>
                    <motion.div 
                    initial={{ opacity: 0, }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="logo logo-ps">Ps</motion.div>
                    <motion.div 
                    initial={{ opacity: 0, }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="logo logo-xd">Xd</motion.div>
                    <motion.div 
                    initial={{ opacity: 0,  }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="logo logo-ai">Ai</motion.div>
                    <motion.img
                      initial={{ y: 1000}}
                      animate={{y: 0}}
                      transition={{duration : 2, delay: 0.5}}
                    
                    src={bigImage} alt='big-image' className="img-fluid" />

                </div>
            </div>
        </div>
    )
}

export default Hero