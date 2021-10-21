class CurrencyAPI {
  constructor() {
    this.BASE_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/';
  }

  async callApi(endpoint) {
    const response = await fetch(`${this.BASE_URL}${endpoint}`);
    return response.json();
  }

  getCurrencyNames() {
    return this.callApi('currencies.json');
  }

  getExchangeRates(currency = 'usd') {
    return this.callApi(`currencies/${currency}.json`);
  }
}

const api = new CurrencyAPI();

export default api;
