import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className='navbar'>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/' >Creators</NavLink>
            <NavLink to='/' >Categories</NavLink>
            <NavLink to='/' >Discover</NavLink>

            <NavLink to='/' >Log In</NavLink>
            <NavLink to='/' >Sign up</NavLink>
            <input type='text' placeholder="Search..." />
        </nav>
    )
}

export default Navbar;