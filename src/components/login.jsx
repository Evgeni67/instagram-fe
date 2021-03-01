import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./instagram.png";
import { GrFacebook } from "react-icons/gr";
import "./login.css";

class Login extends Component {
  render() {
    return (
      <>
        <Row className="d-flex justify-content-center mt-5">
          <Col sm={3} />
          <Col sm={3}>
            <img src={logo} className="loginImage" />
          </Col>
          <Col sm={3} className>
            <Container className="loginContainer">
              <Row className="d-flex justify-content-center ">
                <img
                  className="containerPhoto"
                  src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
                />
              </Row>
              <Row className=" d-flex justify-content-center mb-2">
                <input
                  autocomplete="off"
                  type="email"
                  className="emailInput"
                  placeholder="email"
                ></input>
              </Row>
              <Row className=" d-flex justify-content-center mb-4">
                <input
                  autocomplete="off"
                  type="password"
                  className="passwordInput"
                  placeholder="password"
                ></input>
                <button className="btn">
                  <h className="search">
                    <p className="btnText">Show</p>
                  </h>
                </button>
              </Row>
              <Row className=" d-flex justify-content-center mb-4">
                <button className="loginBtn">Log In</button>
              </Row>
              <hr />
              <Row className=" d-flex justify-content-center mt-2">
                <GrFacebook className="blue mr-2 mt-1" />{" "}
                <p className="blue"> Log In</p>
              </Row>
              <Row className=" d-flex justify-content-center mb-3">
                <p className="blue"> Forgotten password?</p>
              </Row>
            </Container>
            <Container className="registerContainer mt-3">
            <Row className=" d-flex justify-content-center mt-4">
                <p className="registrationText"> Do not have an account?</p>
                <p className="blue ml-2">Register</p>
              </Row>
            </Container>
            <Row className=" d-flex justify-content-center mt-2">
                <p className="downloadText">Download the app</p>
              </Row>
              <Row className=" d-flex justify-content-center buttons">
              <img className = "downloadBtn1" src = "http://assets.stickpng.com/thumbs/5a902db97f96951c82922874.png" />
              <img className = "downloadBtn" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png" />
              </Row>
          </Col>
          <Col sm={3} />
        </Row>
      </>
    );
  }
}
export default Login;
