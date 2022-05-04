// Constants

const LOAD_MESSAGE = "/redux/notifications/LOAD_MESSAGE";
const LOAD_ALERT = "/redux/notifications/LOAD_ALERT";
const KILL_NOTICE = "/redux/notifications/KILL_NOTICE";

// Actions 

export const loadMessage = (message) =>({
    type: LOAD_MESSAGE,
    message
})

export const loadAlert = (errors) =>({
    type: LOAD_ALERT,
    errors
})

export const killNotice = () =>({
    type: KILL_NOTICE
})

// Reducer

const notificationsReducer = (state = {}, action) => {
    switch(action.type){
        case LOAD_ALERT: return {type: 'alert', alert: readErrors(action.errors)}
        case LOAD_MESSAGE: return {type: 'message', message: action.message}
        case KILL_NOTICE: return {}
        default: return state;
    }
}

// Helpers

const readErrors = (errors) =>{
    result = ''

    for (const item in errors){
       let string = ''
       errors[item].forEach(element => {
           string += `${item} element, `;
       });
       result += `${string}. `;
    }

    return result
}

export default notificationsReducer;

