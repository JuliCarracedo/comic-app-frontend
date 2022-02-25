import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../../styles/navbar.css'
const Navbar = () => {
    return(
        <nav className='navbar'>
            <div>
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/' >Creators</NavLink>
                <NavLink to='/' >Categories</NavLink>
                <NavLink to='/' >Discover</NavLink>
            </div>
            <input type='text'/>
            <div>
                <NavLink to='/' >Log In</NavLink>
                <NavLink to='/' >Sign up</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;