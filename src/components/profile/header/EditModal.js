import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import "./EditModal.css";

const mapStateToProps = (state) => state;

function EditModal({ handleShow, handleClose }, props) {
  console.log(props.me);
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
          <p>Full Name:</p>
          <input
            type="text"
            // value={props.me.me.userName}
            className="editModal-inputs"
          />
          <p className="mt-3">Nickname: </p>
          <input
            type="text"
            // value={props.me.me.fullName}
            className="editModal-inputs"
          />
          <p className="mt-3 mb-0">Bio: </p>
          <textarea className="mt-4" cols="35" rows="10"></textarea>
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

export default connect(mapStateToProps)(EditModal);
