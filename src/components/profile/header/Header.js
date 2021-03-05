import React, { Component } from "react";
import { connect } from "react-redux";
import { AiOutlineSetting } from "react-icons/ai";
import EditModal from "./EditModal";
import "./Header.css";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  fetchMewithThunk: () =>
    dispatch(async (dispatch) => {
      const token = localStorage.getItem("token");
      const url = process.env.REACT_APP_URL;
      const response = await fetch(url + "/users/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const me = await response.json();

      if (response.ok) {
        dispatch({
          type: "SET_ME",
          payload: me,
        });
        console.log("me", me);
      } else {
        dispatch({
          type: "SET_ERROR",
          payload: me,
        });
      }
    }),
    fetchSingleUserwithThunk: (id) =>
    dispatch(async (dispatch) => {
      const token = localStorage.getItem("token");
      const url = process.env.REACT_APP_URL;
      const response = await fetch(url + "/users/"+ id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const user = await response.json();

      if (response.ok) {
        dispatch({
          type: "SET_SINGLE_USER",
          payload: user,
        });
        console.log("single_user", user);
      } else {
        dispatch({
          type: "SET_ERROR",
          payload: user,
        });
      }
    }),
 

});


class Header extends Component {
 

    
    state = {
      showModal: false,
    };
  
 
  handleShow=()=> {
    this.setState({ showModal: true });
  }

  handleClose=(showMode)=> {
    this.setState({ showModal: showMode});
  }
  componentDidMount=()=>{
    this.props.fetchMewithThunk()
    this.props.fetchSingleUserwithThunk( this.props.id)
   
  }

  render() {
    console.log("inside of heade",this.props.me)
 
    return (
      <>
        <div id="profile-infos">
          <div id="profile-left">
            <img
              id="profilePicHead"
              src={this.props.me.me.profilePicUrl ? this.props.me.me.profilePicUrl:"https://via.placeholder.com/150" }
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
                <strong>{this.props.me.me.posts && this.props.me.me.posts.length}</strong> posts
              </div>
              <div id="followers-center">
                <strong>{this.props.me.me.follows && this.props.me.me.follows.length}</strong> followers
              </div>
              <div id="following-right">
                <strong>{this.props.me.myfollowedOnes&& this.props.me.myfollowedOnes.length}</strong> following
              </div>
            </div>
            <div id="profile-bottom">
              <h6>{this.props.me.me.userName}</h6>
              <p>Bio bla bla bla...</p>
            </div>
          </div>
        </div>
        <div id="stories">some stories here</div>
        <hr></hr>
        {this.state.showModal ? (
          <EditModal
            // handleShow={this.handleShow}
            handleClose={this.handleClose}
            show={this.state.showModal}
          />
        ) : null}
      </>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
