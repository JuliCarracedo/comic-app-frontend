import React, { useState } from "react";
import '../../styles/carouselSelector.css'
const CarouselSelector = () => {

    const categories = ['TOP', 'ACTION', 'ROMANCE', 'FANTASY'];
    const [active,setActive] = useState('TOP')
    const handleClick = (e, value) => {
        e.preventDefault()
        setActive(value)
    }
    return (
        <div className="carousel-selector">
            <ul>
               {categories.map((cat, i) => (<li key={cat} className={
                    (i != 0 ? 'not-first' : 'first').concat(cat  === active ? ' active-select' : '') }>
                    <div onClick={e=>handleClick(e,cat)}>
                        <h3>{cat}</h3>
                    </div>
                </li>))}
            </ul>
        </div>
    )
}

export default CarouselSelector