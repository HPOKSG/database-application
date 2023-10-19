import React from 'react';
import './Table.css';
import { useState } from 'react';
// TableBuilder class to create a table using the builder pattern
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

function Table({ headers, rows, InputForm }) {
  const [tableData, setTableData] = useState([...rows]);
  const [editRowIndex, setEditRowIndex] = useState(null);

  const handleEdit = (rowIndex) => {
    setEditRowIndex(rowIndex);
  };

  const handleSaveEdit = (rowIndex, updatedRow) => {
    const updatedTableData = [...tableData];
    updatedTableData[rowIndex] = updatedRow;
    setTableData(updatedTableData);
    setEditRowIndex(null);
  };

  return (
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
              {editRowIndex === rowIndex ? (
                <InputForm
                  initialValues={tableData[rowIndex]}
                  onSave={(updatedRow) => handleSaveEdit(rowIndex, updatedRow)}
                />
              ) : (
                <button onClick={() => handleEdit(rowIndex)}>Edit</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { TableBuilder, Table };
