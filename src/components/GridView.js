import React from "react";
import globeIcon from "../icons/globe.svg";
import holdingsIcon from "../icons/bar-chart-2.svg";
import moneyIcon from "../icons/dollar-sign.svg";
import dateIcon from "../icons/calendar.svg";

const GridView = ({ slicedData }) => {
  return (
    <div className="grid-container">
      {slicedData.map((data, index) => (
        <div className="grid-item">
          <div className="grid-card" key={index}>
            <div className="card-header">
              <h4>{data["Fund Name/Benchmark"]}</h4>
              <h5>{data["Domicile"]}</h5>
            </div>
            <div className="card-preview">
              <div className="preview">
                <img src={globeIcon} alt="region" />
                Region: {data["Region"]}
              </div>
              <div className="preview">
                <img src={holdingsIcon} alt="holdings" />
                Holdings: {data["Holdings"]}
              </div>
              <div className="preview">
                <img src={moneyIcon} alt="fund size" />
                Fund Size: {data["Fund Size"]}
              </div>
              <div className="preview">
                <img src={dateIcon} alt="launch date" />
                Launch: {data["Launch Date"]}
              </div>
            </div>
            <button>View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridView;
