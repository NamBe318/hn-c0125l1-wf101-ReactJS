import React, { useEffect, useState } from "react";
import Greeting from "./../bai3/Greeting";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const renderTime = time.toLocaleTimeString();

  return (
    <div>
      <h1>{renderTime}</h1>
      <Greeting time={time}/>
    </div>
  );
}

export default Clock;
