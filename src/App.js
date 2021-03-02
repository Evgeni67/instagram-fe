import React, { Component } from "react";
import Login from "./components/login";
import Register from "./components/register";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/profile/navbar/NavBar";
import Header from "./components/profile/header/Header";
import Posts from "./components/profile/posts/Posts";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <div className="App" style={{ overflowX: "hidden" }}>
              <NavBar />
              <Header />
              <Posts />
            </div>
          </Route>
        </Router>
      </>
    );
  }
}

export default App;
