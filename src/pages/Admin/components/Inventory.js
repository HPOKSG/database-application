import React from 'react'
import Wrapper from '../../../components/Helpers/Wrapper'
import ButtonWithIcon from "../../../components/Header/HeaderComponent/ButtonWithIcon";
import Searchbar from '../../../components/Header/HeaderComponent/Searchbar';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TestTable from '../../../components/Table/TestTable'
import { useState } from 'react'
import AddItemForm from '../../../components/AddItemForm/AddItemForm'
import Header from '../../../components/Header/Header'

function Inventory() {
  const [isAddInventory,setAddState] = useState(false)

  function handlFilter(){
    console.log("Handle Filter")
  }
  function openAddInventoryForm(){
    setAddState(true)
  }
  function searchByName(name){
    if(name === ""){return}
    console.log(name)
  }
  return (
    <Wrapper>
        <Header>
          <Searchbar
              placeholder={"Please enter category name"}
              handleSearch={searchByName}
          /> 
          <ButtonWithIcon 
              title = {"Filter Inventory"}
              icon = {faSliders}
              color = {"var(--DARKER-BLUE)"}
              backgroundColor = {"var(--WHITE)"}
              onClickHandle =  {handlFilter}
          />
          <ButtonWithIcon
              title = {"Add Inventory"}
              icon = {faPlus}
              color = {"var(--WHITE)"}
              backgroundColor = {"var(--ORANGE)"}
              onClickHandle = {openAddInventoryForm}
          />
        </Header>
        {!isAddInventory && <TestTable/>}
        {isAddInventory && <AddItemForm/>}
    </Wrapper>

  )
}

export default Inventory
