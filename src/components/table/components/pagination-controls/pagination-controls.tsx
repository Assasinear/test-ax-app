import {FC, ChangeEvent, useMemo, memo, ReactNode, useCallback, useRef} from 'react';
import {
    PaginationContainer,
    PaginationButton,
    SelectPageSize,
    AllGamesCounter,
    PageSizeContainer, PaginationDotsButton
} from './pagination-controls.styles';
import paginationIconLeft from '../../../../assets/paginationLeft.svg';
import paginationIconRight from '../../../../assets/paginationRight.svg';
import pageSizeInsideIcon from '../../../../assets/sorterDown.svg';

interface PaginationControlsProps {
    totalPages: number;
    totalGames: number;
    currentPage: number;
    handlePageChange: (page: number) => void;
    pageSize: number;
    handlePageSizeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    pageSizeOptions: ReactNode[];
}

export const PaginationControls: FC<PaginationControlsProps> = memo(({
                                                                         totalPages,
                                                                         totalGames,
                                                                         currentPage,
                                                                         handlePageChange,
                                                                         pageSize,
                                                                         handlePageSizeChange,
                                                                         pageSizeOptions,
                                                                     }) => {
    const selectRef = useRef<HTMLSelectElement>(null);
    const visiblePages = useMemo(() => {
        const totalVisiblePages = 5;
        const pages: (number | string)[] = [];

        if (totalPages <= totalVisiblePages + 2) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            const halfVisiblePages = Math.floor(totalVisiblePages / 2);

            const startPage = Math.max(1, currentPage - halfVisiblePages);
            const endPage = Math.min(totalPages, currentPage + halfVisiblePages);

            if (startPage > 2) pages.push(1, '...');
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
            if (endPage < totalPages - 1) pages.push('...', totalPages);
        }

        return pages;
    }, [totalPages, currentPage]);

    const handleThreeDotsClick = useCallback((dotsPosition: 'left' | 'right') => {
        if (dotsPosition === 'left') {
            const middlePage = Math.floor(currentPage / 2);
            handlePageChange(middlePage);
        } else if (dotsPosition === 'right') {
            const middlePage = Math.floor((totalPages + currentPage) / 2);
            handlePageChange(middlePage);
        }
    }, [visiblePages, handlePageChange, totalPages]);

    const handleIconClick = useCallback(() => {
        if (selectRef.current) {
            selectRef.current.focus();
            const event = new MouseEvent('mouseDown', { bubbles: true, cancelable: true });
            selectRef.current.dispatchEvent(event);
        }
    }, [selectRef]);

    return (
        <PaginationContainer>
            <AllGamesCounter>
                Всего {totalGames}
            </AllGamesCounter>
            <PaginationButton
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <img src={paginationIconLeft} alt='paginationLeftIcon'/>
            </PaginationButton>
            {visiblePages.map((page, index) => {
                if (typeof page === 'number') {
                    return (
                        <PaginationButton key={index} onClick={() => handlePageChange(page)} disabled={currentPage === page}>
                            {page}
                        </PaginationButton>
                    );
                } else if (page === '...') {
                    const dotsPosition = index === 1 ? 'left' : 'right';
                    return (
                        <PaginationDotsButton key={index} onClick={() => handleThreeDotsClick(dotsPosition)}>
                            ...
                        </PaginationDotsButton>
                    );
                }
            })}

            <PaginationButton
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <img src={paginationIconRight} alt='paginationRightIcon'/>
            </PaginationButton>
            <PageSizeContainer>
                выводить по
                <div style={{backgroundColor: '#181A20', border: '1px solid'}}>
                <SelectPageSize
                    onChange={handlePageSizeChange}
                    value={pageSize}
                    ref={selectRef}
                >
                    {pageSizeOptions}
                </SelectPageSize>
                <img src={pageSizeInsideIcon} onClick={handleIconClick} alt='pageSizeDownIcon'/>
                </div>
            </PageSizeContainer>
        </PaginationContainer>
    );
});
