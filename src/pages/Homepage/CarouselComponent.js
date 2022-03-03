import React, { useState } from "react";
import '../../styles/carousel.css'
const CarouselComponent = () =>{
  const alt = ['dragonball', 'naruto', 'bleach']
  const image = ['https://dragonline86.files.wordpress.com/2008/10/155jpg.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpPv6z69QcXX4E5hk1nBLSLosRQYSqZ1b4Qg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nj4bhVn36GwOSSIxTDK1ICAyTGu39lGSMg&usqp=CAU']
  const [current, setCurrent] = useState(0)

  const back = () =>{
    setCurrent(current === 0 ? alt.length -1 : current - 1)
  }

  const forward = () =>{
    setCurrent(current === alt.length -1 ? 0 : current + 1)
  }

  return(
    <div className="carousel-container">
      <button type="button" onClick={back}> {'<'} </button>
      <div className="carousel-inner">
          {<a className="item"><img className="item" key={alt[current]} alt={alt[current]} src={image[current]} /></a>}
      </div>
      <button type="button" onClick={forward}> {'>'} </button>
    </div>

  )

}

export default CarouselComponent;