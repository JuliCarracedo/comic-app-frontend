import React from "react";
import { useSelector } from "react-redux";
import ComicsCard from "../Comic-Card/ComicsCard";

const User = () => {

    const { search } = useSelector(state=>state.user)
    const user = search.user || false;

    const comics = [{category: 'Action', title: 'Dragon Ball'},
    {category: 'Action', title: 'Naruto'},
    {category: 'Fantasy', title: 'Tales of a Swordsman'}]

    return( user ?
    <div className="container">
        
        <div className="top">
            <img alt="profile" className="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDyvGPdkQdUyozfQIHwKd6vBUg0gF7w-mpiQ&usqp=CAU"/>
            <div className="profile-text">
                <h2>{user.username}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus erat ac mauris volutpat facilisis. Fusce malesuada ex in nisl ornare, at ornare augue condimentum. Nullam mattis nisi id dui.</p>   
            </div>
        </div>

        <div className="comics>">
            <h3>{`${user.username}'s comics`}</h3>
            <div className="comics-by-category">{comics.map(comic=><ComicsCard comic={comic}/>)}</div>
            
        </div>
    </div> 
    :
    <h1>Loading...</h1>
    )
}

export default User