import { loadAlert, loadMessage } from "../notifications/notificationsReducer";
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
        case 200: { dispatch(loginConfirmed(obj.user)); 
                    sessionStorage.setItem('token', obj.token);
                    break;
                  }
        case 401: { dispatch(loginFailed());
                    dispatch(loadAlert(obj.errors));
                    break;
                  }
        default : { console.log("Something went wrong"); break;}
    }
}

// Helper methods

export default loginThunk