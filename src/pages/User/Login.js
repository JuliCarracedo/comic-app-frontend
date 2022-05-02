import React, { useState } from "react"

const Login = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

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
        console.log(user);
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