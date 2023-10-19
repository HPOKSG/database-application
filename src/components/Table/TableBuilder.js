import React from 'react';
import './Table.css';
import { useState } from 'react';
import InputFormModal from './InputFormModal';

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

function Table({ headers, rows, InputFormModal }) {
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
    <div>
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
                  }}>
                  Edit
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
    </div>
  );
}

export { TableBuilder, Table };
