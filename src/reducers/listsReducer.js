import Types from "../actions/types";
import createReducer from "./createReducer";
import { v4 as uuidv4 } from "uuid";

const initialState = [
	{
		title: "title1",
		id: 0,
		cards: [
			{ id: 1, text: "Card1 text!" },
			{ id: 2, text: "other card text!" },
		],
	},
	{
		title: "title2",
		id: 3,
		cards: [
			{ id: 4, text: "Card1 text!" },
			{ id: 5, text: "other card text!" },
		],
	},
];

const addCard = (draftState, action) => {
	const newCard = { id: uuidv4(), text: action.text };

	draftState.map((list) => {
		if (list.id === action.listId) {
			return list.cards.push(newCard);
		} else {
			return list;
		}
	});
};

const addList = (draftState, action) => {
	draftState.push({ title: action, id: uuidv4(), cards: [] });
};

const handlers = {
	[Types.ADD_CARD]: addCard,
	[Types.ADD_LIST]: addList,
};

const listReducers = createReducer(initialState, handlers);

export default listReducers;
