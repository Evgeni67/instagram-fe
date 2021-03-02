import React, { Component } from "react";
import Login from "./components/login";
import Register from "./components/register";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/profile/navbar/NavBar";
import Header from "./components/profile/header/Header";
import Posts from "./components/profile/posts/Posts";
import SideBar from "./components/Feed/SideBar";
import Feed from "./components/Feed/Feed";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Row,Col  } from "react-bootstrap";
class App extends Component {
  render() {
    return (
      <>
        <Router>
        
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          
          <Route exact path="/home">
            <div className="App" style={{ overflowX: "hidden" }}>
            
              <Header />
              <Posts />
              <NavBar />
            </div>
          </Route>
          <Route exact path="/feed">
            <Row>
              <Col className="s-12 md-7" style={{marginTop: "6vh"}}>
              <Feed />
              </Col>
              <Col className=" d-s-none d-m-block md-3 " style={{marginTop: "6vh"}}>
              <SideBar/>
              </Col>
            </Row>
           
          </Route>
        </Router>
      </>
    );
  }
}

export default App;
