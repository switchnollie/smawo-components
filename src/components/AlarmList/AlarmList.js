import React, { Component } from "react";
import "./AlarmList.css";
export default class AlarmList extends Component {
  render() {
    const { children, collapsed } = this.props;
    return (
      <ul className={`alarm-list list ${collapsed ? "collapsed" : ""}`}>
        {children}
      </ul>
    );
  }
}
