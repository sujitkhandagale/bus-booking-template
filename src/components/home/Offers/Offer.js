import React from "react";
import "./offers.scss";
import Offerbox from "./Offerbox";

function Offer() {
  return (
    <section>
      <div className="section-heading">
        <h3>Offers & App</h3>
      </div>
      <div className="offer-box">
        <Offerbox
          icon={<i className="fa-duotone fa-gifts"></i>}
          Ongoing_Offers="Ongoing Offers"
          Box_description="Book your bus tickets online & get amazing discounts"
          link={"jbkb"}
        />
        {/* Food Booking  */}
        <Offerbox
          icon={<i className="fa-duotone fa-burger-soda"></i>}
          Ongoing_Offers="Food Booking"
          Box_description="We Offer On Boarding Food Service. Beverages, Biryani Etc"
          link={"jbkb"}
        />
        <Offerbox
          icon={<i className="fa-duotone fa-map-location"></i>}
          Ongoing_Offers="Bus Locate"
          Box_description="We Offering Best Tools To Locate Our Ongoing Bus"
          link={"jbkb"}
        />
        <Offerbox
          icon={<i className="fa-duotone fa-hand-holding-dollar"></i>}
          Ongoing_Offers="Refer & Earn"
          Box_description="We Have Strong Referral marketing. Share Promo Code & Earn Money"
          link={"jbkb"}
        />
      </div>
    </section>
  );
}

export default Offer;
