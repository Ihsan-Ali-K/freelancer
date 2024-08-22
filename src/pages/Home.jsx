import React from 'react'
import Hero from '../components/hero/Hero'
import MySkills from '../components/myskills/MySkills'
import Project1 from '../components/project1/Project1'
import Project2 from '../components/project2/Project2'
import Project3 from '../components/project3/Project3'

import MainButton from '../components/button/MainButton'
import Statistics from '../components/statistics/Statistics'
import Caraousal from '../components/crausal/Caraousal'
import image1 from "../assets/testi.png"
import image2 from "../assets/testi2.jpg"
import Contact from '../components/contactus/Contact'

const Home = () => {
 
  const textContent = [
    {

      image: image1,
      paragraph: "The technological revolution is changing every aspect of our lives, and the fabric of society itself. It's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.",
      heading: "Women Diana",
      subheading: "CEO of Figma"
    },


    {
      image: image2,
      paragraph: "The technological revolution is changing every aspect of our lives, and the fabric of society itself. It's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.",
      heading: "John Ihsan",
      subheading: "CEO of Sigma"
    }
  ]


  return (
    <>
      <Hero />
      <MySkills />
      <Project1 />
      <Project2 />
      <Project3 />
      <MainButton />
      <Statistics />
      <Caraousal  content={textContent} />
      <Contact />

    </>
  )
}

export default Home