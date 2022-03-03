import React from "react";
import CreatorCard from "./CreatorCard";

const Creators = () => {
    const creators = ['GrandAlchemist', 'Mazahi Kishimoto', 'Lee Stan', 'ComicMaster', 'PencilManiac', '']
    
    return (
        <section>
            <h2>Creators</h2>

            {creators.map(creator => <CreatorCard creator={creator}/>)}
            
        </section>
    )
}

export default Creators;