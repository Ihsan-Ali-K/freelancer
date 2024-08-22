import React from 'react'
import "./Project3.css"
import ProjectImage from '../../assets/portfolio-3-img.jpg'
import { Button } from 'react-bootstrap'
import { FaArrowRightLong } from 'react-icons/fa6'
import {motion} from "framer-motion"
const Project3 = () => {
  return (
    <div className='containers'>
    <div className="project3-circle">

    </div>
    <div className='project2 p-5 d-flex flex-wrap justify-content-center  gap-5'>
       

        <motion.div 
        
        initial={{opacity: 0, y:50}}
        transition={{duration: 1, delay: 1}}
        whileInView={{opacity: 1, y: 0}}

        className="project1-info">
            <h4>--Project 3</h4>
            <h1>Resturant Landing Page</h1>
            <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
            <div className="readmore">
                <FaArrowRightLong className='custom-icon' />
                <Button variant="link">
                    Read More
                </Button>
            </div>
        </motion.div>
        <div className="project1-card">
            <motion.img
            
            initial= {{rotate: 0}}
            transition={{duration:1, delay: 0.5}}
            whileInView={{rotate: 10,}}
            src={ProjectImage} alt='project-1' />
        </div>


    </div>
    </div>
  )
}

export default Project3