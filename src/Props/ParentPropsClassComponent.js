import React, { Component } from "react";
import ChildPropsClassComponent from "./ChildPropsClassComponent";

export default class ParentPropsClassComponent extends Component {
  data = {
    name: "rajeev",
    serName: "patel",
    age: 21,
    location: "Dhanbad",
  };

  data2 = {
    address: " Dhanbad ",
    location: "bank More",
    contactNo: "80808080800",
    gender: " male",
  };

  data4 = {
    position: "associate software engineer",
    location: "bangalore",
    contactNo: "5060401020",
    gender: "female",
  };

  data5 = {
    name: "sushil",
    palce: "dhanbad",
    data: "11/08/23",
    state: "jharkhand",
  };

  render() {
    return (
      <div>
        <ChildPropsClassComponent
          message={this.data}
          messages={this.data2}
          messagess={this.data4}
          messagesss={this.data5}
        />
      </div>
    );
  }
}
