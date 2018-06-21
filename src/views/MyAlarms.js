import React, { Component, Fragment } from "react";
import PlusIcon from "../assets/plusIcon.svg";
import AlarmListItem from "../components/AlarmList/AlarmListItem";
import AlarmList from "../components/AlarmList/AlarmList";
import List from "../components/List/List";
import ListItem from "../components/List/ListItem";
import { subMenus2 } from "./Alarms";

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
      <Fragment>
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
            {subMenus2.map(menu => (
              <ListItem
                key={menu.title}
                value={menu.title}
                active={menu.title === selectedSubMenu2}
                onClick={() => onSubMenu2Click(menu.title)}
              />
            ))}
          </List>
        )}
      </Fragment>
    );
  }
}
