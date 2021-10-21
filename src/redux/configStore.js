import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import currencies from './currencies/currencies.js';

const reducer = currencies;

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
