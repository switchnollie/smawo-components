import React, { Component } from "react";
import "./App.css";
import Toggle from "./Toggle";
import RoundBtn from "./RoundBtn";
import PaginationDots from "./PaginationDots";
import DayPicker from "./DayPicker";
import List from "./List";
import ListItem from "./ListItem";

const blockFlex = { display: "flex" }; // Standard is inline-flex
const listItems = ["Weckrhythmus", "Modus", "Schlummern"];

class App extends Component {
  state = {
    selectedStep: 2,
    numberOfSteps: 3,
    firstToggleOn: true,
    secondToggleOn: false,
    days: [true, false, true, true, true, false, false],
    selectedListItem: null
  };

  toggleFirst = e =>
    this.setState(state => ({ firstToggleOn: !state.firstToggleOn }));

  toggleSecond = e =>
    this.setState(state => ({ secondToggleOn: !state.secondToggleOn }));

  onDotClick = dotIndex => this.setState({ selectedStep: dotIndex });

  onDayClick = dayIndex =>
    this.setState(state => ({ days: this.toggleDay(dayIndex) }));

  toggleDay = dayIndex => {
    const newDays = this.state.days.slice();
    newDays[dayIndex] = !newDays[dayIndex];
    return newDays;
  };

  onListItemClick = value => this.setState({ selectedListItem: value });

  render() {
    const {
      selectedStep,
      numberOfSteps,
      firstToggleOn,
      secondToggleOn,
      days
    } = this.state;

    return (
      <div className="App">
        <Toggle
          label="Default On"
          onChange={this.toggleFirst.bind(this)}
          checked={firstToggleOn}
          style={blockFlex}
        />
        <Toggle
          label="Default Off"
          onChange={this.toggleSecond.bind(this)}
          checked={secondToggleOn}
          style={blockFlex}
        />
        <RoundBtn type="done" />
        <RoundBtn type="cancel" />
        <div className="pagination-dots-container">
          <PaginationDots
            steps={numberOfSteps}
            currentStep={selectedStep}
            onClick={this.onDotClick.bind(this)}
          />
        </div>
        <DayPicker days={days} onClick={this.onDayClick.bind(this)} />
        <div className="list-container">
          <List>
            {listItems.map(item => (
              <ListItem
                key={item}
                value={item}
                active={item === this.state.selectedListItem}
                onClick={this.onListItemClick.bind(this)}
              />
            ))}
          </List>
        </div>
      </div>
    );
  }
}

export default App;
