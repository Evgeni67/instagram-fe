import React, { useState } from "react";
// icons
import { BsGrid3X3, BsBookmark } from "react-icons/bs";
// components
import PostModal from "../profile/posts/Modal";

// styles
import "../profile/posts/Posts.css";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const mapStateToProps = (state) => state;





const Discover = (props) => {
  
  const [showModal, setShowModal] = useState(false);
  const { posts} = props;
  console.log("posts from discover",posts)
  return (
    <>
    

   
      
     
      <div id="posts-section">
      <div id="posts-grid" className="container">
            <div id="post-items" className="row no-gutters">
            {posts && posts.length > 0 && posts.map((post)=> 
              <div className="col col-sm-12 col-md-6 col-lg-4 post">
                <img
                  onClick={() => setShowModal(true)}
                  src=""
                  alt="post-img"
                />
              </div>
              )}
            </div>
            
          </div>
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

export default connect(mapStateToProps)(Discover);
