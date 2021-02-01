export interface Page<T> {
    content: T[];
    pageable:
    {
        sort:
        {
            unsorted: boolean,
            sorted: boolean,
            empty: boolean
        }
        offset: number,
        pageNumber: number,
        pageSize: number,
        unpaged: boolean,
        paged: boolean
    },
    totalPages: number;
    last: boolean;
    totalElements: number;
    number: number;
    size: number;
    sort: {
        unsorted: boolean,
        sorted: boolean,
        empty: false
    },
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}