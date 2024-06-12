import { FC, ChangeEvent, useMemo, memo, ReactNode } from 'react';
import { PaginationContainer, PaginationButton, SelectPageSize } from './pagination-controls.styles';

interface PaginationControlsProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
  pageSize: number;
  handlePageSizeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  pageSizeOptions: ReactNode[];
}

export const PaginationControls: FC<PaginationControlsProps> = memo(({
                                                                       totalPages,
                                                                       currentPage,
                                                                       handlePageChange,
                                                                       pageSize,
                                                                       handlePageSizeChange,
                                                                       pageSizeOptions,
                                                                     }) => {
  const visiblePages = useMemo(() => {
    const totalVisiblePages = 5;
    const halfVisiblePages = Math.floor(totalVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisiblePages);
    let endPage = Math.min(totalPages, startPage + totalVisiblePages - 1);

    if (endPage - startPage + 1 < totalVisiblePages) {
      startPage = Math.max(1, endPage - totalVisiblePages + 1);
    }

    return Array.from({length: endPage - startPage + 1}, (_, index) => startPage + index);
  }, [currentPage, totalPages]);

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      >
        В начало
      </PaginationButton>
      {visiblePages.map((page) => (
        <PaginationButton
          key={page}
          onClick={() => handlePageChange(page)}
          disabled={currentPage === page}
        >
          {page}
        </PaginationButton>
      ))}
      <PaginationButton
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        В конец
      </PaginationButton>
      <span>
        выводить по
        <SelectPageSize
          onChange={handlePageSizeChange}
          value={pageSize}
        >
          {pageSizeOptions}
        </SelectPageSize>
      </span>
    </PaginationContainer>
  );
});
