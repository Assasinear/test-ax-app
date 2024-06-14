import styled from 'styled-components';

export const TableHeaderRow = styled.tr`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #181A20;
`;

export const TableHeaderCell = styled.th`
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

export const TableHeaderPlatformCell = styled.th`
    font-family: Roboto, serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    width: 364px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TableHeaderReleaseDateCell = styled.th`
    font-family: Roboto, serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    width: 175px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TableHeaderContent = styled.b`
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

export const SortButton = styled.button`
    background: transparent;
    border: none;
    color: inherit;
    padding: 16px;
    margin-top: 5px;
    margin-right: 5px;
    font: inherit;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
    &:disabled {
        cursor: not-allowed;
    }
`;

export const CustomSelectContainer = styled.div`
    position: relative;
    display: inline-block;
`;

export const CustomSelectTrigger = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 235px;
    background: transparent;
    color: white;
    border-radius: 5px;
    cursor: pointer;
`;

export const CustomSelectOptions = styled.div`
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #444444;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 5;
    border-radius: 5px;
    &.open {
        display: block;
    }
`;

export const CustomSelectOption = styled.div`
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #333333;
    }
`;

export const SvgIcon = styled.span`
    display: flex;
    align-items: center;
    svg {
        width: 25px;
        height: 25px;
    }
`;