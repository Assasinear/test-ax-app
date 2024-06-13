import { FC, ChangeEvent, memo, useState } from 'react';
import {
    TableCellNameGenreDeveloperPublisher,
    TableCellPlatform,
    TableCellReleaseDate,
    TableHeader,
    Separator,
    TableCellContent,
    FilterSelect,
    SortButton,
    CustomSelectContainer,
    CustomSelectTrigger,
    CustomSelectOptions,
    CustomSelectOption,
    SvgIcon
} from './table-header-component.styles';
import sorterNone from '../../../../assets/sorterNone.svg';
import sorterUp from '../../../../assets/sorterUp.svg';
import sorterDown from '../../../../assets/sorterDown.svg';

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

const genreIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.08983 15.884C8.08983 16.0915 8.25624 16.259 8.46249 16.259H11.5375C11.7437 16.259 11.9101 16.0915 11.9101 15.884V13.5872H8.08983V15.884ZM14.3137 7.86841H5.68631C5.3992 7.86841 5.21991 8.1813 5.36405 8.43091L7.95741 12.8372H12.0449L14.6383 8.43091C14.7801 8.1813 14.6008 7.86841 14.3137 7.86841Z" fill="white"/>
    </svg>
);

const platformIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.08983 15.884C8.08983 16.0915 8.25624 16.259 8.46249 16.259H11.5375C11.7437 16.259 11.9101 16.0915 11.9101 15.884V13.5872H8.08983V15.884ZM14.3137 7.86841H5.68631C5.3992 7.86841 5.21991 8.1813 5.36405 8.43091L7.95741 12.8372H12.0449L14.6383 8.43091C14.7801 8.1813 14.6008 7.86841 14.3137 7.86841Z" fill="white"/>
    </svg>
);

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
    const [isGenreOpen, setIsGenreOpen] = useState(false);
    const [isPlatformOpen, setIsPlatformOpen] = useState(false);

    const currentGenreText = Object.keys(GENRES).find(key => GENRES[key] === genre) || 'Все';
    const currentPlatformText = Object.keys(PLATFORMS).find(key => PLATFORMS[key] === platform) || 'Все';

    return (
        <TableHeader>
            <TableCellNameGenreDeveloperPublisher>
                <TableCellContent>Наименование</TableCellContent>
                <Separator />
            </TableCellNameGenreDeveloperPublisher>

            <TableCellNameGenreDeveloperPublisher>
                <TableCellContent>Жанр</TableCellContent>
                <CustomSelectContainer onClick={() => setIsGenreOpen(!isGenreOpen)}>
                    <CustomSelectTrigger>
                        <SvgIcon>{genreIcon}</SvgIcon>
                    </CustomSelectTrigger>
                    <CustomSelectOptions className={isGenreOpen ? 'open' : ''}>
                        <CustomSelectOption onClick={() => handleGenreChange({ target: { value: '' }} as ChangeEvent<HTMLSelectElement>)}>
                            Все
                        </CustomSelectOption>
                        {Object.keys(GENRES).map(g => (
                            <CustomSelectOption
                                key={g}
                                onClick={() => handleGenreChange({ target: { value: g }} as ChangeEvent<HTMLSelectElement>)}
                            >
                                {g}
                            </CustomSelectOption>
                        ))}
                    </CustomSelectOptions>
                </CustomSelectContainer>
                <FilterSelect onChange={handleGenreChange} value={Object.keys(GENRES).find((key) => GENRES[key] === genre) || ''}>
                    <option value="">Все</option>
                    {Object.keys(GENRES).map((g) => (
                        <option key={g} value={g}>{g}</option>
                    ))}
                </FilterSelect>
                <Separator />
            </TableCellNameGenreDeveloperPublisher>

            <TableCellPlatform>
                <TableCellContent>Платформа</TableCellContent>
                <CustomSelectContainer onClick={() => setIsPlatformOpen(!isPlatformOpen)}>
                    <CustomSelectTrigger>
                        <SvgIcon>{platformIcon}</SvgIcon>
                    </CustomSelectTrigger>
                    <CustomSelectOptions className={isPlatformOpen ? 'open' : ''}>
                        <CustomSelectOption onClick={() => handlePlatformChange({ target: { value: '' }} as ChangeEvent<HTMLSelectElement>)}>
                            Все
                        </CustomSelectOption>
                        {Object.keys(PLATFORMS).map(p => (
                            <CustomSelectOption
                                key={p}
                                onClick={() => handlePlatformChange({ target: { value: p }} as ChangeEvent<HTMLSelectElement>)}
                            >
                                {p}
                            </CustomSelectOption>
                        ))}
                    </CustomSelectOptions>
                </CustomSelectContainer>
                <FilterSelect onChange={handlePlatformChange} value={Object.keys(PLATFORMS).find((key) => PLATFORMS[key] === platform) || ''}>
                    <option value="">Все</option>
                    {Object.keys(PLATFORMS).map((p) => (
                        <option key={p} value={p}>{p}</option>
                    ))}
                </FilterSelect>
                <Separator />
            </TableCellPlatform>

            <TableCellNameGenreDeveloperPublisher>
                <TableCellContent>Издатель</TableCellContent>
                <Separator />
            </TableCellNameGenreDeveloperPublisher>

            <TableCellNameGenreDeveloperPublisher>
                <TableCellContent>Разработчик</TableCellContent>
                <Separator />
            </TableCellNameGenreDeveloperPublisher>

            <TableCellReleaseDate>
                <TableCellContent>Дата релиза</TableCellContent>
                <SortButton onClick={handleSortChange}>
                    {sort === SORT_OPTIONS.ReleaseDateUp ? <img src={sorterUp} alt='sorterUp'/>
                        : sort === SORT_OPTIONS.ReleaseDateDown ? <img src={sorterDown} alt='sorterDown'/>
                            : <img src={sorterNone} alt='sorterNone'/>}
                </SortButton>
            </TableCellReleaseDate>
        </TableHeader>
    );
});