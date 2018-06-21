import React, { Component } from "react";
import "./Alarms.css";
import { connect } from "react-redux";
import { selectAllAlarms } from "../reducers/appReducer";
import { toggleAlarm, toggleDay } from "../actions/alarmActions";
import AlarmIcon from "../assets/alarm.svg";
import FamilyIcon from "../assets/group.svg";
import MyAlarms from "./MyAlarms";

export const subMenus1 = [
  { title: "Deine Wecker", img: AlarmIcon },
  { title: "Familienwecker", img: FamilyIcon }
];

export const subMenus2 = [
  { title: "Zeit" },
  { title: "Wochentag" },
  { title: "Schlummern" },
  { title: "Name" }
];

class Alarms extends Component {
  state = {
    selectedAlarm: null,
    selectedSubMenu1: "Deine Wecker",
    selectedSubMenu2: null
  };

  onAlarmListItemClick = value => this.setState({ selectedAlarm: value });

  onSubMenu2Click = menu => this.setState({ selectedSubMenu2: menu });

  onSidebarClick = menu => {
    this.setState({ selectedSubMenu1: menu.title });
    if (this.state.selectedAlarm) {
      this.setState({ selectedAlarm: null });
    }
  };

  render() {
    const { alarms } = this.props;
    const { selectedSubMenu1, selectedSubMenu2, selectedAlarm } = this.state;

    let renderedSubMenu1 = null;

    if (selectedSubMenu1 === "Deine Wecker") {
      renderedSubMenu1 = (
        <MyAlarms
          alarms={alarms}
          selectedAlarm={selectedAlarm}
          toggleAlarm={this.props.toggleAlarm}
          toggleDay={this.props.toggleDay}
          onAlarmListItemClick={this.onAlarmListItemClick}
          selectedSubMenu2={selectedSubMenu2}
          onSubMenu2Click={this.onSubMenu2Click}
        />
      );
    } else if (selectedSubMenu1 === "Familienwecker") {
      renderedSubMenu1 = null;
    }

    return (
      <div className="alarms-wrapper">
        <div className="alarms-header">{selectedSubMenu1}</div>
        <div className="alarms-main">
          <div className="alarms-side-panel">
            {subMenus1.map(menu => (
              <div
                className={`alarm-menu-mode ${
                  selectedSubMenu1 === menu.title ? "active" : ""
                }`}
                onClick={() => this.onSidebarClick(menu)}>
                <img src={menu.img} />
              </div>
            ))}
          </div>
          {/* TODO: Seperate ownAlarms view and familyAlarms view from this component */}
          {renderedSubMenu1}
        </div>
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
