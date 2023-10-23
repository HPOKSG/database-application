import React, { useEffect, useState } from 'react';
import Wrapper from '../Helpers/Wrapper';
import { Table, TableBuilder } from './TableBuilder';
import InputFormModal from '../Forms/InputFormModal';
import TestInputUserModal from '../Forms/TestEditUserModal';
import API_CONFIG from '../../config/apiConfig';
import axios from 'axios';
function TestTable() {
  const [tableData, setTableData] = useState({
    headers: [],
    rows: [],
  });
  const [categoryMap, setCategoryMap] = useState({});
  useEffect(() => {
    const response = axios.get(API_CONFIG.getAllProductAPI);
    const categoryResponse = axios.get(API_CONFIG.getAllCategoryAPI);

    categoryResponse
      .then((res) => {
        res.data.forEach((entry) => {
          categoryMap[entry._id] = entry.name;
        });
      })
      .then(() => {
        console.log('category', categoryMap);
      });

    response.then((res) => {
      const tableBuilder = new TableBuilder();
      tableBuilder.setHeaders([
        'Product ID',
        'Product Name',
        'Category',
        'Product Description',
        'Price',
        'Width',
        'Height',
        'Length',
        'Unit In Stock',
        'Unit On Order',
      ]);
      res.data.forEach((row) => {
        tableBuilder.addRow([
          row.product_id,
          row.product_name,
          categoryMap[row.category_id],
          row.product_desc,
          row.price,
          row.width,
          row.height,
          row.length,
          row.unit_in_stock,
          row.unit_on_order,
        ]);
      });
      setTableData(tableBuilder.build());
    });
  }, []);
  const handleSaveEdit = async (rowData, editRowIndex) => {
    console.log('save edit', rowData, editRowIndex);
    console.log(rowData[2]);
    const tempObj = {
      product_id: rowData[0],
      product_name: rowData[1],
      category_id: rowData[2],
      product_desc: rowData[3],
      price: rowData[4],
      width: rowData[5],
      height: rowData[6],
      length: rowData[7],
      unit_in_stock: rowData[8],
      unit_on_order: rowData[9],
    };
    console.log(tempObj);
    const response = await axios.post(
      API_CONFIG.updateProductByIdAPI + '/' + tempObj.product_id,
      { query: tempObj },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    tempObj.category_id = categoryMap[tempObj.category_id];
    const tempArr = Object.values(tempObj);
    console.log(tempArr);
    setTableData((prevTableData) => {
      const newRows = [...prevTableData.rows];
      newRows[editRowIndex] = tempArr;
      return {
        ...prevTableData,
        rows: newRows,
      };
    });
  };

  return (
    <Wrapper>
      <Table
        headers={tableData.headers}
        rows={tableData.rows}
        InputFormModal={InputFormModal}
        onDelete={() => {}}
        onEdit={handleSaveEdit}
      />
    </Wrapper>
  );
}

export default TestTable;
