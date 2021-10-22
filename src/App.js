import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Currencies from './components/Currencies.js';
import Currency from './components/Currency.js';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Currencies />
      </Route>
      <Route path="/currency/:code">
        <Currency />
      </Route>
    </Switch>
  </Router>
);

export default App;
