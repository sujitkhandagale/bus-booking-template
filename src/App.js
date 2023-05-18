import "./App.css";
import Socialmedia from "./components/Socialmedia";
import { Routes, Route,  } from "react-router-dom";
import Home from "./Pages/Home";
import Cookies from './components/cookies_consent_box/Cookies';
import About from './Pages/About';
import Login from './Pages/authentication/Login';
import NotFound from './components/error/NotFound';
import AdminLogin from './Pages/authentication/AdminLogin';
import AgentSigin from './Pages/authentication/AgentSigin';
import Contact from './Pages/Contact';
import BusBookingSearch from './Pages/BusBookingSearch';
import ShipmentTracking from './Pages/ShipmentTracking';
import Blogs from './Pages/Blogs/Blogs';
import Register from './Pages/authentication/Register';
import './assets/font-awsome-v6/css/fontawesome.min.css';
import "./assets/font-awsome-v6/css/all.css";


function App() {
  return (
    <div>
      <Socialmedia />
      <Routes>
      <Route extact path="/agent/sign-in" element={<AgentSigin/>} />
          <Route path="/admin/sign-in" element={<AdminLogin/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/sign-up" element={<Register/>} />
        <Route path="/sign-in" element={<Login/>} />

        <Route path="*" element={<NotFound />} />
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/busbookingsearch" element={<BusBookingSearch/>}/>
        <Route path="/shipment-tracking" element={<ShipmentTracking/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        {/* <Route path="/blogs/single-page"/> */}
      </Routes>



      <Cookies/>
    </div>
  );
}

export default App;
