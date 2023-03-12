import React from 'react'
import "./shipmenttrack.scss"


function ShipmentTrack() {
  return (
    <div className='shipment_track'>
<div className="shipment_track_box">

 <h1>Shipment Tracking
    <br />
    <span>Tracking id will activate after 2 hours</span>
 </h1>

<div><input type="text" placeholder='Track your shipment here' /></div>
<div>
<button
    type="button"
    data-te-ripple-init
    data-te-ripple-color="light"
    className=" mt-4 inline-block rounded bg-black px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
  Track
  </button>
    </div>

</div>
    </div>
  )
}

export default ShipmentTrack