import React, { useState } from 'react'
import "./Statistics.css"
import Card from './Card'
const Statistics = () => {
  const [clients , setClients] = useState(57)
  const [porojects, setProjects] = useState(89)
  const [wining, setWining] = useState(16)
  const [experience, setExperience] = useState(4)
  return (
    <div className="wrapper">
      <div className="stat-circle"></div>
    <div className='statistics p-5 d-flex gap-1 justify-content-center flex-wrap'>
     <Card numbers={clients} text="Happy Clients" />
     <Card numbers={porojects} text="Completed Projects"/>
     <Card numbers={wining} text="Award Winning" />
     <Card numbers={experience} text="Years Experience" />
    </div>
    <div className="stat-circle2"></div>

    </div>
  )
}

export default Statistics