import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from '../api/currency-api.js';
import { formatRates } from '../utils/utils.js';

import '../styles/Currency.css';

const Currency = () => {
  const { code } = useParams();
  const [rates, setRates] = useState([]);

  useEffect(() => {
    api.getExchangeRates(code)
      .then((rates) => {
        setRates(formatRates(rates[code]));
      });
  }, []);

  const elements = rates ? rates.map((rate) => (
    <div key={rate.code} className="item-half-tile">
      <span className="material-icons-outlined currency-icon">
        price_change
      </span>
      <span className="currency-value">{rate.value}</span>
      <span className="currency-code">{rate.code}</span>
    </div>
  )) : [];

  return (
    <main>
      <div className="header-tile">
        <div>
          <h1 className="currency-header">{`1 ${code}`}</h1>
        </div>
      </div>
      <div className="stats-header">
        Stats by Currency
      </div>
      <div className="tiles-wrapper">
        {elements}
      </div>
    </main>
  );
};

export default Currency;
