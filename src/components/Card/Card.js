import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ name, nextAlarm }) => {
  return (
    <div className="card">
      <div className="card-headline">
        <span>{name}</span>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          enable-background="new 0 0 24 24">
          <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z" />
        </svg>
      </div>
      <div className="card-body">
        <span>Nächster Alarm</span>
        <span>{nextAlarm.time}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  nextAlarm: PropTypes.string.isRequired
};

export default Card;
