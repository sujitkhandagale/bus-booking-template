import React from 'react'
import Result from '../components/bus_booking_result/Result';
import MainFilter from '../components/home/MainFilter';
import Footer from './../components/layouts/Footer';
import Header from './../components/layouts/Header';

function BusBookingSearch() {
  return (
    <div>
       <div>
       <Header />
       <div className="Search_filter_result">
       <MainFilter/>
       </div>
        <Result />
        <Footer/>
       </div>
    </div>
  )
}

export default BusBookingSearch