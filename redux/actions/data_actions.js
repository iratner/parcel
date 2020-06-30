export const ADD_BUCKET_LIST_ITEM = 'ADD_BUCKET_LIST_ITEM';

export function addBucketListItem(item) {
    return {
        type: ADD_BUCKET_LIST_ITEM,
        item
    }
}
