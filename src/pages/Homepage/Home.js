import React from "react";
import CarouselComponent from "./CarouselComponent";
import CarouselSelector from "./CarouselSelector";
import '../../styles/home.css'

const Home = () => {
    return(
        <div className="home">
            <div className="top">
                < CarouselSelector />
                < CarouselComponent />
            </div>
            <section>
                <h2> Most viewed </h2>
            </section>
            <section>
                <h2> Discover </h2>
            </section>
        </div>
    )
}

export default Home;