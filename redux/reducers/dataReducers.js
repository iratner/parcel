import { ADD_BUCKET_LIST_ITEM, TOGGLE_COMPLETED } from "../actions/data_actions";
import { store } from '../_store';
import { updateState } from "./reducer_helpers";
import update from "immutability-helper";

export default function( state = store.data, action) {

    switch (action.type) {
        case ADD_BUCKET_LIST_ITEM:
            return state;

        default: return state;
    }
}