import React from "react";
import ComicsCard from "../Comic-Card/ComicsCard";

const User = () => {
    const comics = [{category: 'Action', title: 'Dragon Ball'},
    {category: 'Action', title: 'Naruto'},
    {category: 'Fantasy', title: 'Tales of a Swordsman'}]

    return(
    <div className="container">
        <div className="top">
            <img alt="profile" className="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDyvGPdkQdUyozfQIHwKd6vBUg0gF7w-mpiQ&usqp=CAU"/>
            <div className="profile-text">
                <h2>USERNAME</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus erat ac mauris volutpat facilisis. Fusce malesuada ex in nisl ornare, at ornare augue condimentum. Nullam mattis nisi id dui.</p>   
            </div>
        </div>

        <div className="comics>">
            <h3>USERNAME'S comics</h3>
            <div className="comics-by-category">{comics.map(comic=><ComicsCard comic={comic}/>)}</div>
            
        </div>
    </div>
    )
}

export default User