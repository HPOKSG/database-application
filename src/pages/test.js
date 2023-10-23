import React from 'react';
import { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import TestTable from '../components/Table/TestTable';
import HeaderExtension from '../components/Header/HeaderExtension';
import FilterFormBuilder from '../components/Forms/FilterFormBuilder';
import Wrapper from '../components/Helpers/Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import AddItemForm from '../components/AddItemForm/AddItemForm';
const dashboardItems = ["Inventory", "Category"]
const icons = [faWarehouse, faSitemap]

const Test = () => {
  const [isAddItem,setAddItemState] = useState(true)

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
};

export default Test;
