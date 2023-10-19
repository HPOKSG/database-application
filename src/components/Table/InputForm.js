import React, { useState } from 'react';

function InputForm({ initialValues, onSave }) {
  const [editedRow, setEditedRow] = useState({ ...initialValues });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedRow({ ...editedRow, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(editedRow);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='serialNo'
        value={editedRow.serialNo}
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='name'
        value={editedRow.name}
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='category'
        value={editedRow.category}
        onChange={handleInputChange}
      />
      <input
        type='date'
        name='dateAcquired'
        value={editedRow.dateAcquired}
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='location'
        value={editedRow.location}
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='quantity'
        value={editedRow.quantity}
        onChange={handleInputChange}
      />
      <button type='submit'>Save</button>
    </form>
  );
}

export default InputForm;
