import "./App.css";
import Socialmedia from "./components/Socialmedia";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cookies from './components/cookies_consent_box/Cookies';
import About from './Pages/About';
import Login from './Pages/authentication/Login';
import SignUp from './Pages/authentication/SignUp';


function App() {
  return (
    <div>
      <Socialmedia />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/sign-in" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      <Cookies/>
    </div>
  );
}

export default App;
