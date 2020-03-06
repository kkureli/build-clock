import React from "react";
import "./App.css";
import Clock from "./Clock";
import uuid from "react-uuid";
import AddButton from "./Buttons/AddButton";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      clockIDs: [1, 2],
      pressedId: null,
      pressedIdArr: []
    };
  }

  componentDidMount() {
    setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  addBtnListener = () => {
    if (this.state.clockIDs.length === 0) {
      const clockIds = this.state.clockIDs;
      clockIds.push(1);
      this.setState({ clockIDs: clockIds });
    } else {
      const lastNum = this.state.clockIDs[this.state.clockIDs.length - 1];
      const clockIds = this.state.clockIDs;
      clockIds.push(lastNum + 1);
      this.setState({ clockIDs: clockIds });
    }
  };

  removeBtnListener = id => {
    const pressedIdsArr = this.state.pressedIdArr;
    pressedIdsArr.push(id);
    this.setState({ pressedIdArr: pressedIdsArr });
  };

  mappingFunc = () => {
    return this.state.clockIDs.map(id => {
      return (
        <Clock
          id={id}
          pressedArr={this.state.pressedIdArr}
          removeFnc={() => this.removeBtnListener(id)}
          key={uuid()}
          addBtnFnc={this.addBtnListener}
          date={this.state.date.toLocaleTimeString()}
        ></Clock>
      );
    });
  };

  render() {
    return (
      <div>
        {this.mappingFunc()}
        <AddButton addBtnFnc={this.addBtnListener}></AddButton>
      </div>
    );
  }
}

export default App;
