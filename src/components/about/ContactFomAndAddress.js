import React from 'react'
import "./contactfromandaddress.scss"

function ContactFomAndAddress() {
  return (
    <section className='Contact_from_and_Address'>
        <div>
            <form className='form_group'>
               <div> <input type="text" placeholder={"Name"} /></div>
               <div> <input type="number" placeholder={"Name"} /></div>
             <div> <input type="email" placeholder={"Name"} /></div>
              <div> <input type="textarea" placeholder={"Name"} /></div>
            </form>
        </div>
        <div>address</div>
    </section>
  )
}

export default ContactFomAndAddress