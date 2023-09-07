import React from "react";

function UsesCallBackChild({ onIncrement }) {
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

export default UsesCallBackChild;
