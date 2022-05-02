import React, { useState } from "react"
import { useDispatch } from "react-redux";
import loginThunk from "../../redux/users/loginThunk";

const Login = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.stopPropagation();
        switch (e.target.id) {
            case "email": setEmail(e.target.value)
            case "password": setPass(e.target.value)
            default: return;
            }
    }

    const handleSend = (e) => {
        e.preventDefault();
        const user = {email: email, password: pass};
        dispatch(loginThunk(user));
    } 

    return (
        <div className="container">
            <form id="login" onSubmit={e => handleSend(e)}>

                <label htmlFor="email">Email:</label>
                <input onChange={e => handleChange(e)} type="email" name="email" id="email" placeholder="Enter your email"/>

                <label htmlFor="password">Password:</label>
                <input onChange={e => handleChange(e)} type="password" name="password" id="password" placeholder="Enter your password"/>

                <input type="submit" id="submit" value="Log in"/>
            </form>
        </div>
    )
}

export default Login;