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

const sortList = (draftState, action) => {
	const {
		droppableIdStart,
		droppableIdEnd,
		droppableIndexStart,
		droppableIndexEnd,
		draggableId,
	} = action;

	console.log(
		"droppableIdStart",
		droppableIdStart,
		"droppableIdEnd",
		droppableIdEnd,
		"droppableIdStart === droppableIdEnd",
		droppableIdStart === droppableIdEnd
	);
	if (droppableIdStart === droppableIdEnd) {
		draftState.map((list) => {
			if (droppableIdStart === list.id) {
				const card = list.cards.splice(droppableIndexStart, 1);
				return list.cards.splice(droppableIndexEnd, 0, ...card);
			} else {
				return list;
			}
		});
	}
	// if (droppableIdStart !== droppableIdEnd) {
	// 	// draftState.map((list)=>{
	// 	// 	const listStart

	// 	// })
	// 	const listStart = draftState.find((list) => list.id === droppableIdStart);
	// 	const listEnd = draftState.find((list) => list.id === droppableIdEnd);

	// 	//cuando va de uno al otro

	// 	// const card = listStart.cards.splice(droppableIndexStart, 1);
	// 	// listEnd.cards.splice(droppableIndexEnd, 0, ...card);

	// 	console.log("listStart", listStart, "listEnd", listEnd);
	// 	// console.log("card", card);
	// 	// return {
	// 	// 	...draftState,
	// 	// 	[droppableIdStart]: listStart,
	// 	// 	[droppableIdEnd]: listEnd,
	// 	// };

	// 	// const listStart = state[droppableIdStart];
	// 	// const card = listStart.cards.splice(droppableIndexStart, 1);
	// 	// const listEnd = state[droppableIdEnd];
	// 	// listEnd.cards.splice(droppableIndexEnd, 0, ...card);
	// 	// return {
	// 	// 	...state,
	// 	// 	[droppableIdStart]: listStart,
	// 	// 	[droppableIdEnd]: listEnd,
	// 	// };
	// }
};

const handlers = {
	[Types.ADD_CARD]: addCard,
	[Types.ADD_LIST]: addList,
	[Types.SORT_LIST]: sortList,
};

const listReducers = createReducer(initialState, handlers);

export default listReducers;
