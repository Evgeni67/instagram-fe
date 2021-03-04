import React, { Component } from "react";
import Login from "./components/login";
import Register from "./components/register";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/profile/navbar/NavBar";
import Header from "./components/profile/header/Header";
import Posts from "./components/profile/posts/Posts";
import SideBar from "./components/Feed/SideBar";
import Stories from "./components/Feed/Stories";
import Feed from "./components/Feed/Feed";
import Discover from "./components/Discover/Discover";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/discover">
          <NavBar />
            <Discover/>
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          {/* <Route exact path="/home">
            <div className="App" style={{ overflowX: "hidden" }}>
              <NavBar />
            </div>
          </Route> */}
          <Route exact path="/profile">
            <NavBar />
            <Header />
            <Posts />
          </Route>
          <Route exact path="/feed">
            <div className="App" style={{ overflowX: "hidden" }}>
              <NavBar />
              {/* <Stories  /> */}


              <Row
                style={{
                  marginLeft: "70px",
                  marginRight: "70px",
                  marginTop: "100px",
                }}
              >
                <Col sm={12} md={9}>
                  <Feed />
                </Col>
                <Col md={3} className="d-sm-none d-md-block">
                  <SideBar />


      </Col>
              </Row>
            </div>
          </Route>
        </Router>
      </>
    );
  }
}

export default App;
