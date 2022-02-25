import React, { useState } from "react";
import '../../styles/carousel.css'
const CarouselComponent = () =>{
  const content = ['Lorem ipsum', 'Title', 'Hello World']
  const [current, setCurrent] = useState(0)

  const back = () =>{
    setCurrent(current === 0 ? content.length -1 : current - 1)
  }

  const forward = () =>{
    setCurrent(current === content.length -1 ? 0 : current + 1)
  }

  return(
    <div className="carousel-container">
      <button type="button" onClick={back}> {'<'} </button>
      <div className="carousel-inner">
          {<div className="item">
                {content[current]}
          </div>}
      </div>
      <button type="button" onClick={forward}> {'>'} </button>
    </div>

  )

}

export default CarouselComponent;