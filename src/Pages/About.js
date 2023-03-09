import React from 'react'
import Header from './../components/layouts/Header';
import Footer from './../components/layouts/Footer';
import ContactFomAndAddress from './../components/about/ContactFomAndAddress';


function About() {
  return (
    <div>
      <Header/>
      <div className="about_section">
      <div><iframe width="100%" height="600" frameborder="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Mumbai+(Lotus%20Bus)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
      </div>
<ContactFomAndAddress/>
      <Footer/>
    </div>
  )
}

export default About