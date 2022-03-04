import React from "react";
import '../../styles/comics-card.css'

const ComicsCard = (props) => {
    const { comic } = props

    return (
        <div className="comics-card">
            <img className="comic-cover" alt='cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjI3lRjeOzOEettfuTSjy37Zb55iUpoHuQg&usqp=CAU"/>  
            <div className="title-and-category">
                <h3>{ comic.title }</h3>
                <h4>{comic.category}</h4>
            </div>  
            
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus erat ac mauris volutpat facilisis. Fusce malesuada ex in nisl ornare, at ornare augue condimentum. Nullam mattis nisi id dui.</p>
            <div className="comic-stats">
                <p> Followers: X </p>
                <p> Chapters: X, Ongoing</p>
            </div>
        </div>
    )
}

export default ComicsCard