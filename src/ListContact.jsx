import {ContactItem} from "./data/ContactItem"
import React from 'react'

function ListContact() {
  return (
    <div>
      {ContactItem.map(ContactItem=>(<h1>{ContactItem.name}</h1>))}
    </div>
  )
}

export default ListContact
