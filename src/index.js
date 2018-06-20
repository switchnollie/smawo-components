import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Alarms from "./Alarms";
import Settings from "./Settings";
import Feed from "./Feed";
import PaginationDotsContainer from "./PaginationDotsContainer";

const Routes = () => (
  <BrowserRouter>
    <div className="app-container">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/feed" />} />
        <Route path="/alarms" component={Alarms} />
        <Route path="/feed" component={Feed} />
        <Route path="/settings" component={Settings} />
      </Switch>
      <PaginationDotsContainer />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();
