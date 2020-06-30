import { combineReducers } from 'redux';
import * as reducers from "./reducers";

/*
    combinedReduces creates a state shape based on the data keys passed into
    the combineReducers object.  In this case "data" and "ui" the name of the
    members of reducers
 */
export default combineReducers(reducers);