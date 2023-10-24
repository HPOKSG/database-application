import React from 'react'
import Wrapper from '../../../components/Helpers/Wrapper'
import HeaderExtension from '../../../components/Header/HeaderExtension'
import TestTable from '../../../components/Table/TestTable'
import { useState } from 'react'
import AddItemForm from '../../../components/AddItemForm/AddItemForm'

function Inventory() {
  const [isAddInventory,setAddState] = useState(false)

  function handlFilter(){
    console.log("Handle Filter")
  }
  function handleAddNewItem(){
    setAddState(true)
  }

  return (
    <Wrapper>
        <HeaderExtension
            filter = "Filter Inventory"
            add = "Add Inventory"
            handleFilter = {handlFilter}
            handleOpenAddForm = {handleAddNewItem}
        />
        {!isAddInventory && <TestTable/>}
        {isAddInventory && <AddItemForm/>}
    </Wrapper>

  )
}

export default Inventory
