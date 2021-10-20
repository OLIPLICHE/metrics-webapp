import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component="" />
    </Switch>
  </Router>
);

export default App;
