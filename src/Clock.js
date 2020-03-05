import React, { Component } from "react";
import RemoveBtn from "./Buttons/RemoveButton";

export default class Clock extends Component {
  render() {
    return (
      <div>
        {this.props.date}
        <RemoveBtn removeFnc={this.props.removeFnc}></RemoveBtn>
      </div>
    );
  }
}
