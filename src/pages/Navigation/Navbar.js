import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import '../../styles/navbar.css'
const Navbar = () => {

    const { logged } = useSelector(store=>store.user)

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
                <NavLink className='link' to='/profile' >
                    <h1> Username </h1>
                    <img alt="profile" src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"/>
                </NavLink>
                
            </div> : <div>
                <NavLink className='link' to='/login' >Log In</NavLink>
                <NavLink className='link' to='/signup' >Sign up</NavLink>
                </div>}
        </nav>
    )
}

export default Navbar;