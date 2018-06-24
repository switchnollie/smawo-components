import React from "react";
import PropTypes from "prop-types";
import "./DayPicker.css";

const DAYS = ["M", "D", "M", "D", "F", "S", "S"];
const DAYS_FULL = [
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
  "Sonntag"
];

const DayPicker = props => {
  const { days, onClick, ...other } = props;
  return (
    <div
      className={`day-picker ${props.vertical ? "vertical" : ""}`}
      {...other}>
      {days.map(
        (day, index) =>
          !props.vertical ? (
            <span
              className={`day-dot ${day ? "active" : ""}`}
              onClick={() => onClick(index)}
              key={index}>
              {DAYS[index]}
            </span>
          ) : (
            <span className="day-dot-row" key={index}>
              <span
                className={`day-dot ${day ? "active" : ""}`}
                onClick={() => onClick(index)}>
                {DAYS[index]}
              </span>
              <span style={day ? { color: "#fff" } : null}>
                {DAYS_FULL[index]}
              </span>
            </span>
          )
      )}
    </div>
  );
};

DayPicker.propTypes = {
  days: PropTypes.arrayOf(PropTypes.bool),
  onClick: PropTypes.func.isRequired,
  vertical: PropTypes.number
};

export default DayPicker;
