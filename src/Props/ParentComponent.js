import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {

  const data = {
    name: " Rajeev",
    rollNo: 12,
    address: "Dhanbad",
    state: "jharkhand",
    country: "India",
    add: (a, b) => a + b
  };

  const data2 ={
    exam : "science",
    examData : "15/08/23",
    examMode : "Online",
    examLocation : "virtually online",
  }

  const vars = "rajeev";
  return (
    <div>
      <ChildComponent data={data} data2={data2} data3={vars}></ChildComponent>
    </div>
  );
}

export default ParentComponent;
