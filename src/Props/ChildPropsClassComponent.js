import React, { Component } from "react";

export default class ChildPropsClassComponent extends Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.message.name}</p>
        <p>Surname: {this.props.message.serName}</p>
        <p>Age: {this.props.message.age}</p>
        <p>Location: {this.props.message.location}</p>
        <hr />
        <p>Address : {this.props.messages.address}</p>
        <p>location : {this.props.messages.location}</p>
        <p>location : {this.props.messages.location}</p>
        <p>gender : {this.props.messages.gender}</p>
        <hr />
        <p>position : {this.props.messagess.position}</p>
        <p>location : {this.props.message.location}</p>
        <p>contactNo : {this.props.messagess.contactNo}</p>
        <p>gender : {this.props.messagess.gender}</p>

        <hr />
        <p>name: {this.props.messagesss.name}</p>
        <p>place: {this.props.messagesss.palce}</p>
        <p>date: {this.props.messagesss.data}</p>
        <p>state: {this.props.messagesss.state}</p>
      </div>
    );
  }
}
