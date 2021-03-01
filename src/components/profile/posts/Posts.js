import React from "react";
import { BsGrid3X3, BsBookmark } from "react-icons/bs";
import "./Posts.css";

const Posts = () => {
  return (
    <div id="posts-section">
      <div id="posts-navigation">
        <div id="post">
          <BsGrid3X3
            className="mt-1"
            style={{ width: "15px", height: "15px" }}
          />
          <p className="my-auto ml-2">POST</p>
        </div>
        <div id="saved">
          <BsBookmark
            className="mt-1"
            style={{ width: "15px", height: "15px" }}
          />
          <p className="my-auto ml-2">SAVED POSTS</p>
        </div>
      </div>
      <div id="posts-grid" className="container">
        <div id="post-items" className="row no-gutters">
          <div className="col col-sm-12 col-md-6 col-lg-4 post">
            <img src="https://via.placeholder.com/250" alt="post-img" />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-4 post">
            <img src="https://via.placeholder.com/250" alt="post-img" />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-4 post">
            <img src="https://via.placeholder.com/250" alt="post-img" />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-4 post">
            <img src="https://via.placeholder.com/250" alt="post-img" />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-4 post">
            <img src="https://via.placeholder.com/250" alt="post-img" />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-4 post">
            <img src="https://via.placeholder.com/250" alt="post-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
