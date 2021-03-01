import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Login from "./components/login";
import Register from "./components/register";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Route path = "/login">
        <Login />
        </Route>
        <Route path = "/register">
        <Register />
        </Route>
        </Router>
      </>
    );
  }
}

export default App;
