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

    const handleEmail = (e) => {
        e.stopPropagation();
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        e.stopPropagation();
        setPass(e.target.value)
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
                <input required onChange={e => handleEmail(e)} type="email" name="email" id="email" placeholder="Enter your email"/>

                <label htmlFor="password">Password:</label>
                <input required onChange={e => handlePassword(e)} type="password" name="password" id="password" placeholder="Enter your password"/>

                <input type="submit" id="submit" value="Log In"/>
            </form> :
            
            <h1> Loading...</h1> }

        </div>
    )
}

export default Login;