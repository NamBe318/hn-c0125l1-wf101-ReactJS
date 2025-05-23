import React from "react";
import CounterButton from "./CounterButton";

function Counter() {
  let count = 0;

  const handleIncrease = () => {
    count += 1;
    console.log(count);
  };

  const handleDecrease = () => {
    count -= 1;
    console.log(count);
  };

  return (
    <CounterButton
      handleDecrease={handleDecrease}
      handleIncrease={handleIncrease}
    />
  );
}

export default Counter;
