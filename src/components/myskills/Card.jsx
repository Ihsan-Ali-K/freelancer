import React from 'react'
import { SiAntdesign } from 'react-icons/si'
import {motion} from "framer-motion"
const Card = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale:1.3 }}
    transition={{ duration: 1, delay: 0.5 }} 
    whileInView={{ opacity:1,  scale: 1 }}
    className='cards'>
        <div className="card-border d-flex  justify-content-center align-items-center">
        <SiAntdesign size={30}/>
       
        </div>
        <h4 className='fw-bold'>Product Design</h4>
        <p >The technological revolution is changing aspect</p>

    </motion.div>
  )
}

export default Card