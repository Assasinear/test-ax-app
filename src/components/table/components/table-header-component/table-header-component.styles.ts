import styled from 'styled-components';

export const TableHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #181A20;
`;

export const TableCellNameGenreDeveloperPublisher = styled.div`
    font-family: Roboto, serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    width: 325px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TableCellContent = styled.b`
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Separator = styled.div`
    height: 22px;
    width: 1px;
    background-color: #FFFFFF;
    margin: 0 10px;
`;

export const TableCellPlatform = styled.div`
    font-family: Roboto, serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    height: 54px;
    width: 364px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TableCellReleaseDate = styled.div`
    font-family: Roboto, serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    width: 176px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FilterSelect = styled.select`
    padding: 5px;
    margin-right: 10px;
    border-radius: 5px;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #444444 url('data:image/svg+xml;base64,PHN2ZyB...') no-repeat 95% center;
    color: white;

    &::-ms-expand {
        display: none;
    }
`;
export const SortButton = styled.button`
    background: transparent;
    border: none;
    color: inherit;
    font: inherit;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;