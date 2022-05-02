import { requestLogin } from "./usersReducer"

const URL = 'https://cherry-crumble-58684.herokuapp.com/api/users/login'

// Handles the login process
const loginThunk = (user) => async(dispatch) => {
    dispatch(requestLogin());
    const response = await fetch(URL,{ method: 'POST', body: userToJson(user)
    })
    const obj = await response.json();
    console.log(obj);
}

// Helper methods

const userToJson = (user) => { JSON.stringify({email: user.email, password: user.password}) }


export default loginThunk