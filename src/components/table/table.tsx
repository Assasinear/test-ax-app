import { ChangeEvent, FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { PaginationControls } from './components/pagination-controls';
import { TableHeaderComponent } from './components/table-header-component';
import {
  TableContainer,
  TableRow,
  TableDataContainer,
} from './table.styles';
import { TableCell } from './components/table-cell';
import {CORS_PROXY, GENRES, pageSizes, PLATFORMS, SORT_OPTIONS} from "./table.constants";
import {Game} from "./table.types";
import dayjs from "dayjs";

export const Table: FC = memo(() => {
  const [games, setGames] = useState<Game[]>([]);
  const [genre, setGenre] = useState<string>('');
  const [platform, setPlatform] = useState<string>('');
  const [sort, setSort] = useState<SORT_OPTIONS | ''>('');
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchGames = useCallback(async () => {
    let url = `${CORS_PROXY}https://www.freetogame.com/api/games?`;

    if (genre) {
      url += `category=${genre}&`;
    }

    if (platform) {
      url += `platform=${platform}&`;
    }

    if (sort) {
      const sortBy = sort === SORT_OPTIONS.ReleaseDateUp ? 'release-date' : '-release-date';
      url += `sort-by=${sortBy}&`;
    }

    try {
      const response = await axios.get<Game[]>(url);
      setGames(response.data);
    } catch (error) {
      console.error('Ошибка запроса');
    }
  }, [genre, platform, sort]);

  useEffect(() => {
    setLoading(true);
    fetchGames().then(() => setLoading(false));
  }, [fetchGames]);

  const totalPages = useMemo(() => Math.ceil(games.length / pageSize), [games.length, pageSize]);
  const paginatedData = useMemo(() => games.slice((currentPage - 1) * pageSize, currentPage * pageSize), [games, currentPage, pageSize]);

  const handleGenreChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setGenre(GENRES[e.target.value as keyof typeof GENRES]);
    setCurrentPage(1);
  }, []);

  const handlePlatformChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setPlatform(PLATFORMS[e.target.value as keyof typeof PLATFORMS]);
    setCurrentPage(1);
  }, []);

  const handleSortChange = useCallback(() => {
    setSort(prevSort => (prevSort === SORT_OPTIONS.ReleaseDateUp ? SORT_OPTIONS.ReleaseDateDown
        : prevSort === SORT_OPTIONS.ReleaseDateDown ? "" : SORT_OPTIONS.ReleaseDateUp));
  }, []);

  const handlePageSizeChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setPageSize(parseInt(e.target.value));
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const pageSizeOptions = useMemo(() => (
      pageSizes.map(size => <option key={size} value={size}>{size}</option>)
  ), []);

  return (
      <TableContainer>
        <TableHeaderComponent
            handleGenreChange={handleGenreChange}
            handlePlatformChange={handlePlatformChange}
            handleSortChange={handleSortChange}
            sort={sort}
            GENRES={GENRES}
            PLATFORMS={PLATFORMS}
        />
        <TableDataContainer>
          {paginatedData.map(game => (
              <TableRow key={game.id}>
                <TableCell type="name" content={game.title}/>
                <TableCell type="genre" content={game.genre}/>
                <TableCell type="platform" content={game.platform}/>
                <TableCell type="publisher" content={game.publisher}/>
                <TableCell type="developer" content={game.developer}/>
                <TableCell type="release_date" content={dayjs(game.release_date).format('DD.MM.YYYY')}/>
              </TableRow>
          ))}
        </TableDataContainer>
        <PaginationControls
            totalGames={games.length}
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            pageSize={pageSize}
            handlePageSizeChange={handlePageSizeChange}
            pageSizeOptions={pageSizeOptions}
        />
      </TableContainer>
  );
});
