import React from 'react'
import './cookies.scss'
import { Link } from 'react-router-dom';

function Cookies() {
  return (
    <section className='cookies-box'>We use cookies for a number of reasons. such as keeping FT sites reloabile and secure, presonalishing content and ads, providing social media features to analyse how our sites are used
    <br />
    <br />
    <div>

     <Link className='cookies-link-right' to="/">Manage</Link>
     <Link className='cookies-button' to="/">Accepts</Link>
    </div>
    </section>

  )
}

export default Cookies