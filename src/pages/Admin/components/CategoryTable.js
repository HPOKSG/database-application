import React, { useState } from 'react'
import { Table } from '../../../components/Table/TableBuilder'

const tableData = {
    headers: [
      'Category Name',
    ],
  };

async function getAllCategory(parentId) {
    const body = {
        search_attribute: 'parent',
        search_string: parentId,
    };
    let res = await category.search(body);
    if (res.status == false) {
        displayStatusModal(res.data.message, false);
    } else {
        console.log('display all category: ', res.data);
        displayAllCategory(res.data);
    }
}

function CategoryTable({data}) {
    var firstDisplayCategory = useRef

    [row, setRows] = useState()
    function onDelete(){

    }

    function onEdit(){

    }

    function onCreate(){

    }

    function onForward(){

    }

    function onBackWard(){

    }
    return <Table
            headers={tableData.headers}
            rows={tableData.rows}
            InputFormModal={InputFormModal}
            onDelete={handleDelete}
            onEdit={handleSaveEdit}
            
        >

        </Table>

        
}

export default CategoryTable
