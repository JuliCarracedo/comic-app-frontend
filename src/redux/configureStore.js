
import { configureStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const reducer = combineReducers({
//   user: ,
});

const store = configureStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
