export interface PagedResponseInterface<T>
{
    items: Array<T>;
    page: number;
    pageSize: number;
    totalCount: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

