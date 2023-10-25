import React, { useRef, useState,useEffect } from 'react'
import { Table } from '../../../../components/Table/TableBuilder'
import category from '../../../../Module/category';
import ExtendCategoryAction from './ExtendCategoryAction';
import CategoryModal from './CategoryModal';

const tableData = {
    headers: [
        'Category ID',
        'Category Name',
    ],
    rows:[]
  };

async function getAllCategory(parentId) {
    const body = {
        search_attribute: 'parent',
        search_string: parentId,
    };
    let res = await category.search(body);
   
}

function CategoryTable({data,handleEdit,handleCreate}) {
    
    

    function handleDelete(){

    }

    function handleSaveEdit(){

    }

    function onCreate(){

    }

    function onForward(){

    }

    function onBackWard(){

    }
   
    return <Table
            headers={data.headers}
            rows={data.rows}
            // InputFormModal={InputFormModal}
            onDelete={handleDelete}
            onEdit={handleEdit}
        >
            <ExtendCategoryAction
                createItem={handleCreate} 
            />
        </Table>
}

export default CategoryTable
