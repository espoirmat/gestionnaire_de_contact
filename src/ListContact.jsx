import {ContactItem} from "./data/ContactItem"
import './style/ListContact.css'
import React from 'react'

function ListContact() {
  return (
    <div className="list_item">
      {ContactItem.map(ContactItem=>(<h1 key={ContactItem.id}>{ContactItem.name}</h1>))}
    </div>
  )
}

export default ListContact
