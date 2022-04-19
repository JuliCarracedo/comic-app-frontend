// CONSTANTS

const REQUEST_LOGIN = "redux/usersReducer/REQUEST_LOGIN"
const LOGIN_CONFIRMED = "redux/usersReducer/LOGIN_CONFIRMED"
const LOGIN_FAILED = "redux/usersReducer/LOGIN_FAILED"

const REQUEST_REGISTRATION = "redux/usersReducer/REQUEST_REGISTRATION"
const REGISTER_CONFIRMED = "redux/usersReducer/REGISTER_CONFIRMED"
const REGISTER_FAILED = "redux/usersReducer/REGISTER_FAILED"

const initialState = {}
// ACTIONS

export const requestLogin = () => ({ type: REQUEST_LOGIN})
export const loginConfirmed = (message) => ({ type: LOGIN_CONFIRMED, payload: message})
export const loginFailed = (errors) => ({ type: LOGIN_FAILED, payload: errors})

export const requestRegistration = () => ({ type: REQUEST_REGISTRATION})
export const registerConfirmed = (message) => ({ type: REGISTER_CONFIRMED, payload: message})
export const registerFailed = (errors) => ({ type: REGISTER_FAILED, payload: errors})

const usersReducer = (state = initialState , action) => {
    switch(action.type){
        // Handle login
        case REQUEST_LOGIN: return {...state, loading: true}
        case LOGIN_FAILED: return {...state, loading: false, errors: action.payload}
        case LOGIN_CONFIRMED: return {...state, loading: false, message: action.payload}
        // Handle Registrations
        case REQUEST_REGISTRATION: return {...state, loading: true}
        case REGISTER_FAILED: return {...state, loading: false, errors: action.payload}
        case REGISTER_CONFIRMED: return {...state, loading: false, message: action.payload}
    }
}

export default usersReducer;