import React, { Component } from "react";
import "./Alarms.css";
import { connect } from "react-redux";
import { selectAllAlarms } from "../reducers/appReducer";
import {
  toggleAlarm,
  toggleDay,
  changeAlarmName
} from "../actions/alarmActions";
import FamilyMembers from "./FamilyMembers";
import AlarmIcon from "../assets/alarm.svg";
import FamilyIcon from "../assets/group.svg";
import AlarmsEditor from "./AlarmsEditor";
import Background from "../assets/BackgroundBottom.png";
import SettingModal from "./SettingModal";

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
    selectedSubMenu2: null,
    modalIsOpen: false,
    selectedPerson: null
  };

  changeSelectedPerson = name => this.setState({ selectedPerson: name });

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false, selectedSubMenu2: null });
  };

  onAlarmListItemClick = value => this.setState({ selectedAlarm: value });

  onSubMenu2Click = menu => {
    this.setState({ selectedSubMenu2: menu });
    switch (menu) {
      case "Zeit":
        this.openModal();
        break;
      case "Schlummern":
        this.openModal();
        break;
      case "Name":
        this.openModal();
        break;
      default:
        break;
    }
  };

  onSidebarClick = menu => {
    this.setState({ selectedSubMenu1: menu.title });
    if (this.state.selectedAlarm) {
      this.setState({ selectedAlarm: null, selectedSubMenu2: null });
    }
  };

  render() {
    const { alarms } = this.props;
    const {
      selectedSubMenu1,
      selectedSubMenu2,
      selectedAlarm,
      modalIsOpen,
      selectedPerson
    } = this.state;

    let renderedSubMenu1 = null;

    if (selectedSubMenu1 === "Deine Wecker") {
      renderedSubMenu1 = (
        <AlarmsEditor
          alarms={alarms.filter(alarm => !alarm.isFamilyAlarm)}
          selectedAlarm={selectedAlarm}
          toggleAlarm={this.props.toggleAlarm}
          toggleDay={this.props.toggleDay}
          onAlarmListItemClick={this.onAlarmListItemClick}
          selectedSubMenu2={selectedSubMenu2}
          onSubMenu2Click={this.onSubMenu2Click}
        />
      );
    } else if (selectedSubMenu1 === "Familienwecker") {
      renderedSubMenu1 = (
        <FamilyMembers
          selectedAlarm={selectedAlarm}
          toggleAlarm={this.props.toggleAlarm}
          toggleDay={this.props.toggleDay}
          onAlarmListItemClick={this.onAlarmListItemClick}
          selectedSubMenu2={selectedSubMenu2}
          onSubMenu2Click={this.onSubMenu2Click}
          openModal={this.openModal}
          changeSelectedPerson={this.changeSelectedPerson}
          selectedPerson={selectedPerson}
        />
      );
    }

    const selectedAlarmObj = alarms.find(alarm => alarm.id === selectedAlarm);

    return (
      <div className="alarms-wrapper">
        <div className="alarms-header">
          {selectedSubMenu1 === "Deine Wecker"
            ? selectedSubMenu1
            : `${selectedPerson}s Wecker`}
        </div>
        <div className="alarms-main">
          <div className="alarms-side-panel">
            {subMenus1.map(menu => (
              <div
                className={`alarm-menu-mode ${
                  selectedSubMenu1 === menu.title ? "active" : ""
                }`}
                key={menu.title}
                onClick={() => this.onSidebarClick(menu)}>
                <img alt="sidebar-menu-img" src={menu.img} />
              </div>
            ))}
          </div>
          {renderedSubMenu1}
          <img alt="overlay-bottom" id="overlay-bottom" src={Background} />
        </div>
        <SettingModal
          alarm={selectedAlarmObj}
          isOpen={modalIsOpen}
          closeModal={this.closeModal}
          selectedSubMenu2={selectedSubMenu2}
          currentTime={selectedAlarmObj && selectedAlarmObj.time}
          snoozeTime={selectedAlarmObj && selectedAlarmObj.snoozeTime}
          changeAlarmName={this.props.changeAlarmName}
        />
      </div>
    );
  }
}

export default (Alarms = connect(
  state => ({ alarms: selectAllAlarms(state) }),
  dispatch => ({
    toggleAlarm: id => dispatch(toggleAlarm(id)),
    toggleDay: (id, index) => dispatch(toggleDay(id, index)),
    changeAlarmName: (id, name) => dispatch(changeAlarmName(id, name))
  })
)(Alarms));
