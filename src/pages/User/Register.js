import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import registerThunk from "../../redux/users/registerThunk";

const Register = () => {

    const [email, setEmail] = useState('');
    const [username, setUser] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { loading, logged } = useSelector(store => store.user)

    const handleEmail = (e) => {
        e.stopPropagation();
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        e.stopPropagation();
        setPass(e.target.value)
    }

    const handleUser = (e) => {
        e.stopPropagation();
        setUser(e.target.value)
    }

    const handleSend = (e) => {
        e.preventDefault();
        const user = {email: email, password: pass, username: username};
        dispatch(registerThunk(user));
    } 

    useEffect(() => {
        if(logged){
            navigate('/');
        }
    });

    return (
        <div className="container">
            {!loading ? <form id="signup" onSubmit={e => handleSend(e)}>

                <label htmlFor="username">Username:</label>
                <input required onChange={e => handleUser(e)} type="text" name="username" id="username" placeholder="Enter your username"/>

                <label htmlFor="email">Email:</label>
                <input required onChange={e => handleEmail(e)} type="email" name="email" id="email" placeholder="Enter your email"/>

                <label htmlFor="password">Password:</label>
                <input required onChange={e => handlePassword(e)} type="password" name="password" id="password" placeholder="Enter your password"/>

                <input type="submit" id="submit" value="Sign Up"/>
            </form> :
            
            <h1> Loading...</h1> }

        </div>
    )
}

export default Register;