import { combineReducers } from "redux";
import listReducers from "./listsReducer";

export default combineReducers({
	lists: listReducers,
});
