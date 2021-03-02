import React from "react";
// css
import "./Modal.css";

const Modal = ({ showModal, closeModal }) => {
  return (
    <>
      {showModal === true && (
        <div id="modal-container">
          <div id="modal-content">
            <h1>Modal content</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
