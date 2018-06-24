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
  const dayNames = "Sonntag Montag Dienstag Mittwoch Donnerstag Freitag Samstag".split(
    " "
  );
  return dayNames[date.getDay()];
};

export default class Feed extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.state = {
      time: this.getTime(date),
      date: this.getDateString(date)
    };
  }

  getTime = date =>
    date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  getDateString = date =>
    `${getDayName(date)}, ${date.getDate()}.${getMonthName(date)}`;

  tick = () => {
    this.setState({
      time: this.getTime(new Date())
    });
  };

  render() {
    const { time, date } = this.state;
    return (
      <div className="feed-main">
        <div className="time-container">
          <div className="time">
            <span>{time}</span>
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
