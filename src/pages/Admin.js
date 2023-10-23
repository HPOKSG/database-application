import React from 'react'
import { useState } from 'react';
import Wrapper from '../components/Helpers/Wrapper';
import HeaderExtension from '../components/Header/HeaderExtension';
import TestTable from '../components/Table/TestTable';
import AddItemForm from '../components/AddItemForm/AddItemForm';
import Sidebar from '../components/Sidebar/Sidebar';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header/Header';

const dashboardItems = ["Inventory", "Category"]
const icons = [faWarehouse, faSitemap]

const ADMIN_MAIN_CONTENT = {
    INVENTORY: 'INVENTORY',
    CATEGORY: 'CATEGORY',
    ADD_ITEM: 'ADD_ITEM',
    ADD_CATEGORY: 'ADD_CATEGORY'
}

export {ADMIN_MAIN_CONTENT}

export default function Admin() {
    const [mainContent,setMainContent] = useState(ADMIN_MAIN_CONTENT.INVENTORY)
    function handleDisplayAddForm(){
      setMainContent(ADMIN_MAIN_CONTENT.ADD_ITEM)
    }
    
    var headerContent = ( <HeaderExtension
      filter = {"Filter Inventory"}
      add = {"Add Inventory"}
      handleDisplayAddForm = {handleDisplayAddForm}

    />)
    if (mainContent === ADMIN_MAIN_CONTENT.CATEGORY){
      headerContent = <Header/>
    }
    return (
      <Wrapper>
        <header className='header'>
         {headerContent}
        </header>
        <section className='main-section' style={{display : "flex"}}>
          <Sidebar items={dashboardItems} icons={icons} handleMainContent={setMainContent}/>
          {mainContent === ADMIN_MAIN_CONTENT.INVENTORY && <TestTable/>}
          {mainContent === ADMIN_MAIN_CONTENT.ADD_ITEM && <AddItemForm/>}
          {/* <FilterFormBuilder></FilterFormBuilder> */}
        </section>
      </Wrapper>
      
    );
}
