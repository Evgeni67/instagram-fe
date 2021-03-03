import React, { useState } from "react";
// icons
import { BsGrid3X3, BsBookmark } from "react-icons/bs";
// components
import PostModal from "./Modal";
import Saved from "./../savedPosts/Saved";
// styles
import "./Posts.css";

const Posts = () => {
  const [isPost, setIsPost] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div id="posts-section">
        <div id="posts-navigation">
          <button onClick={() => setIsPost(true)} className="post-btn">
            <BsGrid3X3
              className="mt-1"
              style={{ width: "15px", height: "15px" }}
            />
            <p className="my-auto ml-2 ">POST</p>
          </button>
          <button onClick={() => setIsPost(false)} className="saved-btn">
            <BsBookmark
              className="mt-1"
              style={{ width: "15px", height: "15px" }}
            />
            <p className="my-auto ml-2">SAVED POSTS</p>
          </button>
        </div>
        {isPost ? (
          <div id="posts-grid" className="container">
            <div id="post-items" className="row no-gutters">
              <div className="col col-sm-12 col-md-6 col-lg-4 post">
                <img
                  onClick={() => setShowModal(true)}
                  src="https://via.placeholder.com/250"
                  alt="post-img"
                />
              </div>
            </div>
          </div>
        ) : (
          <Saved />
        )}
      </div>
      {showModal && (
        <div id="modal-background">
          <PostModal
            showModal={showModal}
            closeModal={() => setShowModal(false)}
          />
        </div>
      )}
    </>
  );
};

export default Posts;
