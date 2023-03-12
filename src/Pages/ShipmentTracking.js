import React from 'react'
import Header from './../components/layouts/Header';
import Footer from './../components/layouts/Footer';
import ShipmentTrack from './../components/tracking/ShipmentTrack';

function ShipmentTracking() {
  return (
    <div>
         <Header />
        <ShipmentTrack />
        <Footer />
    </div>
  )
}

export default ShipmentTracking