import {
  combineReducers,
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers.js';

const reducers = combineReducers({
  root: rootReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
