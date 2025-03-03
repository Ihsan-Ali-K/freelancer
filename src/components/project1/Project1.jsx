import React, { useEffect } from 'react'
import "./Project1.css"
import { Button } from 'react-bootstrap'
import { FaArrowRightLong } from 'react-icons/fa6'
import ProjectImage from "../../assets/portfolio-1-img.jpg"
import {motion, useAnimation, } from "framer-motion"
import { useInView } from 'react-intersection-observer';
const Project1 = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false });

    useEffect(() => {
        if (inView) {
            controls.start({ rotate: 10 });
        } else {
            controls.start({ rotate: 0 });
        }
    }, [controls, inView]);
    return (
        <div className='p-5 d-flex justify-content-center flex-wrap gap-5'>
            <motion.div 
             initial={{ opacity: 0,  y: 50 }}
             transition={{ duration: 1, delay: 1 }} 
             whileInView={{ opacity:1,   y: 0 }}
            className="project1-info">
                <h4>--Project 1</h4>
                <h1>Branding Nice Studio</h1>
                <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
                <div className="readmore">
                    <FaArrowRightLong  className='custom-icon'/>
                    <Button variant="link">
                        Read More
                    </Button>
                </div>
            </motion.div>
            <motion.div 
              
             
              
            className="project1-card">
            <motion.img
             ref={ref}
             initial={{ rotate: 0 }}
             animate={controls}
             transition={{ duration: 1.5, }}
            src={ProjectImage} alt='project-1' />
            </motion.div>

        </div>
    )
}

export default Project1