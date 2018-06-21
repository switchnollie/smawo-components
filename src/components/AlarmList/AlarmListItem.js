import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Alarms.css";

export default class AlarmListItem extends Component {
  render() {
    return <div />;
  }
}

AlarmListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOn: PropTypes.bool.isRequired,
  days: PropTypes.array.isRequired,
  time: PropTypes.string.isRequired
};
