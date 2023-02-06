import './style/AddContact.css'

function AddContact() 
{
   return (<div className="contenue">

    <form className="formulaire">
        <label htmlFor="name">Nom</label>
        <input type="text" className="name"/>

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
    </form>

   </div> )
}



export default AddContact