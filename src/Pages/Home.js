import React from "react";
import MainSlider from "../components/home/MainSlider";
import Header from "./../components/layouts/Header";
import MainFilter from "./../components/home/MainFilter";
import Offer from "../components/home/Offers/Offer";
import Footer from "../components/layouts/Footer";
import WeOffer from './../components/home/Offers/WeOffer';
import OurBuses from "../components/home/our_buses/OurBuses";
import Testomonial from "../components/home/Testomonial";
import Test from './../Test';


function Home() {
  return (
    <div>
      <Header />
      <Test/>
      <MainSlider />
      <MainFilter />
      <Offer />
      <WeOffer/>
      <OurBuses/>
<Testomonial/>
      <Footer />
    </div>
  );
}

export default Home;
