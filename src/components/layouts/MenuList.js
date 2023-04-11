import React from "react";
import { Link } from "react-router-dom";

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
          <div className="dropdown">
            <button className="dropbtn">Blog</button>
            <div className="dropdown-content">
              <Link to="/blogs">Blogs</Link>
              <Link to="/blogs/single-page">Single Page</Link>
            </div>
          </div>
          {/* <Link className="" to={"/blogs"}>
                Blog
              </Link> */}
        </li>
        <li>
          <Link className="" to={"/about"}>
            About
          </Link>
        </li>
        <li>
          <span>
            <Link to="/sign-in">Login</Link>/
            <Link to="/sign-up">Register</Link>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default MenuList;
