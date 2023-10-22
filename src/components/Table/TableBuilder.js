import React from 'react';
import './Table.css';
import Wrapper from '../Helpers/Wrapper'
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

function Table({ headers, rows, InputFormModal, onDelete }) {
  const [tableData, setTableData] = useState([...rows]);
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleEdit = (rowIndex) => {
    setEditRowIndex(rowIndex);
  };

  const handleSaveEdit = (rowData) => {
    console.log('rowData', rowData);

    const updatedTableData = [...tableData];
    updatedTableData[editRowIndex] = rowData;
    setTableData(updatedTableData);
    setEditRowIndex(null);
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
          {tableData.map((row, rowIndex) => (
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
                    const updatedTableData = [...tableData];
                    updatedTableData.splice(rowIndex, 1);
                    setTableData(updatedTableData);
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
          initialValues={tableData[editRowIndex]}
          onSave={handleSaveEdit}
        />
      )}
    </Wrapper>
  );
}

export { TableBuilder, Table };
