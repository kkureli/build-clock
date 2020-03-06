import React, { Component } from "react";
import RemoveBtn from "./Buttons/RemoveButton";

export default class Clock extends Component {
  render() {
    // this.props.pressedId.forEach(element => {

    // });
    for (let index = 0; index < this.props.pressedArr.length; index++) {
      if (this.props.id === this.props.pressedArr[index]) {
        return (
          <div style={{ visibility: "hidden" }}>
            {this.props.date}
            <RemoveBtn removeFnc={this.props.removeFnc}></RemoveBtn>
          </div>
        );
      }
    }

    return (
      <div>
        {this.props.date}
        <RemoveBtn removeFnc={this.props.removeFnc}></RemoveBtn>
      </div>
    );
  }
}
