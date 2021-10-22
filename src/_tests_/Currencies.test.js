import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect.js';
import store from '../redux/configStore.js';
import Currencies from '../components/currencies.js';

jest.mock('../api/currency-api.js');

describe('Integration tests in Currencies', () => {
  it('matches the snapshot', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Currencies />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders filter buttons', () => {
    render(
      <Provider store={store}>
        <Currencies />
      </Provider>,
    );
    const filterBtn = screen.getByText(/alphabetical/i);
    expect(filterBtn).toBeInTheDocument();
  });

  it('Renders the reference currency', () => {
    render(
      <Provider store={store}>
        <Currencies />
      </Provider>,
    );
    const referenceCurrency = screen.getByText(/usd/i);
    expect(referenceCurrency).toBeInTheDocument();
  });
});
