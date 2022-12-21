import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [showModal, setModalShow] = useState(false);
  function deleteHandler() {
    setModalShow(true);
  }

  function modalClickHandler(){
    setModalShow(false)
  }
  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      {showModal && <Modal />}
      {showModal && <Backdrop onClick={modalClickHandler}/>}
    </div>
  );
}

export default Todo;
