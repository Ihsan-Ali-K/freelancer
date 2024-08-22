import React from 'react'
import "./Contact.css"
import { Button } from 'react-bootstrap'
const Contact = () => {
  return (
    <div className="contact-wrapper">

    <div className='contact-us  d-flex p-5  flex-column align-items-center justify-content-center gap-5 '>
        <div className="contact-circle1"></div>
       
       <h2>we are the no 1 Freelancers over the globe</h2>
       <Button className='button'>Contact Us</Button>
      
       


    </div>
     <div className="contact-circle2"></div>
    </div>
  )
}

export default Contact