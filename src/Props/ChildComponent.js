import React from "react";

function ChildComponent(props) {
  const { name, rollNo, address, state, country, add } = props.data;
  const result = add(2, 2);
  const { exam, examData, examMode, examLocation } = props.data2;
  const vars = props.data3;
  return (
    <div>
      <p> Name: {name}</p>
      <br />
      <p>Roll No: {rollNo}</p>
      <br />
      <p>address : {address}</p>
      <br />
      <p>state: {state}</p>
      <br />
      <p> country: {country}</p>
      <br />
      <p>result : {result}</p>
      <hr />

      <p>exam : {exam}</p>
      <br />
      <p>examDate : {examData}</p>
      <br />
      <p>examMode : {examMode}</p>
      <br />
      <p>examLocation : {examLocation}</p>

      <hr />
      <p>name: {vars}</p>
    </div>
  );
}

export default ChildComponent;
