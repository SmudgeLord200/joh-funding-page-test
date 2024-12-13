import React, { useEffect, useRef, useState } from "react";
import arrowDown from "../icons/arrow-down.svg";
import arrowUp from "../icons/arrow-up.svg";

const DropDownFilters = ({ title, options, onSelect, open, toggleFilter }) => {
  return (
    <div className="select-wrapper">
      <div className="select-btn" onClick={toggleFilter}>
        <span className="btn-text">{title}</span>
        <span className="arrow-down">
          <img src={open ? arrowUp : arrowDown} alt="arrow icon" />
        </span>
      </div>

      {open && (
        <ul className="dropdown-list">
          {options.map((o, index) => (
            <li
              key={index}
              className="item"
              onClick={() => onSelect(title, o.value)}
            >
              {o.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownFilters;
