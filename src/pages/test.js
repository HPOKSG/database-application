import React from 'react';
import { Table, TableBuilder } from '../components/Table/TableBuilder';

const Test = () => {
  const tableData = new TableBuilder()
    .setHeaders([
      'Serial No',
      'Name',
      'Category',
      'DateAcquired',
      'Location',
      'Quantity',
    ])
    .addRow(['1', 'Microscope X-20', 'Equipment', '2020-01-01', 'Lab 1', '1'])
    .addRow(['2', 'Test Tube', 'Glassware', '2020-01-01', 'Store room 1', '2'])
    .addRow(['3', 'Beaker', 'Glassware', '2020-01-01', 'Store room 1', '100'])
    .build();

  console.log(tableData);
  return (
    <div>
      <Table headers={tableData.headers} rows={tableData.rows} />
    </div>
  );
};

export default Test;
