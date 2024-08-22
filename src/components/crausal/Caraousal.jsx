import React, { useState } from 'react'
import { FaQuoteLeft, FaRegCircleDot } from 'react-icons/fa6';
import { Carousel } from 'react-responsive-carousel';
import image from "../../assets/testi.png"
import { Image } from 'react-bootstrap';
import "./Caraousel.css"
import comas from "../../assets/qoute.svg"
import { IoRadioButtonOnOutline } from 'react-icons/io5';
const Caraousal = ({ content }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  

 
  const prevSlide = () => {
    const newIndex = (currentIndex === 0) ? content.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex === content.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="caraousel-wrapper">




      <div className="caraousel d-flex justify-content-center  flex-wrap align-items-center p-5">
        <div className="caraousel-image">
          <img src={content[currentIndex].image} className='caraousel-custom' alt='image' rounded />
        </div>
        <div className="carousel-info">
          <FaQuoteLeft className='custom-qoute' size={80} />
          <p>{content[currentIndex].paragraph}</p>
          <h2>{content[currentIndex].heading}</h2>
          <h5>{content[currentIndex].subheading}</h5>
        </div>

      </div>
      <div className="caraousel-buttons d-flex justify-content-center gap-2">
        <IoRadioButtonOnOutline size={30} onClick={nextSlide} className={`caraousel-icons ${currentIndex === 0 ? 'active' : ''}`} />
        <IoRadioButtonOnOutline size={30} onClick={prevSlide} className={`caraousel-icons ${currentIndex !== 0 ? 'active' : ''}`} />
      </div>
      


    </div>

  )
}

export default Caraousal