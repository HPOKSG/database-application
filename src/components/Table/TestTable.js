import React from 'react';
import { Table, TableBuilder } from './TableBuilder';
import InputFormModal from './InputFormModal';
import TestInputUserModal from './TestEditUserModal';
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
const tableData2 = {
  headers: ['Name', 'Age', 'Salary'],
  rows: [
    ['John', '20', '5000'],
    ['Jane', '21', '6000'],
    ['Joe', '22', '7000'],
  ],
};
function TestTable() {
  return (
    <div>
      <Table
        headers={tableData.headers}
        rows={tableData.rows}
        InputFormModal={InputFormModal}
      />
      <Table
        headers={tableData2.headers}
        rows={tableData2.rows}
        InputFormModal={TestInputUserModal}
      />
    </div>
  );
}
export default TestTable;
