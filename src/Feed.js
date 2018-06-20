import React, { Component } from "react";
import CloudyIcon from "./assets/cloudyIcon.svg";
import CakeIcon from "./assets/cakeIcon.svg";
import TodayIcon from "./assets/todayIcon.svg";
import "./Feed.css";

export default class Feed extends Component {
  render() {
    return (
      <div className="feed-main">
        <div className="time-container">
          <div className="time">
            <span>07:45</span>
            <span>Freitag, 13.Juli</span>
          </div>
        </div>
        <ul className="widgets">
          <li className="widget">
            <img className="widget-logo" src={CloudyIcon} />
            <span className="widget-text">
              <span>26°C, sonnig</span>
              <span>Schwäbisch Gmünd</span>
            </span>
          </li>
          <li className="widget">
            <img className="widget-logo" src={CakeIcon} />
            <span className="widget-text">
              <span>Semesterausstellung</span>
              <span>Ganztägig</span>
            </span>
          </li>
          <li className="widget">
            <img className="widget-logo" src={TodayIcon} />
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
