import React, { FC, ChangeEvent, memo, useState } from 'react';
import {
    TableHeaderRow,
    TableHeaderCell,
    TableHeaderContent,
    Separator,
    SortButton,
    CustomSelectContainer,
    CustomSelectTrigger,
    CustomSelectOptions,
    CustomSelectOption,
    SvgIcon,
    TableHeaderReleaseDateCell, TableHeaderPlatformCell
} from './table-header-component.styles';
import sorterNone from '../../../../assets/sorterNone.svg';
import sorterUp from '../../../../assets/sorterUp.svg';
import sorterDown from '../../../../assets/sorterDown.svg';
import filterIcon from '../../../../assets/filter.svg'

enum SORT_OPTIONS {
    ReleaseDateUp = 'release-date-up',
    ReleaseDateDown = 'release-date-down'
}

interface TableHeaderComponentProps {
    handleGenreChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    handlePlatformChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    handleSortChange: () => void;
    sort: SORT_OPTIONS | '';
    GENRES: { [key: string]: string };
    PLATFORMS: { [key: string]: string };
}

export const TableHeaderComponent: FC<TableHeaderComponentProps> = memo(({ handleGenreChange, handlePlatformChange, handleSortChange, sort, GENRES, PLATFORMS }) => {
    const [isGenreOpen, setIsGenreOpen] = useState(false);
    const [isPlatformOpen, setIsPlatformOpen] = useState(false);

    return (
        <TableHeaderRow>
            <TableHeaderCell>
                <TableHeaderContent>Наименование</TableHeaderContent>
                <Separator />
            </TableHeaderCell>

            <TableHeaderCell>
                <TableHeaderContent>Жанр</TableHeaderContent>
                <CustomSelectContainer onClick={() => setIsGenreOpen(!isGenreOpen)}>
                    <CustomSelectTrigger>
                        <SvgIcon>
                            <img src={filterIcon} alt='filterGenreIcon'/>
                        </SvgIcon>
                    </CustomSelectTrigger>
                    <CustomSelectOptions className={isGenreOpen ? 'open' : ''}>
                        <CustomSelectOption onClick={() => handleGenreChange({ target: { value: '' } } as ChangeEvent<HTMLSelectElement>)}>Все</CustomSelectOption>
                        {Object.keys(GENRES).map(g => (
                            <CustomSelectOption key={g} onClick={() => handleGenreChange({ target: { value: g } } as ChangeEvent<HTMLSelectElement>)}>{g}</CustomSelectOption>
                        ))}
                    </CustomSelectOptions>
                </CustomSelectContainer>
                <Separator />
            </TableHeaderCell>

            <TableHeaderPlatformCell>
                <TableHeaderContent>Платформа</TableHeaderContent>
                <CustomSelectContainer onClick={() => setIsPlatformOpen(!isPlatformOpen)}>
                    <CustomSelectTrigger>
                        <SvgIcon>
                            <img src={filterIcon} alt='filterPlatformIcon'/>
                        </SvgIcon>
                    </CustomSelectTrigger>
                    <CustomSelectOptions className={isPlatformOpen ? 'open' : ''}>
                        <CustomSelectOption onClick={() => handlePlatformChange({ target: { value: '' } } as ChangeEvent<HTMLSelectElement>)}>Все</CustomSelectOption>
                        {Object.keys(PLATFORMS).map(p => (
                            <CustomSelectOption key={p} onClick={() => handlePlatformChange({ target: { value: p } } as ChangeEvent<HTMLSelectElement>)}>{p}</CustomSelectOption>
                        ))}
                    </CustomSelectOptions>
                </CustomSelectContainer>
                <Separator />
            </TableHeaderPlatformCell>

            <TableHeaderCell>
                <TableHeaderContent>Издатель</TableHeaderContent>
                <Separator />
            </TableHeaderCell>

            <TableHeaderCell>
                <TableHeaderContent>Разработчик</TableHeaderContent>
                <Separator />
            </TableHeaderCell>

            <TableHeaderReleaseDateCell>
                <TableHeaderContent>Дата релиза</TableHeaderContent>
                <SortButton onClick={handleSortChange}>
                    {sort === SORT_OPTIONS.ReleaseDateUp ? <img src={sorterUp} alt="sorterUp" /> : sort === SORT_OPTIONS.ReleaseDateDown ? <img src={sorterDown} alt="sorterDown" /> : <img src={sorterNone} alt="sorterNone" />}
                </SortButton>
            </TableHeaderReleaseDateCell>
        </TableHeaderRow>
    );
});
