import React, {useState} from "react";
import "./Layouts.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import DateTime from "./../tools/DateTime";
import SvgLogo from "./Logo";
import "./mobile_menu.scss"
import MenuList from "./MenuList";

function Header() {

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <div className="header_top_bar">
        <DateTime></DateTime>
        <div className="tool-bar text-right">

          <Link to="/shipment-tracking">Track Shipment</Link>{" "}
          <Link to="/">I Track Booking</Link>
          <br className="break-line" />
          &nbsp;&nbsp;
          <Link to="/">+91-1234567890</Link>
          &nbsp;&nbsp;
          <Link target={"_blank"} to="https:youtube.com">
            <i className="fa-brands fa-facebook"></i>&nbsp;
          </Link>
          &nbsp;&nbsp;
          <Link target={"_blank"} to="https:youtube.com">
            <i className="fa-brands fa-twitter"></i>&nbsp;
          </Link>
          &nbsp;&nbsp;
          <Link target={"_blank"} to="https:youtube.com">
            <i className="fa-brands fa-youtube"></i>&nbsp;
          </Link>
          &nbsp;&nbsp;
          <Link target={"_blank"} to="https:youtube.com">
            <i className="fa-brands fa-instagram"></i>&nbsp;
          </Link>

        </div>
      </div>
      <nav className="navbar">
        <div className="nav-logo float-left w-50">
          <Link to="/">
            <div className="logo">
              <SvgLogo />
            </div>
          </Link>
        </div>
        <div className="mobile-menu-icon">
          <button onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
          </button>

        </div>
        <div className={`${isActive ? "nav-menu" : "mobile_menu"}`}>
        <MenuList/>
        </div>
      </nav>
    </div>
  );
}

export default Header;
