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
import downloadAppStore from "../assets/downloadAPPstore.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./instagram.png";
import { GrFacebook } from "react-icons/gr";
import "./login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    token: "",
    refreshToken: "",
  };
  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  loginWithGoogle = async () => {
    await fetch("http://localhost:9999/users/googleLogin")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  addTokens = (data) => {
    this.setState({ token: data.accessToken });
    this.setState({ refreshToken: data.refreshToken });
  };
  login = async () => {
    this.setState({ loading: true });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: this.state.password,
        email: this.state.email,
      }),
    };
    await fetch("http://localhost:9999/users/login", requestOptions)
      .then((response) => response.json())
      .then((data) => this.addTokens(data));
    localStorage.setItem("token", this.state.token);
    localStorage.setItem("refreshToken", this.state.refreshToken);
    console.log(this.state.token);
    window.location = "/home";
  };
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
                  onChange={(e) => this.changeEmail(e)}
                ></input>
              </Row>
              <Row className=" d-flex justify-content-center mb-4">
                <input
                  autocomplete="off"
                  type="password"
                  className="passwordInput"
                  placeholder="password"
                  onChange={(e) => this.changePassword(e)}
                ></input>
                <button className="btn">
                  <h className="search">
                    <p className="btnText">Show</p>
                  </h>
                </button>
              </Row>
              <Row className=" d-flex justify-content-center mb-4">
                <button className="loginBtn" onClick={() => this.login()}>
                  Log In
                </button>
              </Row>
              <hr />
              <Row
                className=" d-flex justify-content-center mt-2"
               
              >
                <GrFacebook   className="blue mr-2 mt-1" />{" "}
               <a href = "http://localhost:9999/users/googleLogin" className="blue"> Log In</a>
              </Row>
              <Row className=" d-flex justify-content-center mb-3">
                <p className="blue"> Forgotten password?</p>
              </Row>
            </Container>
            <Container className="registerContainer mt-3">
              <Row className=" d-flex justify-content-center mt-4">
                <p className="registrationText"> Do not have an account?</p>
                <p
                  className="blue ml-2"
                  onClick={() => (window.location = "/register")}
                >
                  Register
                </p>
              </Row>
            </Container>
            <Row className=" d-flex justify-content-center mt-2">
              <p className="downloadText">Download the app</p>
            </Row>
            <Row className="d-flex justify-content-center buttons ">
              <img className="downloadBtn1" src={downloadAppStore} />
              <img
                className="downloadBtn"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png"
              />
            </Row>
          </Col>
          <Col sm={3} />
        </Row>
      </>
    );
  }
}
export default Login;
