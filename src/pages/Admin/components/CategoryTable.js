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
    var [parentId,setParentId] = useState(null)
    var [table,setTableInfo] = useState(tableData)
    
    useEffect(() => {
        // Simulate an API call or data fetching
        const body = {
            search_attribute: 'parent',
            search_string: parentId,
        };
        category.search(body)
            .then(res => {
                setTableInfo(prevTable => {
                    return {
                        ...prevTable,
                        rows: [...res.data.map(item =>[item._id,item.name]), ['','']]
                    };
                });
               
            })
            .catch(error => {
                console.error(error);
            });
        
        return () => {
            // Cleanup function (if needed)
            // This function will be called when the component unmounts or when the dependencies change.
        };
    }, [parentId]); // The empty dependency array means this effect runs only once on component mount


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
            headers={table.headers}
            rows={table.rows}
            // InputFormModal={InputFormModal}
            onDelete={handleDelete}
            onEdit={handleSaveEdit}
        >
            <ExtendCategoryAction/>
        </Table>
    

        
}

export default CategoryTable
