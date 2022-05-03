import { registerConfirmed, registerFailed, requestRegistration } from "./usersReducer"

const URL = 'https://cherry-crumble-58684.herokuapp.com/api/users/sign_up'

// Handles the login process
const registerThunk = (user) => async(dispatch) => {
    dispatch(requestRegistration());
    const response = await fetch(URL,{ 
                                method: 'GET', 
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({email: user.email, password: user.password, username: user.username}) })
    const obj = await response.json();
    switch(response.status){
        case 200: { dispatch(registerConfirmed(obj.message, obj.user)); 
                    localStorage.getItem('token', obj.token);
                    return}
        case 401: { dispatch(registerFailed(obj.errors)); return}
        default : { console.log("Something went wrong"); return}
    }
}

// Helper methods

export default registerThunk