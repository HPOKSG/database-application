import React from 'react'
import './Item.css'
export default function Item(props) {
  return (
    <div className='input-item'>
        <h3>{props.inputName}</h3>
        <input placeholder={props.placeholder} 
                type={props.type}>
        </input>
    </div>
  )
}
