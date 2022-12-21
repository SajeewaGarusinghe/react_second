import React from 'react';

const Modal = () => {
  return (
    <div className="modal">
      <p>Are you sure ?</p>
      <button className="btn btn--alt">cancel</button>
      <button className="btn">Confirm</button>
    </div>
  );
};

export default Modal;
