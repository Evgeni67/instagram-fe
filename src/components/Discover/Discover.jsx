import React, { useState } from "react";
// icons
import { BsGrid3X3, BsBookmark } from "react-icons/bs";
// components
import PostModal from "../profile/posts/Modal";

// styles
import "../profile/posts/Posts.css";




const Discover = (props) => {
  
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div id="posts-section">
    
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
   
      </div>
      {/* {showModal && (
        <div id="modal-background">
          <PostModal
            showModal={showModal}
            closeModal={() => setShowModal(false)}
          />
        </div>
      )} */}
    </>
  );
};

export default Discover;
