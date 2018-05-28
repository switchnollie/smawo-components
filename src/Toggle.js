import React, { Component } from "react";
import "./Toggle.css";
import PropTypes from "prop-types";

export default class Toggle extends Component {
  render() {
    const { label, onChange, checked, ...other } = this.props;
    return (
      <label className="toggle-label" {...other}>
        <span className="toggle-container">
          <span
            className={`animated-toggle-knob-wrapper ${checked ? "on" : ""}`}
            onClick={e => onChange(e)}>
            <span className="input-wrapper">
              <span className="toggle-knob" />
              <input type="checkbox" value={checked} />
            </span>
            <span className="pulsate-circle" />
          </span>
          <span className="toggle-track" />
        </span>
        {label && <span className="toggle-label-text">{label}</span>}
      </label>
    );
  }
}

Toggle.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string,
  style: PropTypes.object
};
