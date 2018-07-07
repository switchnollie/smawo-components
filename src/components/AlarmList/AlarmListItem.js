import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Toggle from "../Toggle/Toggle";
import DayPicker from "../DayPicker/DayPicker";
import "./AlarmList.css";
import { Transition } from "react-spring";

class AlarmListItem extends Component {
  state = { rightPartHidden: !this.props.collapsed };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.collapsed && this.props.collapsed) {
      setTimeout(() => this.setState({ rightPartHidden: true }), 150);
    } else if (nextProps.collapsed && !this.props.collapsed) {
      this.setState({ rightPartHidden: false });
    }
  }

  render() {
    const {
      onClick,
      active,
      name,
      isOn,
      days,
      time,
      id,
      toggleAlarm,
      toggleDay
    } = this.props;
    const { rightPartHidden } = this.state;
    return (
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
        <Transition
          enter={{ opacity: 1 }}
          from={{ opacity: 0 }}
          leave={{ display: "none" }}
          config={{ tension: 200, friction: 20 }}>
          {rightPartHidden &&
            (styles => (
              <Fragment>
                <span className="alarm-time" style={{ ...styles }}>
                  {time}
                </span>
                <DayPicker
                  style={{ ...styles }}
                  days={days}
                  onClick={index => toggleDay(index)}
                />
              </Fragment>
            ))}
        </Transition>
      </li>
    );
  }
}

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
