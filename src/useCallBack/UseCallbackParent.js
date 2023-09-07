import React, { useState } from "react";
import { useCallback } from "react";
import UsesCallBackChild from "./UsesCallBackChild";

function UseCallbackParent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  });

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
      <UsesCallBackChild onIncrement={increment} />
    </div>
  );
}

export default UseCallbackParent;
