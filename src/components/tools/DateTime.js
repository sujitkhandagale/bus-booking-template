import React, { useState, useEffect } from "react";
import "./dateandtime.scss";


function DateTime() {

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 0);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  var [date, setDate] = useState(new Date());
  return (
    <div className="Date_And_Time text-left">
      <p>
        {date.toLocaleDateString()} <span> {date.toLocaleTimeString()}</span>
      </p>
    </div>
  );
}

export default DateTime;
