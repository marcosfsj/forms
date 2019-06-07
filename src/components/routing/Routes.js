import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormikForm from '../../features/FormikForm';
import PureReactForm from '../../features/PureReactForm';
import ReactFormWithBootstrap from '../../features/ReactFormWithBootstrap';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/FormikForm' component={FormikForm} />
      <Route exact path='/PureReactForm' component={PureReactForm} />
      <Route exact path='/ReactFormWithBootstrap' component={ReactFormWithBootstrap} />
    </Switch>
  );
};

export default Routes;
