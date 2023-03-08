import React from 'react'
import './Layouts.scss'
import { Link } from 'react-router-dom';
import Logo from  '../../assets/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFacebook } from "@fortawesome/free-solid-svg-icons";


function Header() {
  return (
    <div>
      <div className="tool-bar text-right">
       <a href=""> Theme : Dark

</a> I <a href="">Track Bus</a> I Track Booking
      </div>
        <div className="heading-news">
    <div className="text-right">
      Find Us : <a href="https:youtube.com"><i class="fa-brands fa-facebook"></i>&nbsp;</a><a href=""><i class="fa-brands fa-twitter"></i>&nbsp;</a>
      <a href=""><i class="fa-brands fa-youtube"></i>&nbsp;</a>
      <a href=""><i class="fa-brands fa-instagram"></i>&nbsp;</a>
    </div>
    <div className="header-contact-no text-right">
      Contact No : +91-1234567890
    </div>
  </div>
       <nav className='navbar'>

         <div className="nav-logo float-left w-50">
          <img src={Logo} alt="" />
         </div>
         <div className="mobile-menu-icon">
          <FontAwesomeIcon icon={faBars} size="20" />
          </div>
         <div className="nav-menu">

          <ul className='flex text-right float-right'>
            <li>
              <Link className='' to={'/'}>Home</Link>
            </li>
            <li>
              <Link className='' to={'/'}>About</Link>
            </li>
            <li>
              <Link className='' to={'/'}>Contact Us</Link>
            </li>
            <li>
              <Link className='' to={'/'}>Bus Status</Link>
            </li>
          </ul>

          </div>
        </nav>
    </div>




  )
}

export default Header