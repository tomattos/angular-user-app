type Order = 'ASC' | 'DESC';

export interface PageableInterface {
    page: number;
    rowsPerPage: number;
}

export const DefaultPagination: PageableInterface = {
    page: 0,
    rowsPerPage: 10
};

export interface PageableResponse<T> {
    itemCount: number;
    items: T[] | [];
    next: string;
    pageCount: number;
    previous: string;
    totalItems: number;
}
