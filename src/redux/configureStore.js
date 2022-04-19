
import { combineReducers, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import usersReducer from './users/usersReducer';


const reducer = combineReducers({
  user: usersReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
