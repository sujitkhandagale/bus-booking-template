import React from "react";
import "./offers.scss";
import { Link } from "react-router-dom";

function Offerbox({ icon, Ongoing_Offers, Box_description, link }) {
  return (
    <section>
      <div className="offer-boxes">
        <div className="box-icon">{icon}</div>
        <div className="box-description">
          <h3>{Ongoing_Offers}</h3>
          <p>{Box_description}</p>
          <br />
          <Link className="mt-1" target={"_blank"} to={link}>
            For More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Offerbox;
