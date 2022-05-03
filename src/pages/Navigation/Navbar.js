import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import '../../styles/navbar.css'
const Navbar = () => {

    const { logged, user } = useSelector(store=>store.user)

    return(
        <nav className='navbar'>
            <div>
                <NavLink className='link' to='/' >Home</NavLink>
                <NavLink className='link' to='/creators' >Creators</NavLink>
                <NavLink className='link' to='/categories' >Categories</NavLink>
                <NavLink className='link' to='/discover' >Discover</NavLink>
            </div>
            <input type='text'/>
            {logged ? <div>
                <NavLink className='link' to='/' >Log Out</NavLink>
                <NavLink className='link' to='/profile' > {user.username} </NavLink>
            </div> : <div>
                <NavLink className='link' to='/login' >Log In</NavLink>
                <NavLink className='link' to='/signup' >Sign up</NavLink>
            </div>}
        </nav>
    )
}

export default Navbar;