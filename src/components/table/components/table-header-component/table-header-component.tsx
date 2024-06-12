import { FC, ChangeEvent, memo } from 'react';
import {
  TableCellNameGenreDeveloperPublisher,
  TableCellPlatform,
  TableCellReleaseDate,
  TableHeader,
  Separator,
  TableCellContent,
  FilterSelect,
  SortButton,
} from './table-header-component.styles';

enum SORT_OPTIONS {
  ReleaseDateUp = 'release-date-up',
  ReleaseDateDown = 'release-date-down'
}

interface TableHeaderComponentProps {
  genre: string;
  platform: string;
  handleGenreChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handlePlatformChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleSortChange: () => void;
  sort: SORT_OPTIONS | '';
  GENRES: { [key: string]: string };
  PLATFORMS: { [key: string]: string };
}

export const TableHeaderComponent: FC<TableHeaderComponentProps> = memo(({
                                                                           genre,
                                                                           platform,
                                                                           handleGenreChange,
                                                                           handlePlatformChange,
                                                                           handleSortChange,
                                                                           sort,
                                                                           GENRES,
                                                                           PLATFORMS,
                                                                         }) => {
  return (
    <TableHeader>
      <TableCellNameGenreDeveloperPublisher>
        <TableCellContent> Наименование </TableCellContent>
        <Separator/>
      </TableCellNameGenreDeveloperPublisher>
      <TableCellNameGenreDeveloperPublisher>
        <TableCellContent> Жанр </TableCellContent>
        <FilterSelect
          onChange={handleGenreChange}
          value={Object.keys(GENRES).find((key) => GENRES[key as keyof typeof GENRES] === genre) || ''}
        >
          <option value="">Все</option>
          {Object.keys(GENRES).map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </FilterSelect>
        <Separator/>
      </TableCellNameGenreDeveloperPublisher>
      <TableCellPlatform>
        <TableCellContent> Платформа </TableCellContent>
        <FilterSelect
          onChange={handlePlatformChange}
          value={Object.keys(PLATFORMS).find((key) => PLATFORMS[key as keyof typeof PLATFORMS] === platform) || ''}
        >
          <option value="">Все</option>
          {Object.keys(PLATFORMS).map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </FilterSelect>
        <Separator/>
      </TableCellPlatform>
      <TableCellNameGenreDeveloperPublisher>
        <TableCellContent> Издатель </TableCellContent>
        <Separator/>
      </TableCellNameGenreDeveloperPublisher>
      <TableCellNameGenreDeveloperPublisher>
        <TableCellContent> Разработчик </TableCellContent>
        <Separator/>
      </TableCellNameGenreDeveloperPublisher>
      <TableCellReleaseDate>
        <TableCellContent> Дата релиза </TableCellContent>
        <SortButton onClick={handleSortChange}>{sort === SORT_OPTIONS.ReleaseDateUp ? '🔽' : '🔼'}</SortButton>
      </TableCellReleaseDate>
    </TableHeader>
  );
});

