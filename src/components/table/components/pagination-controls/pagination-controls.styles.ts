import styled from 'styled-components';
import { FilterSelect } from '../../table.styles';

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 62px;
    background-color: #181A20;
`;

export const PaginationButton = styled.button`
    padding: 5px 10px;
    margin: 0 2px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: transparent;
    color: white;

    &:disabled {
        background-color: #aaa;
        cursor: not-allowed;
    }
`;

export const PaginationDotsButton = styled.button`
    padding: 5px 10px;
    margin: 0 2px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: transparent;
    color: white;

    &:disabled {
        background-color: #aaa;
        cursor: not-allowed;
    }
`;

export const SelectPageSize = styled(FilterSelect)`
    background-color: #181A20;
    cursor: pointer;
`;

export const AllGamesCounter = styled.span`
    margin-right: 10px;
`;

export const PageSizeContainer = styled.div`
    display: flex;
    width: 150px;
    justify-content: space-between;
    align-items: center;
    margin: 0 35px;
`;
