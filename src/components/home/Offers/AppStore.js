import React from 'react'
import "./app_store.scss"
import GooglePlay from "../../../assets/logo/google-store.png"
import AppleStore from "../../../assets/logo/apple-store.png"

function AppStore() {
  return (
    <section className='app_store'>
<div className="app_details">
    <h4>Download Latest OLUS BUS App</h4>
    <small>OLUS BUS App Available On Google Play Store And Apple Sore</small>
</div>
<div className="app_icons">
<img src={GooglePlay} alt="" /> <span>OR</span> <img src={AppleStore}  alt="" />
</div>
    </section>
  )
}

export default AppStore