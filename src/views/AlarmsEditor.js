import React, { Component, Fragment } from "react";
import PlusIcon from "../assets/plusIcon.svg";
import AlarmListItem from "../components/AlarmList/AlarmListItem";
import AlarmList from "../components/AlarmList/AlarmList";
import List from "../components/List/List";
import ListItem from "../components/List/ListItem";
import { subMenus2 } from "./Alarms";
import { Transition, animated } from "react-spring";
import DayPicker from "../components/DayPicker/DayPicker";

const defaultStyles = {
  width: "calc(58% + 30px)"
};

const getDaysAsString = days => {
  const DAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  return days
    .map((day, index) => ({ isActive: day, name: DAYS[index] }))
    .filter(day => day.isActive)
    .reduce((acc, curr) => acc + curr.name + ", ", "")
    .slice(0, -2);
};

export default class AlarmsEditor extends Component {
  handleDayClick = (id, index) => {
    this.props.onSubMenu2Click("Wochentag");
    this.props.toggleDay(id, index);
  };

  render() {
    const {
      alarms,
      selectedAlarm,
      toggleAlarm,
      toggleDay,
      onAlarmListItemClick,
      selectedSubMenu2,
      onSubMenu2Click
    } = this.props;
    const selectedAlarmObj = alarms
      ? alarms.find(alarm => alarm.id === selectedAlarm)
      : {};
    return (
      <span className="my-alarms-container">
        <AlarmList collapsed={Boolean(selectedAlarm)}>
          <li className="list-item new-alarm">
            <span>Wecker hinzufügen</span>
            <img alt="plus-icon" src={PlusIcon} />
          </li>
          <span style={{ overflowY: "auto", height: "calc(100% - 60px)" }}>
            {alarms &&
              alarms.map(({ name, isOn, days, time, id }) => (
                <AlarmListItem
                  key={id}
                  id={id}
                  name={name}
                  isOn={isOn}
                  days={days}
                  time={time}
                  onClick={() => onAlarmListItemClick(id)}
                  active={id === selectedAlarm}
                  toggleAlarm={() => toggleAlarm(id)}
                  toggleDay={index => this.handleDayClick(id, index)}
                  collapsed={Boolean(selectedAlarm)}
                />
              ))}
          </span>
        </AlarmList>
        <Transition
          from={{ opacity: 1, transform: "scaleX(1) translate3d(100%,0,0)" }}
          enter={{ opacity: 1, transform: "scaleX(1) translate3d(0%,0,0)" }}
          leave={{ display: "none" }}
          config={{ tension: 210, friction: 20 }}>
          {selectedAlarm
            ? function(styles) {
                return (
                  <animated.div style={{ ...defaultStyles, ...styles }}>
                    <List className="alarm-settings">
                      <div className="alarm-settings-main">
                        <div className="alarm-settings-left">
                          <div className="list-item header">
                            {selectedAlarmObj.name}
                          </div>
                          {subMenus2.map(menu => (
                            <ListItem
                              key={menu.title}
                              value={menu.title}
                              active={menu.title === selectedSubMenu2}
                              onClick={() => onSubMenu2Click(menu.title)}
                            />
                          ))}
                        </div>
                        <div className="alarm-settings-right">
                          <button
                            className="save-button"
                            type="button"
                            onClick={() => {}}>
                            Speichern
                          </button>
                          {selectedSubMenu2 !== "Wochentag" ? (
                            <Fragment>
                              <div className="alarm-settings-item">
                                <span>Weckzeit</span>
                                <span>{selectedAlarmObj.time}</span>
                              </div>
                              <div className="alarm-settings-item">
                                <span>Szene</span>
                                <span>{selectedAlarmObj.scene}</span>
                              </div>
                              <div className="alarm-settings-item">
                                <span>Aktive Tage</span>
                                <span>
                                  {getDaysAsString(selectedAlarmObj.days)}
                                </span>
                              </div>
                            </Fragment>
                          ) : (
                            <div className="vertical-day-picker-container">
                              <DayPicker
                                vertical={1}
                                days={selectedAlarmObj.days}
                                onClick={index =>
                                  toggleDay(selectedAlarmObj.id, index)
                                }
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </List>
                  </animated.div>
                );
              }
            : function(styles) {
                return <animated.div style={{ ...styles }} />;
              }}
        </Transition>
      </span>
    );
  }
}
