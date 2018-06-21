import React, { Component } from "react";
import "./List.css";

export default class List extends Component {
  render() {
    const { children } = this.props;
    return <ul className="list">{children}</ul>;
  }
}
