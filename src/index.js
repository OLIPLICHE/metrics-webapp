import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/configStore.js';
import App from './App.js';
import { getCurrenciesFromApi, getExchangeFromAPi } from './redux/currencies/currencies.js';
import './css/index.css';

store.dispatch(getCurrenciesFromApi());
store.dispatch(getExchangeFromAPi());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
