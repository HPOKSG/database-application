import React from 'react'
import CategoryTable from './Category/CategoryTable'
import Wrapper from '../../../components/Helpers/Wrapper'
import Header from '../../../components/Header/Header'
import Searchbar from '../../../components/Header/HeaderComponent/Searchbar'
import CategoryModal from './Category/CategoryModal'
import axios from 'axios';
import { useState,useEffect } from 'react';
import API_CONFIG from '../../../config/apiConfig'
var tableData = {
    headers: [
        'Category ID',
        'Category Name',
    ],
    rows:[]
};

async function searchById(id) {
    return new Promise((resolve, reject) => {
      const body = {
        search_attribute: 'parent',
        search_string: id,
      };
      
      axios.post(API_CONFIG.getCategoryByIdAPI, body)
        .then(res => {
          const result = [...res.data.map(item => [item._id, item.name]), ['', '']];
          resolve(result);
        })
        .catch(error => {
          console.error(error);
          reject(error);
        });
    });
  }

function Category() {
    
    var [parentId,setParentId] = useState(null)
    var [table,setTableInfo] = useState(tableData)
    const [modalIsOpen, setIsOpen] = useState(true);
    
    useEffect(() => {
        // Simulate an API call or data fetching
        searchById(parentId)
        .then(res => {setTableInfo(prevTable => {
            return {
                ...prevTable,
                rows: res
            };
        });})
        
        return () => {
            // Cleanup function (if needed)
            // This function will be called when the component unmounts or when the dependencies change.
        };
    }, [parentId]); // The empty dependency array means this effect runs only once on component mount

    function searchByName(name){
        if(name === ""){
            searchById(null)
            .then(res => {setTableInfo(prevTable => {
                return {
                    ...prevTable,
                    rows: res
                };
            });})
        }
        const query = {
            name: name,
        };
        axios.post(API_CONFIG.getCategoryByNameAPI, query)
        .then(res => {
            setTableInfo(prevTable => {
                return {
                    ...prevTable,
                    rows: [...res.data.map(item =>[item._id,item.name])]
                };
            });
           
        })
    }
    

    function openModal() {
        setIsOpen(true);
    }
    
    function afterOpenModal() {
    // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Wrapper>
            <Header>
                <Searchbar
                    placeholder={"Please enter category name"}
                    handleSearch={searchByName}
                /> 
            </Header>
            <CategoryTable 
                data = {table}
                handleEdit={openModal}
                handleCreate={openModal}
            />
            <CategoryModal
                openModal={openModal}
                closeModal={closeModal}
                // onSave={onCreate}
            />
        </Wrapper>
    )
}

export default Category
