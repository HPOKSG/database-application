import React from 'react'
import { useState } from 'react';
import Wrapper from '../../components/Helpers/Wrapper';
import HeaderExtension from '../../components/Header/HeaderExtension';
import Sidebar from '../../components/Sidebar/Sidebar';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header/Header';
import Logo from '../../components/Header/HeaderComponent/Logo';
import Inventory from './components/Inventory';
import Category from './components/Category';
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
        <div className='section-left'>
          <Logo/>
          <Sidebar items={dashboardItems} icons={icons} handleMainContent={setMainContent}/>
        </div>
        <div className='section-right'>
            {mainContent === ADMIN_MAIN_CONTENT.INVENTORY && <Inventory/>}
            {mainContent === ADMIN_MAIN_CONTENT.CATEGORY && <Category/>}
        </div>
      </Wrapper>
      
    );
}
