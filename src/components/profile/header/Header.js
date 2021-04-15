import React, { Component } from "react";
import { connect } from "react-redux";
import { AiOutlineSetting } from "react-icons/ai";
import EditModal from "./EditModal";
import "./Header.css";
import {browserHistory} from 'react-router';
import { withRouter } from 'react-router-dom';


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
      thisIsMe:false
    };
  
 
  handleShow=()=> {
    this.setState({ showModal: true });
  }
  

  handleClose=(showMode)=> {
    this.setState({ showModal: showMode});
  }
  // isItME= async ()=> { let props= await this.props.fetchSingleUserwithThunk( window.location.pathname.split('/')[2]); this.props.me.me._id === this.props.users.single_user._id ? this.setState({thisIsMe:true}): this.setState({thisIsMe:false})}
  componentDidMount=()=>{
    this.props.fetchMewithThunk()
    this.props.fetchSingleUserwithThunk( window.location.pathname.split('/')[2])
 
    if( window.location.pathname.split('/')[2] == this.props.me.me._id) {console.log(true)}
  
  }
  
  
  render() {
    
    console.log("inside of heade",this.props.me)

    const{single_user}=this.props.users
    
    return (
      <>
        <div id="profile-infos">
          <div id="profile-left">
            <img
              id="profilePicHead"
              src={single_user.profilePicUrl ? single_user.profilePicUrl:"https://via.placeholder.com/150" }
              alt="profile-pic"
            />
          </div>
          <div id="profile-right">
            <div id="profile-top">
              <div id="username-wrapper">
                <div id="user-name">
                  <h6>{single_user.fullName}</h6>
                </div>
              </div>
              {this.props.me.me._id === this.props.users.single_user._id && 
              <div id="edit-tools">
                <div id="edit-profile">
                  <button onClick={this.handleShow}>Edit profile</button>
                </div>
                <AiOutlineSetting className="ml-3 settings-btn" />
              </div>
              }
            </div>
            <div id="profile-center" className="my-4">
              <div id="posts-left">
                <strong>{single_user.posts && single_user.posts.length}</strong> posts
              </div>
              <div id="followers-center">
                <strong>{this.props.me.myfollowedOnes && this.props.me.myfollowedOnes.length}</strong> followers
              </div>
              <div id="following-right">
                <strong>{single_user.follows && single_user.follows.length}</strong> following
              </div>
            </div>
            <div id="profile-bottom">
              <h6>{single_user.userName}</h6>
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
