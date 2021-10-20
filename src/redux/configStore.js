import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import forexReducer from './forex/forex';

const reducer = combineReducers({
  forex: forexReducer,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), applyMiddleware(logger)),
);

export default store;