import * as React from "react";
import { asyncComponent } from "react-async-component";
import { Redirect, Route, Switch } from "react-router";
import Spinner from "../components/Spinner";

const Home = asyncComponent({
  LoadingComponent: Spinner,
  resolve: () => import(/* webpackPrefetch: true*/ "./Home")
});

const FAQ = asyncComponent({
  LoadingComponent: Spinner,
  resolve: () => import(/* webpackPrefetch: true*/ "./FAQ")
});

const Admin = asyncComponent({
  LoadingComponent: Spinner,
  resolve: () => import(/* webpackPrefetch: true*/ "./Admin")
});

const RedirectComponent = () => <Redirect to="/stories" push={true} />;

export const Routes = () => (
  <Switch>
    <Route path="/stories" component={Home} exact={true} />
    <Route path="/faq" component={FAQ} exact={true} />
    <Route path="/admin" component={Admin} exact={true} />

    <Route render={RedirectComponent} />
  </Switch>
);
