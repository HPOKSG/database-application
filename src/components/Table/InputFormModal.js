import React, { useState } from 'react';
import Modal from 'react-modal'; // Import the react-modal library
import './InputFormModal.css'; // Create a CSS file for styling

Modal.setAppElement('#root'); // Set the app element to the root element

function InputFormModal({ isOpen, onRequestClose, initialValues, onSave }) {
  const [editedRow, setEditedRow] = useState({
    serialNo: initialValues[0],
    name: initialValues[1],
    category: initialValues[2],
    dateAcquired: initialValues[3],
    location: initialValues[4],
    quantity: initialValues[5],
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedRow({ ...editedRow, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(Object.values(editedRow));
    console.log(Object.values(editedRow));

    onRequestClose(); // Close the modal after saving
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Edit Row'
      className='modal-content'
      overlayClassName='modal-overlay'>
      <h2>Edit Row</h2>
      <form onSubmit={handleSubmit}>
        <label>Serial No</label>
        <input
          type='text'
          name='serialNo'
          value={editedRow.serialNo}
          onChange={handleInputChange}
        />
        <label>Name</label>
        <input
          type='text'
          name='name'
          value={editedRow.name}
          onChange={handleInputChange}
        />
        <label>Category</label>
        <input
          type='text'
          name='category'
          value={editedRow.category}
          onChange={handleInputChange}
        />
        <label>DateAcquired</label>
        <input
          type='text'
          name='dateAcquired'
          value={editedRow.dateAcquired}
          onChange={handleInputChange}
        />
        <label>Location</label>
        <input
          type='text'
          name='location'
          value={editedRow.location}
          onChange={handleInputChange}
        />
        <label>Quantity</label>
        <input
          type='text'
          name='quantity'
          value={editedRow.quantity}
          onChange={handleInputChange}
        />

        <button type='submit'>Save</button>
      </form>
    </Modal>
  );
}

export default InputFormModal;
