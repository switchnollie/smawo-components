import React, { Component } from "react";
import "./Alarms.css";
import { connect } from "react-redux";
import { selectAllAlarms } from "../reducers/appReducer";
import AlarmList from "../components/AlarmList/AlarmList";
import AlarmListItem from "../components/AlarmList/AlarmListItem";

class Alarms extends Component {
  state = {
    selectedListItem: null
  };

  onListItemClick = value => this.setState({ selectedListItem: value });

  render() {
    const { alarms } = this.props;
    return (
      <div className="alarms-main">
        <AlarmList>
          {alarms.map(({ name, isOn, days, time, id }) => (
            <AlarmListItem
              id={id}
              name={name}
              isOn={isOn}
              days={days}
              time={time}
              onClick={() => this.onListItemClick(id)}
              active={id === this.state.selectedListItem}
            />
          ))}
        </AlarmList>
      </div>
    );
  }
}

export default (Alarms = connect(state => ({ alarms: selectAllAlarms(state) }))(
  Alarms
));
