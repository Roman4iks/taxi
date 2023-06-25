import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

interface PaginationProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pageCount: number;
}

const Pagination: React.FC<PaginationProps> = ({ setCurrentPage, pageCount }) => {
  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected + 1);
  };

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageChange}
      previousLabel="<"
      pageRangeDisplayed={10}
      pageCount={pageCount}
    />
  );
};

export default Pagination;
