import React from "react";
import "./Layouts.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/svg_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import DateTime from "./../tools/DateTime";

function Header() {
  return (
    <div>

       <div className="header_top_bar">
       <div className="text-leff"><DateTime></DateTime></div>
       <div className="tool-bar text-right">
        <a href="/"> Theme :</a> I <a href="/">Track Bus</a> I Track Booking
      </div>
       </div>

      <div className="heading-news">
        <div className="text-right">
          Find Us :{" "}
          <a href="https:youtube.com">
            <i className="fa-brands fa-facebook"></i>&nbsp;
          </a>
          <a href="https:youtube.com">
            <i className="fa-brands fa-twitter"></i>&nbsp;
          </a>
          <a href="https:youtube.com">
            <i className="fa-brands fa-youtube"></i>&nbsp;
          </a>
          <a href="https:youtube.com">
            <i className="fa-brands fa-instagram"></i>&nbsp;
          </a>
        </div>
        <div className="header-contact-no text-right">
          Contact No : +91-1234567890
        </div>
      </div>
      <nav className="navbar">
        <div className="nav-logo float-left w-50">
          <Link to="/">
            {" "}
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="mobile-menu-icon">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="nav-menu">
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
              <Link className="" to={"/"}>
                Track Shippment
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
                <Link to="/signup">Register</Link>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
