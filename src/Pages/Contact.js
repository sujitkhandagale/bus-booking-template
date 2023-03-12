import React from "react";
import ContactFomAndAddress from '../components/about/ContactFomAndAddress';
import Footer from '../components/layouts/Footer';
import Header from './../components/layouts/Header';

function Contact() {
  return (
    <div>

      <Header />
      <div className="about_section">
        <div>
          <iframe
            width="100%"
            height="600"

            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Mumbai+(Lotus%20Bus)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title={"google"}
          ></iframe>
        </div>
      </div>
      <ContactFomAndAddress />
      <Footer />
    </div>
  );
}

export default Contact;
