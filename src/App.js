import "./App.css";
import Socialmedia from "./components/Socialmedia";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";


function App() {
  return (
    <div>
      <Socialmedia />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
