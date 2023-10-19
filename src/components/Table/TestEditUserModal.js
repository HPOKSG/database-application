import React, { useState } from 'react';
import Modal from 'react-modal'; // Import the react-modal library
import './InputFormModal.css'; // Create a CSS file for styling

Modal.setAppElement('#root'); // Set the app element to the root element

function TestInputUserModal({ isOpen, onRequestClose, initialValues, onSave }) {
  const [editedRow, setEditedRow] = useState({
    name: initialValues[0],
    age: initialValues[1],
    salary: initialValues[2],
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
        <label>Name</label>
        <input
          type='text'
          name='name'
          value={editedRow.name}
          onChange={handleInputChange}
        />
        <label>Age</label>
        <input
          type='text'
          name='age'
          value={editedRow.age}
          onChange={handleInputChange}
        />
        <label>Salary</label>
        <input
          type='text'
          name='salary'
          value={editedRow.salary}
          onChange={handleInputChange}
        />
        <button type='submit'>Save</button>
      </form>
    </Modal>
  );
}

export default TestInputUserModal;
