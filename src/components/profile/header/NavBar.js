import React from "react";
import { Row } from "react-bootstrap";
import logo from "../../../assets/Instagram-Logo.png";
import profilePicNav from "../../../assets/profile-pic.jpg";
import { IoHomeOutline } from "react-icons/io5";
import { FiSend, FiHeart } from "react-icons/fi";
import { AiOutlineCompass } from "react-icons/ai";
import "./NavBar.css";

const NavBar = () => {
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
            <IoHomeOutline style={{ width: "20px", height: "25px" }} />
            <FiSend style={{ width: "20px", height: "25px" }} />
            <AiOutlineCompass style={{ width: "20px", height: "25px" }} />
            <FiHeart style={{ width: "20px", height: "25px" }} />
            <img id="profile-pic-nav" src={profilePicNav} alt="profile-pic" />
          </div>
        </div>
      </Row>
      <div id="border-bottom"></div>
    </>
  );
};

export default NavBar;
