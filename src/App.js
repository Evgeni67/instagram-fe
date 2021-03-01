import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Login from "./components/login";
import "bootstrap/dist/css/bootstrap.css";
class App extends Component {
  render() {
    return (
      <>
        <Login />
      </>
    );
  }
}

export default App;
