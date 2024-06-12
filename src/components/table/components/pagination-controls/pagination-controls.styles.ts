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
    margin: 0 5px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #444;
    color: #fff;

    &:disabled {
        background-color: #aaa;
        cursor: not-allowed;
    }
`;

export const SelectPageSize = styled(FilterSelect)`
    margin-left: 10px;
`;