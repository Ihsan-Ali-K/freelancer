import React, { useRef } from 'react'
import {motion, useInView} from "framer-motion"
import CountUp from 'react-countup';
const Card = (props) => {
  const ref = useRef()
  const inView = useInView(ref, {once: true})
  return (
  
  <div ref={ref} className={`statistics-card` }>
      <h1>
     {inView && 
      <CountUp start={0} end={props.numbers} duration={3} delay={0.2} />
     }
      
      </h1>
      <h3>{props.text}</h3>
    </div>
  )
}

export default Card