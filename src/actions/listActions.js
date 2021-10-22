// import { CONSTANTS } from "../actions";
import Types from "./types";

export const addList = (title) => {
	console.log("el evento dice add");
	return {
		type: Types.ADD_LIST,
		payload: title,
	};
};

export default addList;
