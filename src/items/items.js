export const formatCurrencies = (currenciesObj) => {
  const entriesArr = Object.entries(currenciesObj);
  const currenciesArr = entriesArr.map((currency) => ({
    code: currency[0],
    name: currency[1],
  }
  ));
  return currenciesArr;
};

export const formatRates = (ratesObj) => {
  const entriesArr = Object.entries(ratesObj);
  const ratesArr = entriesArr.map((rate) => ({
    code: rate[0],
    value: rate[1],
  }
  ));
  return ratesArr;
};

export const combineCurrencyRate = (currenciesArr, ratesObj) => {
  const combinedArr = currenciesArr.map((currency) => ({
    ...currency,
    value: ratesObj[currency.code],
  }
  ));
  return combinedArr;
};

export const filterRates = (ratesArr, filter = 'alphabetical') => {
  switch (filter) {
    case 'alphabetical':
      return [...ratesArr].sort((a, b) => (a.code > b.code) ? 1 : -1);// eslint-disable-line

    case 'most_valued':
      return [...ratesArr].sort((a, b) => a.value - b.value);

    case 'least_valued':
      return [...ratesArr].sort((a, b) => b.value - a.value);

    default:
      return ratesArr;
  }
};
