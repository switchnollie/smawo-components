import React, { Component } from "react";
import CloudyIcon from "../assets/cloudyIcon.svg";
import CakeIcon from "../assets/cakeIcon.svg";
import TodayIcon from "../assets/todayIcon.svg";
import { Trail, animated } from "react-spring";
import Hammer from "react-hammerjs";
import { withRouter } from "react-router-dom";
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

class Feed extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.state = {
      time: this.getTime(date),
      date: this.getDateString(date),
      widgets: [
        {
          id: "weather",
          icon: CloudyIcon,
          primary: "26°C, sonnig",
          secondary: "Schwäbisch Gmünd"
        },
        {
          id: "firstEvent",
          icon: TodayIcon,
          primary: "Semesterausstellung",
          secondary: "Ganztägig"
        },
        {
          id: "birthday",
          icon: CakeIcon,
          primary: "Jane Doe",
          secondary: "23. Geburtstag"
        }
      ]
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

  handleScroll(direction) {
    const { scrollLeft, scrollRight, history } = this.props;
    if (direction === 2) {
      scrollRight();
      history.push("settings");
    } else if (direction === 4) {
      scrollLeft();
      history.push("alarms");
    }
  }

  render() {
    const { time, date, widgets } = this.state;
    return (
      <Hammer onSwipe={({ direction }) => this.handleScroll(direction)}>
        <div className="feed-main">
          <div className="time-container">
            <div className="time">
              <span>{time}</span>
              <span>{date}</span>
            </div>
          </div>
          <ul className="widgets">
            <Trail
              native
              from={{ opacity: 0, x: -50 }}
              to={{ opacity: 1, x: 0 }}
              keys={widgets.map(widget => widget.id)}>
              {widgets.map(widget => ({ x, opacity }) => (
                <animated.li
                  className="widget"
                  style={{
                    opacity,
                    transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
                  }}>
                  <img
                    alt="cloud-icon"
                    className="widget-logo"
                    src={widget.icon}
                  />
                  <span className="widget-text">
                    <span>{widget.primary}</span>
                    <span>{widget.secondary}</span>
                  </span>
                </animated.li>
              ))}
            </Trail>
          </ul>
        </div>
      </Hammer>
    );
  }
}

export default (Feed = withRouter(Feed));
