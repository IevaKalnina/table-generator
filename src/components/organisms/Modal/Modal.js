// Modal.js
import React from "react";
import "./Modal.scss";

function Modal({ isOpen, children }) {
  // Accept modalRef as a prop
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-container">
      <div className="modal">{children}</div>
    </div>
  );
}

export default Modal;
