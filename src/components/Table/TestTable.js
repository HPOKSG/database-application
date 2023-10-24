import React, { useEffect, useState } from 'react';
import Wrapper from '../Helpers/Wrapper';
import { Table, TableBuilder } from './TableBuilder';
import InputFormModal from '../Forms/InputFormModal';
import TestInputUserModal from '../Forms/TestEditUserModal';
import API_CONFIG from '../../config/apiConfig';
import axios from 'axios';
import { AlertModal, AlertModalBuilder } from '../AlertModal/AlertModal';
function TestTable() {
  const [tableData, setTableData] = useState({
    headers: [],
    rows: [],
  });
  const [alertModal, setAlertModal] = useState({
    show: false,
    onHide: () => {},
    title: '',
    message: '',
    onConfirm: () => {},
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
      .then(() => {});

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
    const alertModal = new AlertModalBuilder();
    alertModal.setTitle('Edit User');
    alertModal.setMessage('Are you sure you want to edit this user?');
    alertModal.setOnConfirm(async () => {
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
      setTableData((prevTableData) => {
        const newRows = [...prevTableData.rows];
        newRows[editRowIndex] = tempArr;
        return {
          ...prevTableData,
          rows: newRows,
        };
      });
      setAlertModal((previousAlertModal) => {
        return {
          ...previousAlertModal,
          show: false,
        };
      });
    });
    alertModal.setShow(true);
    alertModal.setOnHide(() => {
      alertModal.setShow(false);
      setAlertModal((previousAlertModal) => {
        return {
          ...previousAlertModal,
          show: false,
        };
      });
    });
    setAlertModal(alertModal.build());
  };
  const handleDelete = async (rowData, rowIndex) => {
    console.log('Clicked delete');
    const alertModalBuilder = new AlertModalBuilder();
    alertModalBuilder.setTitle('Delete User');
    alertModalBuilder.setMessage('Are you sure you want to delete this user?');
    alertModalBuilder.setOnConfirm(() => {
      const response = axios.delete(
        API_CONFIG.deleteUserByIdAPI + '/' + rowData[0]
      );
      setTableData((prevTableData) => {
        const newRows = [...prevTableData.rows];
        newRows.splice(rowIndex, 1);
        return {
          ...prevTableData,
          rows: newRows,
        };
      });
      console.log('Delete');
      setAlertModal((previousAlertModal) => {
        return {
          ...previousAlertModal,
          show: false,
        };
      });
    });
    alertModalBuilder.setShow(true);
    alertModalBuilder.setOnHide(() => {
      alertModalBuilder.setShow(false);
      setAlertModal((previousAlertModal) => {
        return {
          ...previousAlertModal,
          show: false,
        };
      });
      console.log('Hide');
    });
    setAlertModal(alertModalBuilder.build());
  };
  return (
    <Wrapper>
      {alertModal.show && (
        <AlertModal
          show={alertModal.show}
          onHide={alertModal.onHide}
          title={alertModal.title}
          message={alertModal.message}
          onConfirm={alertModal.onConfirm}
        />
      )}
      <Table
        headers={tableData.headers}
        rows={tableData.rows}
        InputFormModal={InputFormModal}
        onDelete={handleDelete}
        onEdit={handleSaveEdit}
      />
    </Wrapper>
  );
}

export default TestTable;
