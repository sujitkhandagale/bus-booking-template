import React from "react";
import "./Socialmedia.scss";
import Github from "../assets/github.png";

function Socialmedia() {
  return (
   <a target={"_blank"} href="https://github.com/sujitkhandagale/tailwind-bus-booking">
     <div className="Social_media_postion">
        <div className="social_media_list">
        <img src={Github} />
        <h6> Find Me</h6>
      </div>
    </div>
   </a>
  );
}

export default Socialmedia;
