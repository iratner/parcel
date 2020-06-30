export const SET_TYPE_FILTER = "SET_TYPE_FILTER";

export function setTypeFilter(filter) {
    return {
        type: SET_TYPE_FILTER,
        filter
    };
}