import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configStore.js';
import Navbar from '../components/Navbar.js';

describe('integration test in navbar', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders the navbar', () => {
    render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    );
    const heading = screen.getByText(/FOREIGN EXCHANGE MARKET/i);

    expect(heading).toBeInTheDocument();
  });
});
