import Types from "../actions/types";
import createReducer from "./createReducer";

const initialState = [
	{
		title: "title1",
		id: 0,
		cards: [
			{ id: 0, text: "Card1 text!" },
			{ id: 1, text: "other card text!" },
		],
	},
	{
		title: "title2",
		id: 1,
		cards: [
			{ id: 2, text: "Card1 text!" },
			{ id: 3, text: "other card text!" },
		],
	},
];

const addCard = (draftState, action) => {
	const newCard = { id: 4, text: action.text };

	draftState.map((list) => {
		if (list.id === action.listId) {
			return list.cards.push(newCard);
		} else {
			return list;
		}
	});
};

const addList = (draftState, action) => {
	draftState.push({ title: action, id: 2, cards: [] });
};

const handlers = {
	[Types.ADD_CARD]: addCard,
	[Types.ADD_LIST]: addList,
};

const listReducers = createReducer(initialState, handlers);

export default listReducers;
