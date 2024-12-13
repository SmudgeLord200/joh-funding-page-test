import React, { useState } from "react";
import Pagination from "./Pagination";
import ListView from "./ListView";
import GridView from "./GridView";

const ListGridView = ({ view, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = data.slice(startIndex, endIndex);

  const onHandlePageChange = (value) => {
    if (value >= 1 && value <= totalPages) {
      setCurrentPage(value);
    }
  };

  return (
    <div className="view-outer-wrapper">
      {view === "list" ? (
        <ListView slicedData={slicedData} />
      ) : (
        <GridView slicedData={slicedData} />
      )}

      {slicedData.length !== 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onHandlePageChange={onHandlePageChange}
        />
      )}
    </div>
  );
};

export default ListGridView;
