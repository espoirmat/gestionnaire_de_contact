import './style/AddContact.css'
import React from 'react';





function AddContact() 
{
   return (<div className="form">

    <form className="formulaire" >
        <label htmlFor="nom">Nom</label>
        <input type="text" className="nom"/>

        <label htmlFor="usename">Nom d'utilisateur</label>
        <input type="text" className="usename"/>

        <label htmlFor="email">Mail</label>
        <input type="email" className="mail"/>

        <label htmlFor="address">address</label>
        <input type="textarea" className="address"/>

        <label htmlFor="phone">phone</label>
        <input type="text" className="phone"/>

        <label htmlFor="website">website</label>
        <input type="text" className="website"/>

        <label htmlFor="company">company</label>
        <input type="text" className="company"/>

        <input type='submit' value="valider"  />
    </form>

   </div> )
}



export default AddContact