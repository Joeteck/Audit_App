import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route exact path="/summary" component={SecondPage} />
      </Switch>
    </Router>
  );
}

export default App;
