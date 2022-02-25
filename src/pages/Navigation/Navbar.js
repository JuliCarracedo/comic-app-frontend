import { NavLink } from "react-router-dom";
import '../../styles/navbar.css'
const Navbar = () => {
    return(
        <nav className='navbar'>
            <div>
                <NavLink className='link' to='/' >Home</NavLink>
                <NavLink className='link' to='/creators' >Creators</NavLink>
                <NavLink className='link' to='/categories' >Categories</NavLink>
                <NavLink className='link' to='/discover' >Discover</NavLink>
            </div>
            <input type='text'/>
            <div>
                <NavLink className='link' to='/login' >Log In</NavLink>
                <NavLink className='link' to='/signup' >Sign up</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;