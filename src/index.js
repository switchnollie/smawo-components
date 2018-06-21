import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Parallax } from "react-spring";
import PaginationDotsContainer from "./views/PaginationDotsContainer";
import Pages from "./Pages";
import { createStore } from "redux";
import { Provider } from "react-redux";
import appReducer from "./reducers/appReducer";

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Routes = () => (
  <Provider store={store}>
    <BrowserRouter onChange>
      <Route
        render={({ location }) => (
          <div className="app-container">
            <Switch location={location}>
              <Parallax
                ref={ref => (this.parallaxRef = ref)}
                pages={3}
                horizontal
                scrolling={false}>
                <Route exact path="/" render={() => <Redirect to="/feed" />} />
                <Route
                  path="/alarms"
                  render={() => (
                    <Pages activePage={0} parallaxRef={this.parallaxRef} />
                  )}
                />
                <Route
                  path="/feed"
                  render={() => (
                    <Pages activePage={1} parallaxRef={this.parallaxRef} />
                  )}
                />
                <Route
                  path="/settings"
                  render={() => (
                    <Pages activePage={2} parallaxRef={this.parallaxRef} />
                  )}
                />
              </Parallax>
            </Switch>
            <PaginationDotsContainer />
          </div>
        )}
      />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();
