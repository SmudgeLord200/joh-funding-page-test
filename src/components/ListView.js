import React from "react";

const ListView = ({ slicedData }) => {
  return (
    <table className="list-view">
      <thead>
        <tr>
          <th>Fund Name/Benchmark</th>
          <th>Domicile</th>
          <th>Region</th>
          <th>Holdings</th>
          <th>Fund Size</th>
          <th>Launch Date</th>
        </tr>
      </thead>
      <tbody>
        {slicedData.map((data, index) => (
          <tr key={index}>
            <td>{data["Fund Name/Benchmark"]}</td>
            <td>{data["Domicile"]}</td>
            <td>{data["Region"]}</td>
            <td>{data["Holdings"]}</td>
            <td>{data["Fund Size"]}</td>
            <td>{data["Launch Date"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListView;
