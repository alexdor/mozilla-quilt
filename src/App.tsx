import 'react-s-alert/dist/s-alert-default.css';

import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import { Provider } from 'react-redux';
import Alert from 'react-s-alert';

import QuiltFooter from './components/QuiltFooter';
import QuiltNavbar from './components/QuiltNavbar';
import { Routes } from './routes';
import store, { history } from './store/createStore';

class App extends React.Component {
  public render() {
    return (
      <React.StrictMode>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div
              style={{ minHeight: "100vh" }}
              className="core-layout__viewport container-fluid"
            >
              <div className="container">
                <QuiltNavbar />
                <Routes />
              </div>
              <QuiltFooter />
              <Alert stack={{ limit: 3 }} position="bottom-left" />
            </div>
          </ConnectedRouter>
        </Provider>
      </React.StrictMode>
    );
  }
}

export default App;
