import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import store from '../redux/configStore.js';
import { combineCurrencyRate, filterRates } from '../items/items.js';

import '../css/Currencies.css';

const Currencies = () => {
  const currencies = useSelector((state) => state.currencies);
  const usdExchange = useSelector((state) => state.usdExchange);

  const [rates, setRates] = useState([]);

  useEffect(() => {
    setRates(combineCurrencyRate(currencies, usdExchange));
  }, []);

  store.subscribe(() => {
    setRates(combineCurrencyRate(currencies, usdExchange));
  });

  const handleClick = (filter) => {
    setRates(filterRates(rates, filter));
  };

  const generateTiles = (rates) => {
    const tiles = rates.map((rate) => (
      <NavLink to={`/currency/${rate.code}`} key={rate.code}>
        <div className="item-tile">
          <span className="material-icons-outlined item-arrow-icon">
            <i className="fal fa-arrow-circle-right" />
          </span>
          <div className="item-tile-illustration">
            <h1>{rate.code}</h1>
          </div>
          <div className="item-tile-content">
            <h2>{rate.name}</h2>
            <h3>{rate.value}</h3>
          </div>
        </div>
      </NavLink>
    ));
    return tiles;
  };

  return (
    <main>
      <div className="header-tile">
        <div>
          <h1>1 USD</h1>
        </div>
        <div>
          <button
            className="btn"
            type="button"
            onClick={() => handleClick('alphabetical')}
          >
            alphabetical
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => handleClick('most_valued')}
          >
            most valued
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => handleClick('least_valued')}
          >
            least valued
          </button>
        </div>
      </div>
      <div className="stats-header">
        Stats by Currency
      </div>
      <div className="tiles-wrapper">
        {generateTiles(rates)}
      </div>
    </main>
  );
};

export default Currencies;
