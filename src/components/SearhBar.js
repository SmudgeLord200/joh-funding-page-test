import React, { useState } from "react";
import searchIcon from "../icons/search.svg";
import gridIcon from "../icons/grid.svg";
import listIcon from "../icons/list.svg";

const SearhBar = ({ input, onInputChange, onSearch, onToggleView }) => {
  return (
    <div className="search-bar-outer-wrapper">
      <div className="search-wrapper">
        <input
          type="text"
          id="search-bar"
          name="search-bar"
          placeholder="Search by fund name, ISIN, benchmark, manager"
          required
          value={input}
          onChange={onInputChange}
        />
        <button className="search-icon" onClick={() => onSearch(input)}>
          <img src={searchIcon} alt="search icon" />
        </button>
      </div>
      <div className="view-option-wrapper">
        <button
          className="grid-view-button"
          onClick={() => onToggleView("grid")}
        >
          <img src={gridIcon} alt="Grid Icon" />
        </button>
        <button
          className="list-view-button"
          onClick={() => onToggleView("list")}
        >
          <img src={listIcon} alt="List Icon" />
        </button>
      </div>
    </div>
  );
};

export default SearhBar;
