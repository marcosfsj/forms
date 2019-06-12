import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './store/reducers/Reducers';
import Routes from './config/routing/Routes';
import Landing from './features/Landing';

function App() {
  return (
    <Provider store={createStore(Reducers)}>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
