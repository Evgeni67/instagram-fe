import React from "react";
import { Row } from "react-bootstrap";
import logo from "../../../assets/Instagram-Logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { FiSend, FiHeart } from "react-icons/fi";
import { AiOutlineCompass } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import "./Header.css";

const Header = () => {
  return (
    <Row>
      <nav id="navbar">
        <div id="navbar-left">
          <img id="logo" src={logo} alt="ig-logo" />
        </div>
        <div id="navbar-center">
          <input id="search-input" placeholder="search" type="text" />
        </div>
        <div id="navbar-right">
          <IoHomeOutline style={{ width: "20px", height: "20px" }} />
          <FiSend style={{ width: "20px", height: "20px" }} />
          <AiOutlineCompass style={{ width: "20px", height: "20px" }} />
          <FiHeart style={{ width: "20px", height: "20px" }} />
          <CgProfile style={{ width: "20px", height: "20px" }} />
        </div>
      </nav>
    </Row>
  );
};

export default Header;
