import React, { useEffect, useState } from 'react';
import Modal from 'react-modal'; // Import the react-modal library
import './InputFormModal.css'; // Create a CSS file for styling
import axios from 'axios';
import API_CONFIG from '../../config/apiConfig';
Modal.setAppElement('#root'); // Set the app element to the root element

function InputFormModal({ isOpen, onRequestClose, initialValues, onSave }) {
  const [editedRow, setEditedRow] = useState({
    product_id: initialValues[0],
    product_name: initialValues[1],
    category: initialValues[2],
    product_desc: initialValues[3],
    price: initialValues[4],
    width: initialValues[5],
    height: initialValues[6],
    length: initialValues[7],
    unit_in_stock: initialValues[8],
    unit_on_order: initialValues[9],
  });
  const [categoryMap, setCategoryMap] = useState({});
  const [selectedOption, setSelectedOption] = useState('');
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedRow({ ...editedRow, [name]: value });
    console.log(editedRow);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(Object.values(editedRow));
    console.log(Object.values(editedRow));
    onRequestClose(); // Close the modal after saving
  };
  useEffect(() => {
    axios.get(API_CONFIG.getAllCategoryAPI).then((response) => {
      response.data.forEach((category) => {
        categoryMap[category._id] = category.name;
      });
      setCategoryMap(categoryMap);
      setSelectedOption(categoryMap[editedRow.category]);
      console.log('category', categoryMap);
    });
  }, []);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Edit Row'
      className='modal-content'
      overlayClassName='modal-overlay'>
      <h2>Edit Row</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='product_id'>Product ID</label>
        <input
          type='text'
          name='product_id'
          id='product_id'
          value={editedRow.product_id}
          onChange={handleInputChange}
        />
        <label htmlFor='product_name'>Product Name</label>
        <input
          type='text'
          name='product_name'
          id='product_name'
          value={editedRow.product_name}
          onChange={handleInputChange}
        />
        <label htmlFor='category'>Category</label>
        <select
          name='category'
          id='category'
          value={editedRow.category}
          onChange={handleInputChange}>
          {Object.entries(categoryMap).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>

        <label htmlFor='product_desc'>Product Description</label>
        <input
          type='text'
          name='product_desc'
          id='product_desc'
          value={editedRow.product_desc}
          onChange={handleInputChange}
        />
        <label htmlFor='price'>Price</label>
        <input
          type='text'
          name='price'
          id='price'
          value={editedRow.price}
          onChange={handleInputChange}
        />
        <label htmlFor='width'>Width</label>
        <input
          type='text'
          name='width'
          id='width'
          value={editedRow.width}
          onChange={handleInputChange}
        />
        <label htmlFor='height'>Height</label>
        <input
          type='text'
          name='height'
          id='height'
          value={editedRow.height}
          onChange={handleInputChange}
        />
        <label htmlFor='length'>Length</label>
        <input
          type='text'
          name='length'
          id='length'
          value={editedRow.length}
          onChange={handleInputChange}
        />
        <label htmlFor='unit_in_stock'>Unit In Stock</label>
        <input
          type='text'
          name='unit_in_stock'
          id='unit_in_stock'
          value={editedRow.unit_in_stock}
          onChange={handleInputChange}
        />
        <label htmlFor='unit_on_order'>Unit On Order</label>
        <input
          type='text'
          name='unit_on_order'
          id='unit_on_order'
          value={editedRow.unit_on_order}
          onChange={handleInputChange}
        />

        <button type='submit'>Save</button>
      </form>
    </Modal>
  );
}

export default InputFormModal;
