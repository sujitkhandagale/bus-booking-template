import React, { useState, useEffect } from "react";

function DateTime() {

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 0);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  var [date, setDate] = useState(new Date());
  return (
    <div>
      <p>
        {date.toLocaleDateString()} <span> {date.toLocaleTimeString()}</span>
      </p>
    </div>
  );
}

export default DateTime;
