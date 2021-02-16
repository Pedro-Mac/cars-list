import React from "react";
import ReactPaginate from "react-paginate";
import "./style.css";

interface paginationProps {
  pageCount: number;
  handlePageClick: (event: any) => void;
}

const Pagination: React.FC<paginationProps> = ({
  pageCount,
  handlePageClick
}) => {
  return (
    <>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName="pagination--container"
        pageClassName="pagination--item page--item"
        previousClassName="pagination--item previous--item"
        nextClassName="pagination--item next--item"
        breakClassName="pagination--item break--item"
        activeClassName="active--item"
        activeLinkClassName="outline--disabled"
        pageLinkClassName="outline--disabled"
        previousLinkClassName="outline--disabled"
        nextLinkClassName="outline--disabled"
        breakLinkClassName="outline--disabled"
      />
    </>
  );
};

export default Pagination;
