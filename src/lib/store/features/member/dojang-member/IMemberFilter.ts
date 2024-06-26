export enum SortDateOrder {
    OLDEST_NEWEST = "oldest-newest",
    NEWEST_OLDEST = "newest-oldest",
}

export interface IMemberFilter {
    searchValue: string,
    sortDateOrder: SortDateOrder,
}