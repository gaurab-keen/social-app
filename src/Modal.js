// Modal.js
import React from 'react';

function Modal({ isOpen, onClose, children }) {
    console.log('check data gjgjjj ',isOpen)
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
