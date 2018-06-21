import React, { Component, Fragment } from "react";
import PlusIcon from "../assets/plusIcon.svg";
import AlarmListItem from "../components/AlarmList/AlarmListItem";
import AlarmList from "../components/AlarmList/AlarmList";
import List from "../components/List/List";
import ListItem from "../components/List/ListItem";
import { subMenus2 } from "./Alarms";

const getDaysAsString = days => {
  const DAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  return days
    .map((day, index) => ({ isActive: day, name: DAYS[index] }))
    .filter(day => day.isActive)
    .reduce((acc, curr) => acc + curr.name + ", ", "")
    .slice(0, -2);
};

export default class MyAlarms extends Component {
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

    const selectedAlarmObj = alarms.find(alarm => alarm.id === selectedAlarm);
    return (
      <span className="my-alarms-container">
        <AlarmList collapsed={Boolean(selectedAlarm)}>
          <li className="list-item new-alarm">
            <span>Wecker hinzufügen</span>
            <img src={PlusIcon} />
          </li>
          {alarms.map(({ name, isOn, days, time, id }) => (
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
              toggleDay={index => toggleDay(id, index)}
              collapsed={Boolean(selectedAlarm)}
            />
          ))}
        </AlarmList>
        {selectedAlarm && (
          <List className="alarm-settings-lv1">
            <div className="list-item header">{selectedAlarmObj.name}</div>
            <div className="alarm-settings-main">
              <div className="alarm-settings-left">
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
                  <span>{getDaysAsString(selectedAlarmObj.days)}</span>
                </div>
              </div>
            </div>
          </List>
        )}
      </span>
    );
  }
}
