import React from "react";
import PropTypes from "prop-types";
import "./DayPicker.css";

const DAYS = ["M", "D", "M", "D", "F", "S", "S"];

const DayPicker = props => {
  const { days, onClick, ...other } = props;
  return (
    <div className="day-picker" {...other}>
      {days.map((day, index) => (
        <span
          className={`day-dot ${day ? "active" : ""}`}
          onClick={() => onClick(index)}
          key={index}>
          {DAYS[index]}
        </span>
      ))}
    </div>
  );
};

DayPicker.propTypes = {
  days: PropTypes.arrayOf(PropTypes.bool),
  onClick: PropTypes.func.isRequired
};

export default DayPicker;
