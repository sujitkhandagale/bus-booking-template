import React from 'react'
import Bus from "../../assets/logo/bus.gif"
import "./error.scss"
import { Link } from 'react-router-dom';

function NotFound() {
  const currentURL = window.location.href;
  return (
    <div className='Postion_center'>

      <img src={Bus} alt="" />

      <h1>404 Not Found</h1>
      <p><span>{currentURL}</span> <br />  It's look like current page is down or removed</p>
     <div className="text-center pt-4">
     <Link className='btn' to={"/"}>Home</Link>
     </div>
    </div>
  )
}

export default NotFound