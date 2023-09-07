import React from "react";
import { useState } from "react";

function Modals() {
  const [popup, setPopup] = useState(false);

  const modalToggle = () => {
    setPopup(!popup);
  };
  return (
    <div>
      <button onClick={modalToggle}>Click here</button>
      {popup && (
        <div
          style={{
            borderRadius: "20px",
            border: "2px solid black",
            width: "300px",
            height: "400px",
          }}
        >
          <h1>this modal is toggle </h1>
        </div>
      )}
    </div>
  );
}

export default Modals;
