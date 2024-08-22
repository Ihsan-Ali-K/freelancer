import React from 'react'
import "./MySkills.css"
import Card from './Card'
import { Button } from 'react-bootstrap'
import {motion } from "framer-motion"
const MySkills = () => {
    return (
        <div className='p-5 d-flex myskills-container'>
            <div
            
            className="myskill-cards d-flex flex-wrap gap-5">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <motion.div
            initial={{ opacity: 0,  y: 50 }}
            transition={{ duration: 1, delay: 1 }} 
            whileInView={{ opacity:1,   y: 0 }}
            
            className="myskill-info" >
                <h4>--My Skills</h4>
                <h1>Why Hire me for next project?</h1>
                <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
                <Button className='button'>
                    Download CV
                </Button>
            </motion.div>
        </div>
    )
}

export default MySkills