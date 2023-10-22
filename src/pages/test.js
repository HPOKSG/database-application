import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import TestTable from '../components/Table/TestTable';
import Header from '../components/Header/Header';
import FilterFormBuilder from '../components/Forms/FilterFormBuilder';
import Wrapper from '../components/Helpers/Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';

const dashboardItems = ["Inventory", "Category"]
const icons = [faWarehouse, faSitemap]



const Test = () => {
  return (
    <Wrapper>
    <header className='header'>
      <Header/>
    </header>
    <section className='main-section' style={{display : "flex"}}>
      <Sidebar items={dashboardItems} icons={icons}/>
      <TestTable></TestTable>
      {/* <FilterFormBuilder></FilterFormBuilder> */}
    </section>
    </Wrapper>
    
  );
};

export default Test;
