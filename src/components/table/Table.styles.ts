import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  margin-top: 75px;
  margin-right: 40px;
  margin-left: 40px;
  border-radius: 10px;
  width: 1840px;
  height: 666px;
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
  padding: 10px 0;
  border-bottom: 1px solid #444;
`;

export const TableCellNameGenreDeveloperPublisher = styled.div`
  flex: 1;
  font-family: Roboto,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  width: 325px;
  height: 54px;
`;

export const TableHeaderTitle = styled.b`
  display: flex;
  padding: 16px;
`;

export const TableCellPlatform = styled.div`
  flex: 1;
  font-family: Roboto,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  width: 364px;
  height: 54px;
`;

export const TableCellReleaseDate = styled.div`
  flex: 1;
  font-family: Roboto,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  width: 176px;
  height: 54px;
`;

export const FilterSelect = styled.select`
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
  border: none;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
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