import React from 'react'
import { useState } from 'react';
import Wrapper from '../components/Helpers/Wrapper';
import HeaderExtension from '../components/Header/HeaderExtension';
import TestTable from '../components/Table/TestTable';
import AddItemForm from '../components/AddItemForm/AddItemForm';
import Sidebar from '../components/Sidebar/Sidebar';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';

const dashboardItems = ["Inventory", "Category"]
const icons = [faWarehouse, faSitemap]

const ADMIN_TAB_ITEM = {
    INVENTORY: 'INVENTORY',
    CATEGORY: 'CATEGORY'
}


export default function Admin() {
    const [isAddItem,setAddItemState] = useState(false)
    const [tabItem,setTabItem] = useState(ADMIN_TAB_ITEM.INVENTORY)
    function handleDisplayAddForm(){
      setAddItemState(true)
    }
  
    return (
      <Wrapper>
        <header className='header'>
          <HeaderExtension
              filter = {"Filter Inventory"}
              add = {"Add Inventory"}
              handleDisplayAddForm = {handleDisplayAddForm}
  
          />
        </header>
        <section className='main-section' style={{display : "flex"}}>
          <Sidebar items={dashboardItems} icons={icons}/>
          {!isAddItem && <TestTable/>}
          {isAddItem && <AddItemForm/>}
          {/* <FilterFormBuilder></FilterFormBuilder> */}
        </section>
      </Wrapper>
      
    );
}
