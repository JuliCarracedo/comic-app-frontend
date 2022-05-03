import React from "react";
import { Link } from "react-router-dom";
import '../../styles/chapter-card.css'

const ChapterCard = (props) =>{
    const { chapter } = props;
    const { number,title,description } = chapter
    return(
    <Link className="chapter-link" to='/read'>
        <div className="chapter-card">
            <div className="text">
                <h3>{number.toString().concat('.').concat(title)}</h3>
                <p>{description}</p>
            </div>
            <div className="likes">
                <p>X Likes</p>
            </div>
        </div> 
    </Link>)
}

export default ChapterCard