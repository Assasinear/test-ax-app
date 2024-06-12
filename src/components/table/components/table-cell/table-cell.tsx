import { FC } from 'react';
import {
  TableCellContent,
  TableCellNameGenreDeveloperPublisher,
  TableCellPlatform,
  TableCellReleaseDate
} from './table-cell.styles';

type TableCellProps = {
  type: 'name' | 'genre' | 'platform' | 'publisher' | 'developer' | 'release_date';
  content: string;
};

export const TableCell: FC<TableCellProps> = ({type, content}) => {
  switch (type) {
    case 'name':
    case 'genre':
    case 'publisher':
    case 'developer':
      return (
        <TableCellNameGenreDeveloperPublisher>
          <TableCellContent>{content}</TableCellContent>
        </TableCellNameGenreDeveloperPublisher>
      );
    case 'platform':
      return (
        <TableCellPlatform>
          <TableCellContent>{content}</TableCellContent>
        </TableCellPlatform>
      );
    case 'release_date':
      return (
        <TableCellReleaseDate>
          <TableCellContent>{content}</TableCellContent>
        </TableCellReleaseDate>
      );
    default:
      return null;
  }
};
