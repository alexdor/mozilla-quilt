import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Spinner from '../components/Spinner';

// FIXME: Fix this once new types have landed

const Suspense = (React as any).Suspense;
const AsyncComponent = (Component: any) =>
  (React as any).memo((props: any) => (
    <Suspense fallback={<Spinner />}>
      <Component {...props} />
    </Suspense>
  ));

const Home = (React as any).lazy(() =>
  import(/* webpackPrefetch: true */ "./Home")
);

const FAQ = (React as any).lazy(() =>
  import(/* webpackPrefetch: true */ "./FAQ")
);
const RedirectComponent = () => <Redirect to="/stories" push={true} />;

export const Routes = () => (
  <Switch>
    <Route path="/stories" component={AsyncComponent(Home)} exact={true} />
    <Route path="/faq" component={AsyncComponent(FAQ)} exact={true} />

    <Route render={RedirectComponent} />
  </Switch>
);
