import { CONSTANTS } from "../actions";

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

const listsReducer = (state = initialState, action) => {
	switch (action.type) {
		// case CONSTANTS.ADD_CARD:
		// 	return { id: 0, text: "Card1 text!" };
		case CONSTANTS.ADD_LIST:
			return [...state, { title: action.payload, id: 1, cards: [] }];

		default:
			return state;
	}
};

export default listsReducer;
