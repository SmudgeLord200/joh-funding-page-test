import React, { useState } from "react";
import filterIcon from "../icons/filter.svg";
import arrowUp from "../icons/arrow-up.svg";
import arrowDown from "../icons/arrow-down.svg";
import DropDownFilters from "./DropDownFilters";
import Chips from "./Chips";

const FILTER_CATEGORIES = [
  {
    title: "Region",
    options: [
      {
        name: "UK Equities",
        value: "UK",
      },
      {
        name: "Global Equities",
        value: "Global",
      },
      {
        name: "European Equities",
        value: "Europe",
      },
      {
        name: "Emerging Markets Equities",
        value: "Emerging Markets",
      },
      {
        name: "Asian Equities",
        value: "Asia",
      },
    ],
  },
  {
    title: "Domicile",
    options: [
      {
        name: "Dublin (Irish ICAV)",
        value: "Dublin",
      },
      {
        name: "London (UK OEIC)",
        value: "London",
      },
    ],
  },
  {
    title: "Manager",
    options: [
      { name: "Manager A", value: "Manager A" },
      { name: "Manager B", value: "Manager B" },
      { name: "Manager C", value: "Manager C" },
    ],
  },
];

const FilterOptions = ({
  onSelectFilter,
  selectedFilters,
  onRemoveFilter,
  clearFilters,
}) => {
  const [openFilter, setOpenFilter] = useState({});
  const [sortOrder, setSortOrder] = useState("asc");

  const onToggleFilter = (index) => {
    setOpenFilter((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const onToggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <>
      <div className="filter-outer-wrapper">
        <div className="filter-buttons-wrapper">
          <button className="filter-button" disabled>
            <img src={filterIcon} alt="Filters" />
          </button>
        </div>

        <div className="filter-inner-wrapper">
          {FILTER_CATEGORIES.map((filter, index) => (
            <DropDownFilters
              key={index}
              title={filter.title}
              options={filter.options}
              onSelect={onSelectFilter}
              open={!!openFilter[index]}
              toggleFilter={() => onToggleFilter(index)}
            />
          ))}
        </div>
      </div>
      {Object.values(selectedFilters).some((values) => values.length > 0) && (
        <Chips
          selectedFilters={selectedFilters}
          onRemoveFilter={onRemoveFilter}
          clearFilters={clearFilters}
        />
      )}
    </>
  );
};

export default FilterOptions;
