import React from "react";
import "./Socialmedia.scss";
import Github from "../assets/github.png";
import { Link } from 'react-router-dom';

function Socialmedia() {
  return (
   <Link target={"_blank"} rel="noreferrer" to="https://github.com/sujitkhandagale/tailwind-bus-booking">
     <div className="Social_media_postion">
        <div className="social_media_list">
        <img src={Github} alt="Social Media" />
        <h6> Find Me</h6>
      </div>
    </div>
   </Link>
  );
}

export default Socialmedia;
