import React, { Component } from "react";
import CloudyIcon from "../assets/cloudyIcon.svg";
import CakeIcon from "../assets/cakeIcon.svg";
import TodayIcon from "../assets/todayIcon.svg";
import "./Feed.css";

const getMonthName = date => {
  const monthNames = "Januar Februar März April Mai Juni Juli August September Oktober November Dezember".split(
    " "
  );
  return monthNames[date.getMonth()];
};

const getDayName = date => {
  const dayNames = "Montag Dienstag Mittwoch Donnerstag Freitag Samstag Sonntag".split(
    " "
  );
  return dayNames[date.getDay() - 1];
};

let dateObj = new Date();

let time = dateObj.toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit"
});

let date = `${getDayName(dateObj)}, ${dateObj.getDate()}.${getMonthName(
  dateObj
)}`;

export default class Feed extends Component {
  render() {
    return (
      <div className="feed-main">
        <div className="time-container">
          <div className="time">
            <span>{time.substring()}</span>
            <span>{date}</span>
          </div>
        </div>
        <ul className="widgets">
          <li className="widget">
            <img alt="cloud-icon" className="widget-logo" src={CloudyIcon} />
            <span className="widget-text">
              <span>26°C, sonnig</span>
              <span>Schwäbisch Gmünd</span>
            </span>
          </li>
          <li className="widget">
            <img alt="cake-icon" className="widget-logo" src={CakeIcon} />
            <span className="widget-text">
              <span>Semesterausstellung</span>
              <span>Ganztägig</span>
            </span>
          </li>
          <li className="widget">
            <img alt="today-icon" className="widget-logo" src={TodayIcon} />
            <span className="widget-text">
              <span>Jane Doe</span>
              <span>23. Geburtstag</span>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
