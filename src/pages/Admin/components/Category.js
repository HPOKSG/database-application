import React from 'react'
import CategoryTable from './CategoryTable'
import Wrapper from '../../../components/Helpers/Wrapper'
import Header from '../../../components/Header/Header'
import Searchbar from '../../../components/Header/HeaderComponent/Searchbar'
import category from '../../../Module/category';
import { useState,useEffect } from 'react';
var tableData = {
    headers: [
        'Category ID',
        'Category Name',
    ],
    rows:[]
};

function Category() {
    
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

    function searchByName(name){
        if(name === ""){return}

        const query = {
            name: name,
        };
        category.searchByName(query)
        .then(res => {
            setTableInfo(prevTable => {
                return {
                    ...prevTable,
                    rows: [...res.data.map(item =>[item._id,item.name])]
                };
            });
           
        })
    }


    return (
        <Wrapper>
            <Header>
                <Searchbar
                    placeholder={"Please enter category name"}
                    handleSearch={searchByName}
                /> 
            </Header>
            <CategoryTable data = {table}/>
        </Wrapper>
    )
}

export default Category
