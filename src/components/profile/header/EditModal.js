import React, { Component} from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import "./EditModal.css";
const mapStateToProps = (state) => state;


class EditModal extends Component {
  handleClose = () => this.props.handleClose(false)

  render () {
  console.log(this.props.me.me)
  const{single_user}=this.props.users
 
  
  return (
    <>
    
    <Modal  show={this.props.show} onHide={this.props.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your profile </Modal.Title>
        </Modal.Header>
        <Modal.Body><div >
          <p>Full Name:</p>
          <input
            type="text"
            value={single_user.userName}
            className=""
          />
          <p className="mt-3">Nickname: </p>
          <input
            type="text"
            value={single_user.fullName}
            className=""
          />
          <p className="mt-3 mb-0">Bio: </p>
          <textarea className="mt-4" cols="35" rows="10"></textarea>
        </div>
        
  
     </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* // <div  show={this.props.show} onHide={this.props.handleClose}> */}
      
          
    
       
          
 
     
      {/* //   <div >
      //     <p>Full Name:</p>
      //     <input
            type="text"
            value={this.props.me.me.userName}
            className="editModal-inputs"
          />
          <p className="mt-3">Nickname: </p>
          <input
            type="text"
            value={this.props.me.me.fullName}
            className="editModal-inputs t"
          />
          <p className="mt-3 mb-0">Bio: </p>
          <textarea className="mt-4" cols="35" rows="10"></textarea>
        </div>
        </div>
  
        <div id="editModal-btns-wrapper">
          <button id="close-btn" onClick={this.handleClose}>
            Close
          </button>
          <button id="save-btn" onClick={this.handleClose}>Save Changes</button>
        </div>
        */}
    
      {/* <div id="editModal-container">
        <div id="editModal-top">
          <Modal.Title>Modify your infos</Modal.Title>
        </div>
        <div id="editModal-content">
          <p>Full Name:</p>
          <input
            type="text"
            value={this.props.me.me.userName}
            className="editModal-inputs"
          />
          <p className="mt-3">Nickname: </p>
          <input
            type="text"
            value={this.props.me.me.fullName}
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
      </div> */}
    </>
  );
}
}

export default connect(mapStateToProps)(EditModal);
