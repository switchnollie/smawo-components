import React, { Component } from "react";
import "./List.css";

export default class List extends Component {
  render() {
    const { children, className } = this.props;
    return <ul className={`list ${className ? className : ""}`}>{children}</ul>;
  }
}
