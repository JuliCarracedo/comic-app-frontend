import React from "react";
import '../../styles/carouselSelector.css'
const CarouselSelector = () => {

    const categories = ['TOP', 'ACTION', 'ROMANCE', 'FANTASY'];

    return (
        <div className="carousel-selector">
            <ul>
               {categories.map((cat, i) => (<li key={cat} className={ i != 0 ? 'not-first' : 'first' }>
                    <div>
                        <h3>{cat}</h3>
                    </div>
                </li>))}
            </ul>
        </div>
    )
}

export default CarouselSelector