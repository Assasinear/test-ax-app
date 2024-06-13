import styled from 'styled-components';

export const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #ffffff;
    margin: 72px 40px 0 40px;
    height: 666px;
    width: 1840px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: inherit;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #f1092c;
        border-radius: 3rem;
        height: 20px;
    }
`;

export const TableDataContainer = styled.div`
    flex: 1;
    overflow-y: auto;
`;

export const TableHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #181A20;
`;

export const TableRow = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #000000;
`;

export const TableCellNameGenreDeveloperPublisher = styled.div`
    flex: 1;
    font-family: Roboto, serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    width: 325px;
    height: 54px;
    display: flex;
    align-items: center;
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
    flex: 1;
    font-family: Roboto, serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    height: 54px;
    width: 364px;
    display: flex;
    align-items: center;
`;

export const TableCellReleaseDate = styled.div`
    flex: 1;
    font-family: Roboto, serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    width: 176px;
    height: 54px;
    display: flex;
    align-items: center;
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

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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