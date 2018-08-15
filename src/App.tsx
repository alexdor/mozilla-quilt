import { ConnectedRouter } from "connected-react-router";
import * as React from "react";
import * as ReactGA from "react-ga";
import { Provider } from "react-redux";
import QuiltFooter from "./components/QuiltFooter";
import QuiltNavbar from "./components/QuiltNavbar";
import { develop } from "./helpers/helpers";
import { Routes } from "./routes";
import store, { history } from "./store/createStore";

if (!develop) {
  ReactGA.initialize("UA-84301250-18");
}
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
            </div>
          </ConnectedRouter>
        </Provider>
      </React.StrictMode>
    );
  }
}

export default App;
