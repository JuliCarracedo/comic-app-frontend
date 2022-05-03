import React from "react";
import { Link } from "react-router-dom";
import '../../styles/comics-card.css'

const SuggestionCard = (props) => {
    const { comic, suggestion } = props
    return (
        <Link className="link-tag" to='/comic' >
            <div className={`comics-card ${suggestion?'smaller':''}`}>
                <img className="comic-cover" alt='cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjI3lRjeOzOEettfuTSjy37Zb55iUpoHuQg&usqp=CAU"/>  
                <div className="title-and-category">
                    <h3>{ comic.title }</h3>
                    <h4>{comic.category}</h4>
                </div>  
            </div>
        </Link>
    )
}

export default SuggestionCard;