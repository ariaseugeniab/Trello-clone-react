// import { CONSTANTS } from "../actions";
import Types from "./types";

export const addCard = (listId, text) => {
	return {
		type: Types.ADD_CARD,
		payload: { text, listId },
	};
};
