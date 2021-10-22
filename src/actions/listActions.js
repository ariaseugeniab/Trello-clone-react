// import { CONSTANTS } from "../actions";
import Types from "./types";

export const addList = (title) => {
	return {
		type: Types.ADD_LIST,
		payload: title,
	};
};

export default addList;
