import {ContactItem} from "./data/ContactItem"
import './style/ListContact.css'
import React from 'react'

function ListContact() {
  return (
    <div className="list_item">
    <h1>liste des contacts</h1>
    {ContactItem.map(ContactItem=>(<p key={ContactItem.id}>
      
      <ul>
        <li>{ContactItem.id} {""} {ContactItem.name}{""} {ContactItem.username}{""} {ContactItem.email}</li>
      </ul>
      
      
      </p>))}
    </div>
  )
}

export default ListContact
