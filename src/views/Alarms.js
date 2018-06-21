import React, { Component } from "react";
import "./Alarms.css";
import { connect } from "react-redux";
import { selectAllAlarms } from "../reducers/appReducer";
import AlarmList from "../components/AlarmList/AlarmList";
import AlarmListItem from "../components/AlarmList/AlarmListItem";
import { toggleAlarm, toggleDay } from "../actions/alarmActions";

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
          <li className="list-item new-alarm">
            {"+"}
            <span>Wecker hinzufügen</span>
          </li>
          {alarms.map(({ name, isOn, days, time, id }) => (
            <AlarmListItem
              key={id}
              id={id}
              name={name}
              isOn={isOn}
              days={days}
              time={time}
              onClick={() => this.onListItemClick(id)}
              active={id === this.state.selectedListItem}
              toggleAlarm={() => this.props.toggleAlarm(id)}
              toggleDay={index => this.props.toggleDay(id, index)}
            />
          ))}
        </AlarmList>
      </div>
    );
  }
}

export default (Alarms = connect(
  state => ({ alarms: selectAllAlarms(state) }),
  dispatch => ({
    toggleAlarm: id => dispatch(toggleAlarm(id)),
    toggleDay: (id, index) => dispatch(toggleDay(id, index))
  })
)(Alarms));
