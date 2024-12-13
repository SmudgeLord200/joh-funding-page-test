import React from "react";

const CHips = ({ selectedFilters, onRemoveFilter, clearFilters }) => {
  return (
    <div className="selected-filters">
      <div className="chips-group">
        {Object.entries(selectedFilters).map(([filterKey, values]) =>
          values.map((value, index) => (
            <div key={`${filterKey}-${index}`} className="chip">
              {filterKey}: {value}
              <button
                className="remove-chip"
                onClick={() => onRemoveFilter(filterKey, value)}
              >
                x
              </button>
            </div>
          ))
        )}
      </div>
      <button className="clear-filters" onClick={clearFilters}>
        Clear All Filters
      </button>
    </div>
  );
};

export default CHips;
