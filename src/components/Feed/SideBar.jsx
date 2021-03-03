import React, { Component } from "react";
import {} from "react-icons/bs";
import { Container, Image } from "react-bootstrap";
import Footer from "./Footer";
import "./feed.css";

class SideBar extends Component {
  render() {
    return (
      <Container fluid>
        <div className="d-flex">
          <Image
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
            roundedCircle
            className="profilePic-story mr-2"
          />
          <div>
            <p className="p-0  general-font font-weight-bold d-inline">
              {" "}
              username
            </p>
            <p className="p-0  general-font  text-muted "> Name & Surname</p>
          </div>
          <p className="mb-1 mt-2 ml-auto d-inline ">
            <span>
              <a
                className="a-tags font-weight-bold "
                style={{ color: "#0095F6", fontSize: "12px" }}
              >
                Switch to{" "}
              </a>
            </span>{" "}
          </p>
        </div>
        <div className="d-flex">
          <p className="general-font mt-1  text-muted d-inline">
            {" "}
            Recommendations for you
          </p>

          <p className=" ml-auto d-inline ">
            <span>
              <a
                className="a-tags font-weight-bold "
                style={{ fontSize: "12px" }}
              >
                See All{" "}
              </a>
            </span>{" "}
          </p>
        </div>
<div>
        <div className="d-flex">
          <Image
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
            roundedCircle
            className="profilePic mr-2"
          />
          <div>
            <p className="p-0  general-font font-weight-bold d-inline">
              {" "}
              username
            </p>
            <p className="p-0    text-muted " style={{fontSize:"12px"}}> New in Instagram</p>
          </div>
          <p className="mb-1 mt-2 ml-auto d-inline ">
            <span>
              <a
                className="a-tags font-weight-bold "
                style={{ color: "#0095F6", fontSize: "12px" }}
              >
                Follow{" "}
              </a>
            </span>{" "}
          </p>
        </div>
        <div className="d-flex">
          <Image
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
            roundedCircle
            className="profilePic mr-2"
          />
          <div>
            <p className="p-0  general-font font-weight-bold d-inline">
              {" "}
              username
            </p>
            <p className="p-0    text-muted " style={{fontSize:"12px"}}> New in Instagram</p>
          </div>
          <p className="mb-1 mt-2 ml-auto d-inline ">
            <span>
              <a
                className="a-tags font-weight-bold "
                style={{ color: "#0095F6", fontSize: "12px" }}
              >
                Follow{" "}
              </a>
            </span>{" "}
          </p>
        </div>

        <div className="d-flex ">
          <Image
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
            roundedCircle
            className="profilePic mr-2"
          />
          <div>
            <p className="p-0  general-font font-weight-bold d-inline">
              {" "}
              username
            </p>
            <p className="p-0    text-muted " style={{fontSize:"12px"}}> New in Instagram</p>
          </div>
          <p className="mb-1 mt-2 ml-auto d-inline ">
            <span>
              <a
                className="a-tags font-weight-bold "
                style={{ color: "#0095F6", fontSize: "12px" }}
              >
                Follow{" "}
              </a>
            </span>{" "}
          </p>
        </div>
     </div>
     <Footer/>
      </Container>
    );
  }
}
export default SideBar;
