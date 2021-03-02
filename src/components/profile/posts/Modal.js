import React from "react";
// icons
import { GrClose } from "react-icons/gr";
// css
import "./Modal.css";

const PostModal = ({ showModal, closeModal }) => {
  return (
    <>
      {showModal && (
        <div id="modal-container">
          <div id="modal-content">
            <div id="modal-left">
              <img src="https://via.placeholder.com/400x500" alt="modal-img" />
            </div>
            <div id="modal-right">comments and stuff</div>
          </div>
          <button onClick={closeModal} id="close-modal">
            <GrClose style={{ height: "30px", width: "30px" }} />
          </button>
        </div>
      )}
    </>
  );
};

export default PostModal;
