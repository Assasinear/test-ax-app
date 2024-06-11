import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f05309;
  color: #ffffff;
  border-radius: 10px;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid #444;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #444;
`;

export const TableCell = styled.div`
  flex: 1;
  text-align: center;
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