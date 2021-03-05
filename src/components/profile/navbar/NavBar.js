import React from "react";
import { Row } from "react-bootstrap";
import logo from "../../../assets/Instagram-Logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { FiSend, FiHeart } from "react-icons/fi";
import { AiOutlineCompass } from "react-icons/ai";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import "./NavBar.css";
const mapStateToProps = (state) => state;

const NavBar = (props) => {
console.log(props.me)
  return (
    <>
      <Row>
        <div id="navbar">
          <div id="navbar-left">
            <img id="logo" src={logo} alt="ig-logo" />
          </div>
          <div id="navbar-center">
            <input id="search-input" placeholder="search" type="text" />
          </div>
          <div id="navbar-right">

            <Link to="/feed">
              <IoHomeOutline
                style={{ width: "22px", height: "25px", color: "black" }}
              />
            </Link>
            <FiSend style={{ width: "22px", height: "25px", color: "black" }} />
            <Link to="/discover">
              <AiOutlineCompass
                id="compass-icon"
                style={{ width: "22px", height: "25px", color: "black" }}
              />
            </Link>
            <FiHeart
              id="heart-icon"
              style={{ width: "22px", height: "25px" }}
            />

            <Link to={`/profile/${props.me.me._id}`}>
              <img
                id="profile-pic-nav"
                src="https://via.placeholder.com/150"
                alt="profile-pic"
              />
            </Link>
          </div>
        </div>
      </Row>
      <div id="border-bottom"></div>
    </>
  );
};

export default connect(mapStateToProps)(NavBar)
;
