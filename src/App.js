import React, { Component } from "react";
import { HashRouter, NavLink } from "react-router-dom";
import routes from "./routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink activeClassName="active" to="/route2">
              Route2
            </NavLink>
            <NavLink activeClassName="active" to="/route3">
              Route3
            </NavLink>
          </header>
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
