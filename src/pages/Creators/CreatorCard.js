import React from "react";
import PropTypes from 'prop-types'
import '../../styles/creatorCard.css'
import { Link } from "react-router-dom";

const CreatorCard = (props) => {
    const { creator } = props;
    return (
        <div className="card">
            <Link to='/user' className="creator-link">
                <img className="user-img" alt={creator} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDyvGPdkQdUyozfQIHwKd6vBUg0gF7w-mpiQ&usqp=CAU'}/>
                <div className="card-inner">
                    <h4>{creator}</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus erat ac mauris volutpat facilisis. Fusce malesuada ex in nisl ornare, at ornare augue condimentum. Nullam mattis nisi id dui.</p>
                </div>     
            </Link>
        </div>
    )
}

export default CreatorCard