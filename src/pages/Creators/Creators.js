import React from "react";
import CreatorCard from "./CreatorCard";

const Creators = () => {
    const creators = ['GrandAlchemist', 'Mazahi Kishimoto', 'Lee Stan', 'ComicMaster', 'PencilManiac', 'Pirate God']
    
    return (
        <section className="container">
            <h2>Creators</h2>
            <div className="creators">
            {creators.map(creator => <CreatorCard creator={creator}/>)}
            </div>
        </section>
    )
}

export default Creators;