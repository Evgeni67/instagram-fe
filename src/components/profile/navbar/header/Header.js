import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div id="profile-infos">
      <div id="profile-left">
        <img
          id="profilePicHead"
          src="https://via.placeholder.com/150"
          alt="profile-pic"
        />
      </div>
      <div id="profile-right"></div>
    </div>
  );
};

export default Header;
