/* eslint-disable react/prop-types */

import classNames from "classnames";

function Pagination({ totalPages, currentPage, onPageChange }) {
  const commonClasses = "text-teal-500 line-height-45";
  let liTag = [];


  const renderPageNumber = (pageNumber) => {
    const isActive = currentPage === pageNumber;
    const numberClasses = classNames(
      "numb text-lg font-semibold cursor-pointer select-none transition duration-300 rounded-full", // Added "rounded-full" for the page numbers
      commonClasses,
      { "bg-teal-500 text-white": isActive }
    );

    return (
      <li
        className={numberClasses}
        key={pageNumber}
        onClick={() => onPageChange(pageNumber)}
      >
        <span>{pageNumber}</span>
      </li>
    );
  };

  if (totalPages > 1) {
    if (currentPage > 1) {
      liTag.push(
        <li
          className={`prev numb text-lg font-semibold cursor-pointer select-none transition duration-300 ${commonClasses} ml-2`}
          key="prev"
          onClick={() => onPageChange(currentPage - 1)}
        >
          <span>
            <i className="fas fa-angle-left"></i> Prev
          </span>
        </li>
      );
    }

    if (currentPage > 2) {
      liTag.push(renderPageNumber(1));

      if (currentPage > 3) {
        liTag.push(
          <li
            className={`dots text-lg font-semibold ${commonClasses}`}
            key="dots"
          >
            <span>...</span>
          </li>
        );
      }
    }

    let beforePage = Math.max(currentPage - 1, 1);
    let afterPage = Math.min(currentPage + 1, totalPages);

    for (let plength = beforePage; plength <= afterPage; plength++) {
      liTag.push(renderPageNumber(plength));
    }

    if (currentPage < totalPages - 1) {
      if (currentPage < totalPages - 2) {
        liTag.push(
          <li
            className={`dots text-lg font-semibold ${commonClasses}`}
            key="dots2"
          >
            <span>...</span>
          </li>
        );
      }
      liTag.push(renderPageNumber(totalPages));
    }

    if (currentPage < totalPages) {
      liTag.push(
        <li
          className={`next numb text-lg font-semibold cursor-pointer select-none transition duration-300 ${commonClasses} mr-2`}
          key="next"
          onClick={() => onPageChange(currentPage + 1)}
        >
          <span>
            Next <i className="fas fa-angle-right"></i>
          </span>
        </li>
      );
    }
  }

  const paginationStyles = {
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)", 
  };

  return (
    <ul className="w-full flex justify-center bg-white space-x-4 p-3 rounded-full" style={paginationStyles}>
      {liTag}
    </ul>
  );
}

export default Pagination;
