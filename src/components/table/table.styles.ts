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

export const TableRow = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #000000;
`;

export const FilterSelect = styled.select`
    padding: 5px;
    margin-right: 10px;
    border-radius: 5px;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #444444;
    color: white;

    &::-ms-expand {
        display: none;
    }
`;