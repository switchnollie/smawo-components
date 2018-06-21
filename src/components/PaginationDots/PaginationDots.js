import React, { Component } from "react";
import PropTypes from "prop-types";
import "./PaginationDots.css";

export default class PaginationDots extends Component {
  render() {
    const { steps, currentStep, onClick, ...other } = this.props;
    return (
      <div className="pagination-dots" {...other}>
        {Array.apply(null, Array(steps)).map((step, index) => (
          <span
            key={index}
            value={index}
            onClick={() => onClick(index + 1)}
            className={`pagination-dot ${
              index + 1 === currentStep ? "active" : ""
            }`}
          />
        ))}
      </div>
    );
  }
}

PaginationDots.propTypes = {
  steps: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};
