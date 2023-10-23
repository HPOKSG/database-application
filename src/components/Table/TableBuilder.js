import React from 'react';
import './Table.css';
import Wrapper from '../Helpers/Wrapper';
import { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
class TableBuilder {
  constructor() {
    this.table = {
      headers: [],
      rows: [],
    };
  }

  setHeaders(headers) {
    this.table.headers = headers;
    return this;
  }

  addRow(rowData) {
    this.table.rows.push(rowData);
    return this;
  }

  build() {
    return this.table;
  }
}

// Table component that renders the table

function Table({ headers, rows, InputFormModal, onDelete, onEdit }) {
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleEdit = (rowIndex) => {
    setEditRowIndex(rowIndex);
  };
  return (
    <Wrapper>
      <table className='custom-table'>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'even' : 'odd'}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
              <td>
                <button
                  onClick={() => {
                    setEditRowIndex(rowIndex);
                    setIsOpen(true);
                  }}
                  className='icon-button'>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button
                  onClick={() => {
                    onDelete(rowIndex);
                  }}
                  className='icon-button'>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editRowIndex !== null && (
        <InputFormModal
          isOpen={modalIsOpen}
          onRequestClose={() => setEditRowIndex(null)}
          initialValues={rows[editRowIndex]}
          onSave={(editedRow) => {
            onEdit(editedRow, editRowIndex);
            setEditRowIndex(null);
          }}
        />
      )}
    </Wrapper>
  );
}

export { TableBuilder, Table };
