import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const FormikForm = lazy(() => import('../../features/FormikForm'));
const PureReactForm = lazy(() => import('../../features/PureReactForm'));
const SongPlayer = lazy(() => import('../../features/song-player/SongPlayer'));
const Post = lazy(() => import('../../features/post/Post'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/FormikForm" component={FormikForm} />
        <Route exact path="/PureReactForm" component={PureReactForm} />
        <Route exact path="/SongPlayer" component={SongPlayer} />
        <Route exact path="/Post" component={Post} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
