import React from "react";
import "./testomonial.scss";

function Testomonial() {
  const ClientPhotos = {
    photo1: {
      url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      name: "Vijay Sarabhai",
      des : "Very Nice COmany"
    },
    photo2: {
      url: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      name: "Dinesh Kadam",
      des : "Travel is the real deal!"
    },
    photo3: {
      url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
      name: "Nita Wagh",
      des : "Needless to say we are extremely satisfied with the results."
    },
    photo4: {
      url: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      name: "Manisha Mathur",
      des : "Nice Travel"
    },
    photo5: {
      url: "https://images.unsplash.com/photo-1655874819398-c6dfbec68ac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      name: "Kajal Jadhav",
      des : "I was amazed at the quality of Travel."
    },
    photo6: {
      url: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      name: "Alex Jonsan",
      des : "Absolutely wonderful!"
    },
  };
  return (
    <div>
      <div className="section-heading">
        <h3>Our Testomonials</h3>
      </div>
      <div className="testomonial">
        <div className="testominal-box">
          <div className="img">
            <img src={ClientPhotos.photo1.url} alt="" />
          </div>
          <div className="des">
            <h5>{ClientPhotos.photo1.name}</h5>
          <p className=" italic font-semibold ">{ClientPhotos.photo1.des}</p>
          </div>
        </div>
        <div className="testominal-box">
          <div className="img">
            <img src={ClientPhotos.photo2.url} alt="" />
          </div>
          <div className="des">
            <h5>{ClientPhotos.photo2.name}</h5>
          <p className=" italic font-semibold ">{ClientPhotos.photo2.des}</p>
          </div>
        </div>
        <div className="testominal-box">
          <div className="img">
            <img src={ClientPhotos.photo3.url} alt="" />
          </div>
          <div className="des">
            <h5>{ClientPhotos.photo3.name}</h5>
          <p className=" italic font-semibold ">{ClientPhotos.photo3.des}</p>
          </div>
        </div>
        <div className="testominal-box">
          <div className="img">
            <img src={ClientPhotos.photo4.url} alt="" />
          </div>
          <div className="des">
            <h5>{ClientPhotos.photo4.name}</h5>
          <p className=" italic font-semibold ">{ClientPhotos.photo4.des}</p>
          </div>
        </div>
        <div className="testominal-box">
          <div className="img">
            <img src={ClientPhotos.photo5.url} alt="" />
          </div>
          <div className="des">
            <h5>{ClientPhotos.photo5.name}</h5>
          <p className=" italic font-semibold ">{ClientPhotos.photo5.des}</p>
          </div>
        </div>
        <div className="testominal-box">
          <div className="img">
            <img src={ClientPhotos.photo6.url} alt="" />
          </div>
          <div className="des">
            <h5>{ClientPhotos.photo6.name}</h5>
          <p className=" italic font-semibold ">{ClientPhotos.photo6.des}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testomonial;
