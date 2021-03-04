import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./EditModal.css";

function EditModal({ handleShow, handleClose, fullName }) {
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <div id="editModal-container">
        <div id="editModal-top">
          <Modal.Title>Modify your infos</Modal.Title>
        </div>
        <div id="editModal-content">
          <input type="text" value={fullName} className="editModal-inputs" />
        </div>
        <div id="editModal-btns-wrapper">
          <button id="close-btn" onClick={handleClose}>
            Close
          </button>
          <button id="save-btn">Save Changes</button>
        </div>
      </div>
    </>
  );
}

export default EditModal;
