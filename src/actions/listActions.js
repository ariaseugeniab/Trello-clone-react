// import { CONSTANTS } from "../actions";
import Types from "./types";

export const addList = (title) => {
	return {
		type: Types.ADD_LIST,
		payload: title,
	};
};

export const sortList = (
	droppableIdStart,
	droppableIdEnd,
	droppableIndexStart,
	droppableIndexEnd,
	draggableId,
	type
) => {
	return {
		type: Types.SORT_LIST,
		payload: {
			droppableIdStart,
			droppableIdEnd,
			droppableIndexEnd,
			droppableIndexStart,
			draggableId,
			type,
		},
	};
};
