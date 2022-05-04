import { loadAlert, loadMessage } from "../notifications/notificationsReducer";
import { registerConfirmed, registerFailed, requestRegistration } from "./usersReducer"

const URL = 'https://cherry-crumble-58684.herokuapp.com/api/users/sign_up'

// Handles the login process
const registerThunk = (user) => async(dispatch) => {
    dispatch(requestRegistration());
    const response = await fetch(`${URL}?username=${user.username}&email=${user.email}&password=${user.password}`)

    const obj = await response.json();

    switch(response.status){
        case 200: { dispatch(registerConfirmed(obj.user)); 
                    dispatch(loadMessage(obj.message));
                    localStorage.getItem('token', obj.token);
                    break;}
        case 401: { dispatch(registerFailed()); 
                    dispatch(loadAlert(obj.errors))
                    break;}
        default : { console.log("Something went wrong"); break;}
    }
}

// Helper methods

export default registerThunk