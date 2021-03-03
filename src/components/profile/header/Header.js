import React, { Component } from "react";
import { connect } from "react-redux";
import { AiOutlineSetting } from "react-icons/ai";
import "./Header.css";

const mapStateToProps = (state) => state;

class Header extends Component {
  componentDidMount = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    // console.log(urlParams.get("accessToken"));
    if (!urlParams.has("accessToken")) {
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      await fetch(
        "http://localhost:9999/users/me",
        requestOptions
      ).then((response) => response.json());
      // .then((data) => console.log("",data.email));
    } else {
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + urlParams.get("accessToken"),
        },
      };

      await fetch("http://localhost:9999/users/me", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  render() {
    console.log("HEADER COMPONENT", this.state.me.me);
    return (
      <>
        <div id="profile-infos">
          <div id="profile-left">
            <img
              id="profilePicHead"
              src="https://via.placeholder.com/150"
              alt="profile-pic"
            />
          </div>
          <div id="profile-right">
            <div id="profile-top">
              <div id="username-wrapper">
                <div id="user-name">Username</div>
              </div>
              <div id="edit-tools">
                <div id="edit-profile">Edit profile</div>
                <AiOutlineSetting className="ml-3 settings-btn" />
              </div>
            </div>
            <div id="profile-center" className="my-4">
              <div id="posts-left">
                <strong>10</strong> posts
              </div>
              <div id="followers-center">
                <strong>1000</strong> followers
              </div>
              <div id="following-right">
                <strong>978</strong> following
              </div>
            </div>
            <div id="profile-bottom">
              <h6>Nickname</h6>
              <p>Bio bla bla bla...</p>
            </div>
          </div>
        </div>
        <div id="stories">some stories here and shit....</div>
        <hr></hr>
      </>
    );
  }
}

export default connect(mapStateToProps)(Header);
