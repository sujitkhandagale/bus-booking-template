import React from "react";
import AppStore from "../home/Offers/AppStore";
import "./Layouts.scss";

import PaymentGpay from '../../assets/payment_gateway/google-pay.png'
import PaymentPaytm from '../../assets/payment_gateway/paytm.png'
import PaymentPayu from '../../assets/payment_gateway/payu.png'

import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function Footer() {
  const notify = () =>  toast.success("Newsletter Subscribe");
  return (
    <div>
      <AppStore />
      <footer>
        <div className="footer_sections">
          <div className="company_info">
            {/* <img src={Logo} width="180" alt="" /> */}
            <p>
              Olus Bus Offering Best First Class Buses For Sort And Long Travel.
              We Sureve Best Clients in india
            </p>
            <br />
            <Link>Email Id: Fake@gmail.com</Link>
            <p>
              <Link to={"/"}>Contact No : +91-1234567890</Link>
            </p>
            <div className="location_map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120637.5877164773!2d72.83346428720704!3d19.110962726350365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1678340256386!5m2!1sen!2sin"
                width="600"
                height="200"

                loading="lazy"

                title={"google map"}
              ></iframe>
            </div>
          </div>
          <div className="footer_links">
            <div className="footer_heading">
              <h5>Useful Links</h5>
            </div>
            <Link to={"/"} className="footer_links">
              Track Shipment
            </Link>
            <br />
            <Link to={"/"} className="footer_links">

              Bus Tracking
            </Link>
            <br />
            <Link to={"/"} className="footer_links">
              Our Buses
            </Link>
            <br />
            <Link to={"/"} className="footer_links">
              Agent Login
            </Link>
            <br />


            <br />
          </div>
          <div className="footer_links">
            <div className="footer_heading">
              <h5>Useful Links</h5>
            </div>
            <Link to={"/"} className="footer_links">
              Track Shipment
            </Link>
            <br />
            <Link to={"/"} className="footer_links">

              Bus Tracking
            </Link>
            <br />
            <Link to={"/"} className="footer_links">
              Check Our Buses
            </Link>
            <br />
            <Link to={"/"} className="footer_links">
              Help and Safety Guide
            </Link>
            <br />
          </div>
          <div className="footer_links">
            <div className="footer_heading">
              <h5>Important Links</h5>
            </div>
            <Link to={"/"} className="footer_links">
             Cookies Policy
            </Link>
            <br />
            <Link to={"/"} className="footer_links">

              privacy policy
            </Link>
            <br />
            <Link to={"/"} className="footer_links">
             Terms And Conditions
            </Link>
            <br />
            <Link to={"/"} className="footer_links">
            Contact Us
            </Link>
            <br />
            <Link to={"/"} className="footer_links">
            Complaints
            </Link>
            <br />
          </div>
          <div className="footer_newsletter text-center">
          <div className="pb-4">Find Us</div>
        <Link><i className="fa-brands fa-facebook font-20"></i> &nbsp;</Link>
          <Link><i className="fa-brands fa-twitter font-20"></i> &nbsp;</Link>
         <Link><i className="fa-brands fa-youtube font-20"></i> &nbsp;</Link>
         <Link><i className="fa-brands fa-instagram font-20"></i> &nbsp;</Link>



          <label className=" Newsletter_heading block mb-2 text-white">News Letter</label>
            <input
              type="email"
              className="Filter_input"
              placeholder="Email Id"
              required
            />
           <button className="Newsletter_button" onClick={notify}>Submit</button>
     <div className="container">
     <ToastContainer />
     </div>

          </div>
        </div>
        <div className="footer_bottom_poster">
          <div>All Right Reseved I OLUS BUS @ 2023 I created and maintained by - <Link target={"_blank"} to="https://sujitkhadnagale.in">Code.Sujit</Link></div>
          <div className="Payment_gateway">
          We Accept Payments &nbsp;
          <div className="Payment_gateway"> <img src={PaymentGpay}  alt="" />&nbsp;
          <img src={PaymentPaytm} alt="" /> &nbsp;
          <img src={PaymentPayu}  alt="" />&nbsp;


          </div>

           </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
