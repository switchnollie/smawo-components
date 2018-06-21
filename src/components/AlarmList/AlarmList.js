import React, { Component } from "react";
import "./Alarms.css";
export default class AlarmList extends Component {
  render() {
    const { children } = this.props;
    return <ul className="alarm-list">{children}</ul>;
  }
}
