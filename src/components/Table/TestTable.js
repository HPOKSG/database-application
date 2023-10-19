import React from 'react';
import { Table, TableBuilder } from './TableBuilder';
import InputForm from './InputForm';

const tableData = {
  headers: [
    'Serial No',
    'Name',
    'Category',
    'DateAcquired',
    'Location',
    'Quantity',
  ],
  rows: [
    ['1', 'Microscope X-20', 'Equipment', '2020-01-01', 'Lab 1', '1'],
    ['2', 'Test Tube', 'Glassware', '2020-01-01', 'Store room 1', '2'],
    ['3', 'Beaker', 'Glassware', '2020-01-01', 'Store room 1', '100'],
  ],
};
function TestTable() {
  const handleSave = (editedRow) => {
    const updatedTableData = [...tableData.rows];
    updatedTableData.push(Object.values(editedRow));
    tableData.rows = updatedTableData;
    console.log(tableData);
  };
  return (
    <div>
      <Table
        headers={tableData.headers}
        rows={tableData.rows}
        InputForm={InputForm}
        onSave={handleSave}
      />
    </div>
  );
}
export default TestTable;
