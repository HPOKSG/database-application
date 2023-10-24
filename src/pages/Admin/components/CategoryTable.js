import React, { useRef, useState,useEffect } from 'react'
import { Table } from '../../../components/Table/TableBuilder'
import category from '../../../Module/category';
import ExtendCategoryAction from './ExtendCategoryAction';

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

function CategoryTable({data}) {
    


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
            onEdit={handleSaveEdit}
        >
            <ExtendCategoryAction/>
        </Table>
    

        
}

export default CategoryTable
