import React from "react";
import { Link } from "react-router-dom";
// import "./sty.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(totalPages, currentPage + 1);
      i++
    ) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div
      className="pagination-wrapper"
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="pagination"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {/* Previous Button */}
        {currentPage > 1 && (
          <Link
            href="#"
            onClick={() => onPageChange(currentPage - 1)}
            style={{
              padding: "4px 12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: "#f4f4f4",
              color: "#333",
              cursor: "pointer",
              textDecoration: "none",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#e0e0e0")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#f4f4f4")}
          >
            Prev
          </Link>
        )}

        {/* Page Numbers */}
        {getPageNumbers().map((number) => (
          <ul
            key={number}
            style={{
              listStyleType: "none",
              padding: "0",
              margin: "0",
            }}
          >
            <li>
              <Link
                href="#"
                onClick={() => onPageChange(number)}
                style={{
                  padding: "4px 12px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  textDecoration: "none",
                  backgroundColor: number === currentPage ? "#f99a62" : "#fff",
                  color: number === currentPage ? "#fff" : "#333",
                  cursor: "pointer",
                  fontWeight: number === currentPage ? "bold" : "normal",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  if (number !== currentPage) {
                    e.target.style.backgroundColor = "#e0e0e0";
                  }
                }}
                onMouseLeave={(e) => {
                  if (number !== currentPage) {
                    e.target.style.backgroundColor = "#fff";
                  }
                }}
              >
                {number}
              </Link>
            </li>
          </ul>
        ))}

        {/* Next Button */}
        {currentPage < totalPages && (
          <Link
            href="#"
            onClick={() => onPageChange(currentPage + 1)}
            style={{
              padding: "4px 12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: "#f4f4f4",
              color: "#333",
              cursor: "pointer",
              textDecoration: "none",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#e0e0e0")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#f4f4f4")}
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
