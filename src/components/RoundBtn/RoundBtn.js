import React, { Component } from "react";
import PropTypes from "prop-types";
import "./RoundBtn.css";

export default class RoundBtn extends Component {
  render() {
    const { type, ...other } = this.props;
    let icon = null;
    let btnClass = null;
    switch (type) {
      case "done":
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        );
        btnClass = "blue";
        break;
      case "cancel":
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        );
        btnClass = "red";
        break;
    }

    return (
      <button type="button" className={`round-btn ${btnClass}`} {...other}>
        <span className="round-btn-icon-wrapper">{icon}</span>
      </button>
    );
  }
}

RoundBtn.propTypes = {
  type: PropTypes.string.isRequired
};
