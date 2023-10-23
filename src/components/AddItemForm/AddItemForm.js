import './AddItemForm.css'
import Item from './Item'

const AddItemForm = props=>{
    return <div className='add-form'>
        <h2> Add New Inventory</h2>
        <div className='form-content'>
            <Item
                inputName = "Inventory Name"
                placeholder = "Please Enter Name"
                type = "text"
            />
             <Item
                inputName = "Inventory Address"
                placeholder = "Please Enter Address"
                type = "text"
            />
             <Item
                inputName = "Inventory Volume"
                placeholder = "Please Enter Volume"
                type = "number"
            />
        </div>
        <div className='submit-btn'><p>Submit</p></div>
    </div>
}

export default AddItemForm