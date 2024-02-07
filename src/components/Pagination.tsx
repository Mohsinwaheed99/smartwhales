import React from 'react';
import { ArrowForwardIosRounded as ArrowForwardIosRoundedIcon } from '@mui/icons-material';
import { ArrowBackIosNewRounded as ArrowBackIosNewRoundedIcon } from '@mui/icons-material';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pageNumbers: number[] = Array.from({ length: totalPages }, (_, i) => i + 1);
  const maxVisiblePages: number = 3;
  let displayedPages: (number | string)[] = [];

  if (totalPages <= maxVisiblePages) {
    displayedPages = pageNumbers;
  } else {
    const middleIndex: number = Math.floor(maxVisiblePages / 2);
    const minDisplayIndex: number = Math.max(currentPage - middleIndex, 0);
    const maxDisplayIndex: number = Math.min(minDisplayIndex + maxVisiblePages - 1, totalPages - 1);

    if (minDisplayIndex > 0) {
      displayedPages.push(1);
      if (minDisplayIndex > 1) {
        displayedPages.push('...');
      }
    }

    for (let i: number = minDisplayIndex; i <= maxDisplayIndex; i++) {
      displayedPages.push(i + 1);
    }

    if (maxDisplayIndex < totalPages - 1) {
      if (maxDisplayIndex < totalPages - 3) {
        displayedPages.push('...');
      }
      displayedPages.push(totalPages);
    }
  }

  return (
    <ul className="item-center flex justify-end gap-3">
      <li>
        <ArrowBackIosNewRoundedIcon
          className={currentPage === 1 ? 'cursor-not-allowed text-[9px]' : 'cursor-pointer text-[9px]'}
          onClick={currentPage !== 1 ? () => onPageChange(currentPage - 1) : undefined}
        />
      </li>
      {displayedPages.length > 0
        ? displayedPages.map((pageNumber) => (
            <li key={pageNumber.toString()}>
              <button
                onClick={() => onPageChange(pageNumber as number)}
                className={pageNumber === currentPage ? 'text-[12px] text-[#808080]' : 'text-[12px] text-zinc-600'}
              >
                {pageNumber}
              </button>
            </li>
          ))
        : 0}
      <li>
        <ArrowForwardIosRoundedIcon
          className={currentPage === totalPages ? 'cursor-not-allowed text-[9px]' : 'cursor-pointer text-[9px]'}
          onClick={currentPage !== totalPages ? () => onPageChange(currentPage + 1) : undefined}
        />
      </li>
    </ul>
  );
};

export default Pagination;
