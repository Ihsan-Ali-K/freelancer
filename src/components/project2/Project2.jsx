import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { FaArrowRightLong } from 'react-icons/fa6'
import ProjectImage from "../../assets/portfolio-2-img.jpg"
import "./Project2.css"
import { motion, useAnimation, } from "framer-motion"
import { useInView } from 'react-intersection-observer'

const Project2 = () => {
    const controls = useAnimation()
    const [ref, inView] = useInView({triggerOnce: false})

    useEffect(()=>{
        if(inView){
            controls.start({rotate: 10})
        }else{
            controls.start({rotate: 0})
        }

    }, [controls, inView])
    return (
        <div className='containers'>
            <div className="project2-circle">

            </div>
            <div className='project2 p-5 d-flex flex-wrap justify-content-center gap-5'>
                <div className="project1-card">
                    <motion.img
                        ref={ref}
                        initial={{ rotate: 0 }}
                        animate={controls}
                        transition={{ duration: 1.5 }}
                        src={ProjectImage} alt='project-1' />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1, delay: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}

                    className="project1-info">
                    <h4>--Project 2</h4>
                    <h1>Mobile Card App</h1>
                    <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
                    <div className="readmore">
                        <FaArrowRightLong className='custom-icon' />
                        <Button variant="link">
                            Read More
                        </Button>
                    </div>
                </motion.div>


            </div>
        </div>
    )
}

export default Project2