import React, { useState } from "react";

const Pagination = ({ currentPage, totalPages, onHandlePageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="pagination">
      <button
        onClick={() => onHandlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {pageNumbers.map((p, index) => (
        <button key={index} onClick={() => onHandlePageChange(p)}>
          {p}
        </button>
      ))}
      <button
        onClick={() => onHandlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
