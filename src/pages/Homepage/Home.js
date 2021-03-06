import React from "react";
import CarouselComponent from "./CarouselComponent";
import CarouselSelector from "./CarouselSelector";
import '../../styles/home.css'

const Home = () => {
    return(
        <div className="container">
            <div className="top">
                < CarouselSelector />
                < CarouselComponent />
            </div>
        </div>
    )
}

export default Home;