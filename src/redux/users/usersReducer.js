// CONSTANTS

const REQUEST_LOGIN = "redux/usersReducer/REQUEST_LOGIN";
const LOGIN_CONFIRMED = "redux/usersReducer/LOGIN_CONFIRMED";
const LOGIN_FAILED = "redux/usersReducer/LOGIN_FAILED";

const REQUEST_REGISTRATION = "redux/usersReducer/REQUEST_REGISTRATION";
const REGISTER_CONFIRMED = "redux/usersReducer/REGISTER_CONFIRMED";
const REGISTER_FAILED = "redux/usersReducer/REGISTER_FAILED";

const LOGOUT = "redux/usersReducer/LOGOUT";

const initialState = {};
// ACTIONS

export const requestLogin = () => ({ type: REQUEST_LOGIN});
export const loginConfirmed = (user) => ({ type: LOGIN_CONFIRMED, user});
export const loginFailed = () => ({ type: LOGIN_FAILED});

export const requestRegistration = () => ({ type: REQUEST_REGISTRATION});
export const registerConfirmed = (user) => ({ type: REGISTER_CONFIRMED, user});
export const registerFailed = () => ({ type: REGISTER_FAILED});

export const logout = () => ({type: LOGOUT});

const usersReducer = (state = initialState , action) => {
    switch(action.type){
        // Handle login
        case REQUEST_LOGIN: return {...state, loading: true}
        case LOGIN_FAILED: return {...state, loading: false}
        case LOGIN_CONFIRMED: return {...state, loading: false, logged: true, user: action.user}
        // Handle Registrations
        case REQUEST_REGISTRATION: return {...state, loading: true}
        case REGISTER_FAILED: return {...state, loading: false}
        case REGISTER_CONFIRMED: return {...state, loading: false, logged: true, user: action.user}
        // Log out
        case LOGOUT: return {};
        
        default: return state // We return the default state here
    }
}

export default usersReducer;