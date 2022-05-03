import { loginConfirmed, loginFailed, requestLogin } from "./usersReducer"

const URL = 'https://cherry-crumble-58684.herokuapp.com/api/users/login'

// Handles the login process
const loginThunk = (user) => async(dispatch) => {
    dispatch(requestLogin());
    const response = await fetch(URL,{ 
                                method: 'POST', 
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({email: user.email, password: user.password}) })
    const obj = await response.json();
    switch(response.status){
        case 200: { dispatch(loginConfirmed(obj.message, obj.user)); 
                    localStorage.getItem('token', obj.token);
                    return}
        case 401: { dispatch(loginFailed(obj.errors)); return}
        default : { console.log("Something went wrong"); return}
    }
}

// Helper methods

export default loginThunk