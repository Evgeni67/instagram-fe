import React, { Component } from "react";
import { connect } from "react-redux";
import { AiOutlineSetting } from "react-icons/ai";
import EditModal from "./EditModal";
import "./Header.css";

const mapStateToProps = (state) => state;

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      showModal: false,
    };
  }
  handleShow() {
    this.setState({ showModal: true });
  }

  handleClose() {
    this.setState({ showModal: false });
  }

  render() {
    console.log("===> HERE <===", this.props.me.me);
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
                <div id="user-name">
                  <h6>{this.props.me.me.fullName}</h6>
                </div>
              </div>
              <div id="edit-tools">
                <div id="edit-profile">
                  <button onClick={this.handleShow}>Edit profile</button>
                </div>
                <AiOutlineSetting className="ml-3 settings-btn" />
              </div>
            </div>
            <div id="profile-center" className="my-4">
              <div id="posts-left">
                <strong>10</strong> posts
              </div>
              <div id="followers-center">
                <strong>{this.props.me.me.follows.length}</strong> followers
              </div>
              <div id="following-right">
                <strong>{this.props.me.myfollowedOnes.length}</strong> following
              </div>
            </div>
            <div id="profile-bottom">
              <h6>{this.props.me.me.userName}</h6>
              <p>Bio bla bla bla...</p>
            </div>
          </div>
        </div>
        <div id="stories">some stories here and shit....</div>
        <hr></hr>
        {this.state.showModal ? (
          <EditModal
            fullName={this.props.me.me.fullName}
            handleShow={this.handleShow}
            handleClose={this.handleClose}
          />
        ) : null}
      </>
    );
  }
}

export default connect(mapStateToProps)(Header);
