import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    TableContainer,
    TableHeader,
    TableRow,
    FilterSelect,
    PaginationContainer,
    PaginationButton,
    SelectPageSize,
    SortButton, TableCellNameGenreDeveloperPublisher, TableCellPlatform, TableCellReleaseDate, TableHeaderTitle,
} from './Table.styles';

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const GENRES = {
    'Shooter': 'shooter',
    'MMORPG': 'mmorpg',
    'Стратегия': 'strategy',
    'Экшен-РПГ': 'action-rpg',
    'Battle Royale': 'battle-royale',
    'Файтинг': 'fighting',
    'MOBA': 'moba',
    'Action': 'action',
    'Sports': 'sports',
    'Гонки': 'racing',
    'Карточная': 'card',
    'MMO': 'mmo',
    'Социальная': 'social',
    'Фэнтези': 'fantasy'
};

const PLATFORMS = {
    'ПК': 'pc',
    'Браузер': 'browser'
};

const pageSizes = [10, 20, 50];

type Game = {
    id: number;
    title: string;
    short_description: string;
    thumbnail: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
};

export const Table: React.FC = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [genre, setGenre] = useState<string>('');
    const [platform, setPlatform] = useState<string>('');
    const [sort, setSort] = useState<'release-date-up' | 'release-date-down' | ''>('');
    const [pageSize, setPageSize] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const fetchGames = async () => {
        let url = `${CORS_PROXY}https://www.freetogame.com/api/games?`;

        if (genre) {
            url += `category=${genre}&`;
        }
        if (platform) {
            url += `platform=${platform}&`;
        }
        if (sort) {
            const sortBy = sort === 'release-date-up' ? 'release-date' : '-release-date';
            url += `sort-by=${sortBy}&`;
        }

        try {
            const response = await axios.get<Game[]>(url);
            setGames(response.data);
        } catch (error) {
            console.error('Ошибка запроса');
        }
    };

    useEffect(() => {
        fetchGames();
    }, [genre, platform, sort]);

    const totalPages = Math.ceil(games.length / pageSize);
    const paginatedData = games.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <TableContainer>
            <TableHeader>
                <TableCellNameGenreDeveloperPublisher>
                    <TableHeaderTitle>Наименование</TableHeaderTitle>
                </TableCellNameGenreDeveloperPublisher>
                <TableCellNameGenreDeveloperPublisher>
                    <TableHeaderTitle>Жанр</TableHeaderTitle>
                    <FilterSelect onChange={(e) => {
                        setGenre(GENRES[e.target.value as keyof typeof GENRES]);
                        setCurrentPage(1);
                    }} value={Object.keys(GENRES).find(key => GENRES[key as keyof typeof GENRES] === genre) || ''}>
                        <option value="">Все</option>
                        {Object.keys(GENRES).map(g => <option key={g} value={g}>{g}</option>)}
                    </FilterSelect>
                </TableCellNameGenreDeveloperPublisher>
                <TableCellPlatform>
                    <TableHeaderTitle>Платформа</TableHeaderTitle>
                    <FilterSelect onChange={(e) => {
                        setPlatform(PLATFORMS[e.target.value as keyof typeof PLATFORMS]);
                        setCurrentPage(1);
                    }} value={Object.keys(PLATFORMS).find(key => PLATFORMS[key as keyof typeof PLATFORMS] === platform) || ''}>
                        <option value="">Все</option>
                        {Object.keys(PLATFORMS).map(p => <option key={p} value={p}>{p}</option>)}
                    </FilterSelect>
                </TableCellPlatform>
                <TableCellNameGenreDeveloperPublisher>
                    <TableHeaderTitle>
                        Издатель
                    </TableHeaderTitle>
                </TableCellNameGenreDeveloperPublisher>
                <TableCellNameGenreDeveloperPublisher>
                    <TableHeaderTitle>
                        Разработчик
                    </TableHeaderTitle>
                </TableCellNameGenreDeveloperPublisher>
                <TableCellReleaseDate>
                    <TableHeaderTitle>Дата релиза</TableHeaderTitle>
                    <SortButton onClick={() => setSort(sort === 'release-date-up' ? 'release-date-down' : 'release-date-up')}>
                        {sort === 'release-date-up' ? '🔽' : '🔼'}
                    </SortButton>
                </TableCellReleaseDate>
            </TableHeader>
            {paginatedData.map(game => (
                <TableRow key={game.id}>
                    <TableCellNameGenreDeveloperPublisher>{game.title}</TableCellNameGenreDeveloperPublisher>
                    <TableCellNameGenreDeveloperPublisher>{game.genre}</TableCellNameGenreDeveloperPublisher>
                    <TableCellPlatform>{game.platform}</TableCellPlatform>
                    <TableCellNameGenreDeveloperPublisher>{game.publisher}</TableCellNameGenreDeveloperPublisher>
                    <TableCellNameGenreDeveloperPublisher>{game.developer}</TableCellNameGenreDeveloperPublisher>
                    <TableCellReleaseDate>{game.release_date}</TableCellReleaseDate>
                </TableRow>
            ))}
            <PaginationContainer>
                <PaginationButton onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                    В начало
                </PaginationButton>
                {Array.from({ length: totalPages }, (_, index) => (
                    <PaginationButton key={index + 1} onClick={() => setCurrentPage(index + 1)} disabled={currentPage === index + 1}>
                        {index + 1}
                    </PaginationButton>
                ))}
                <PaginationButton onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>
                    В конец
                </PaginationButton>
                <span>
                       выводить по
                       <SelectPageSize onChange={(e) => setPageSize(parseInt(e.target.value))} value={pageSize}>
                           {pageSizes.map(size => <option key={size} value={size}>{size}</option>)}
                       </SelectPageSize>
                   </span>
            </PaginationContainer>
        </TableContainer>
    );
};