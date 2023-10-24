import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';
import './AlertModal.css';
Modal.setAppElement('#root');
class AlertModalBuilder {
  constructor() {
    this.modal = {
      show: false,
      onHide: () => {},
      title: '',
      message: '',
      onConfirm: () => {},
    };
  }

  setShow(show) {
    this.modal.show = show;
    return this;
  }

  setOnHide(onHide) {
    this.modal.onHide = onHide;
    return this;
  }

  setTitle(title) {
    this.modal.title = title;
    return this;
  }

  setMessage(message) {
    this.modal.message = message;
    return this;
  }

  setOnConfirm(onConfirm) {
    this.modal.onConfirm = onConfirm;
    return this;
  }

  build() {
    return this.modal;
  }
}

const AlertModal = ({ show, onHide, title, message, onConfirm }) => {
  console.log(show);
  return (
    <Modal
      isOpen={show}
      onRequestClose={onHide}
      contentLabel='Alert Modal'
      className='modal-content'
      overlayClassName='modal-overlay'>
      <h2>{title}</h2>
      <p>{message}</p>
      <Button variant='primary' onClick={onConfirm}>
        Confirm
      </Button>
      <Button variant='secondary' onClick={onHide}>
        Cancel
      </Button>
    </Modal>
  );
};
export { AlertModal, AlertModalBuilder };
