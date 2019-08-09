type RowsPerPage = 5 | 10 | 20 | 50;
type PaginationDirection = 'ASC' | 'DESC';

export interface PaginationInterface {
  page: number;
  limit: RowsPerPage;
  sort: string;
  order: PaginationDirection;
}
