import React from "react";

function CounterButton({ handleIncrease, handleDecrease }) {
  return (
    <>
      <button
        style={{
          backgroundColor: "pink",
          width: "100px",
          height: "100px",
          fontSize: "50px",
        }}
        onClick={handleIncrease}
      >
        +
      </button>
      <button
        style={{
          backgroundColor: "green",
          width: "100px",
          height: "100px",
          fontSize: "50px",
        }}
        onClick={handleDecrease}
      >
        -
      </button>
    </>
  );
}

export default CounterButton;
