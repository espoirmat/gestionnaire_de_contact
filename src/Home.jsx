import React from 'react'
import ListContact from './ListContact'
import AddContact from './AddContact'
import './style/Home.css'

function Home() {
  return (
    <div className="contenue">
      <AddContact/>
      <ListContact/>
    </div>
  )
}

export default Home
