import React from "react";
import "./weoffer.scss";

function WeOffer() {
  return (
    <section>
      <div className="section-heading">
        <h3>Features</h3>
      </div>
      <div className="we_offer">
        <div className="bus_demo_photo"></div>
        <div>
          <div>
            <h4>Why OLUS Bus ?</h4>
            <h5>Since 2002, OLUS Bus has been revolutionising the travel industry. Metasearch for travel? No one was doing it. Until we did.</h5>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <p>
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            </p>
            <p>
            Vivamus a mauris vel nunc tristique volutpat. Aenean eu faucibus enim. Aenean blandit arcu lectus, in cursus elit porttitor non. Curabitur risus eros,
            </p>
          </div>
          <div className="features-boxes">
            <div className="features-box">
              <i className="fa-duotone fa-camera-cctv"></i>
              <div className="offer_description">
                <h5>CCTV</h5>
                <p>Your Safety is Our Responsibility</p>
              </div>
            </div>
            <div className="features-box">
            <i className="fa-duotone fa-plug-circle-plus"></i>
              <div className="offer_description">
                <h5>Charger Point</h5>
                <p>Mobile Charger Point Available Near Ecery Seats</p>
              </div>
            </div>
            <div className="features-box">
            <i className="fa-duotone fa-tv"></i>
              <div className="offer_description">
                <h5>Television</h5>
                <p>Latest Movies, Songs, Bhajan on Custumer Demand</p>
              </div>
            </div>
            <div className="features-box">
            <i className="fa-duotone fa-blanket"></i>
              <div className="offer_description">
                <h5>Blanket</h5>
                <p>Neat And Clean Pillows & Blankets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeOffer;
