import React from 'react'
import { Link } from 'react-router-dom'

function MenuList() {
  return (
    <div>
          <ul className="flex text-right float-right">
            <li>
              <Link className="" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="" to={"/contact-us"}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="" to={"/shipment-tracking"}>
                Track Shipment
              </Link>
            </li>
            <li>
              <Link className="" to={"/about"}>
                About
              </Link>
            </li>
            <li>
              <span>
                <Link to="/sign-in">Login</Link>/
                <Link to="/register">Register</Link>
              </span>
            </li>
          </ul>
    </div>
  )
}

export default MenuList