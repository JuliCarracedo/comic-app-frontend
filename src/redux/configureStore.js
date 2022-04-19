
import { configureStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import usersReducer from './users/usersReducer';


const reducer = combineReducers({
  user: usersReducer,
});

const store = configureStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
