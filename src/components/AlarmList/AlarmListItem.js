import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Toggle from "../Toggle/Toggle";
import DayPicker from "../DayPicker/DayPicker";
import "./AlarmList.css";

const AlarmListItem = ({
  onClick,
  active,
  name,
  isOn,
  days,
  time,
  id,
  toggleAlarm,
  toggleDay,
  collapsed
}) => (
  <li
    className={`list-item ${active ? "active" : ""}`}
    onClick={() => onClick()}>
    <span>
      <span className="alarm-name">{name}</span>
      <Toggle
        onChange={() => toggleAlarm(id)}
        isSelected={active}
        checked={isOn}
      />
    </span>
    {!collapsed && (
      <Fragment>
        <span className="alarm-time">{time}</span>
        <DayPicker days={days} onClick={index => toggleDay(index)} />
      </Fragment>
    )}
  </li>
);

AlarmListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isOn: PropTypes.bool.isRequired,
  days: PropTypes.array.isRequired,
  time: PropTypes.string.isRequired,
  toggleAlarm: PropTypes.func.isRequired,
  toggleDay: PropTypes.func.isRequired
};

export default AlarmListItem;
