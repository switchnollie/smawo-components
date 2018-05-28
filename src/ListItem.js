import React from "react";
import PropTypes from "prop-types";
import "./List.css";

const ListItem = ({ value, onClick, active }) => (
  <li
    className={`list-item ${active ? "active" : ""}`}
    onClick={() => onClick(value)}>
    <span>{value}</span>{" "}
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
  </li>
);

ListItem.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool
};

export default ListItem;
