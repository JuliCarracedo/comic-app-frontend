import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginThunk from "../../redux/users/loginThunk";

const Login = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { loading, logged } = useSelector(store => store.user)

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

    useEffect(() => {
        if(logged){
            navigate('/');
        }
    }, [logged])

    return (
        <div className="container">
            {!loading ? <form id="login" onSubmit={e => handleSend(e)}>

                <label htmlFor="email">Email:</label>
                <input onChange={e => handleChange(e)} type="email" name="email" id="email" placeholder="Enter your email"/>

                <label htmlFor="password">Password:</label>
                <input onChange={e => handleChange(e)} type="password" name="password" id="password" placeholder="Enter your password"/>

                <input type="submit" id="submit" value="Log in"/>
            </form> :
            
            <h1> Loading...</h1> }

        </div>
    )
}

export default Login;