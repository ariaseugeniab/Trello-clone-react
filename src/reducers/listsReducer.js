import Types from "../actions/types";
import createReducer from "./createReducer";
import { v4 as uuidv4 } from "uuid";
import { current } from "@reduxjs/toolkit";

const initialState = [
	{
		title: "title1",
		id: uuidv4(),
		cards: [
			{ id: 1, text: "Card id 1 from list id 0" },
			{ id: 2, text: "Card id 2 from list id 0" },
		],
	},
	{
		title: "title2",
		id: uuidv4(),
		cards: [
			{ id: 4, text: "Card id 4 from list id 3" },
			{ id: 5, text: "Card id 5 from list id 3" },
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
		type,
	} = action;

	if (type === "list") {
		const selectedList = draftState.splice(droppableIndexStart, 1);
		draftState.splice(droppableIndexEnd, 0, ...selectedList);
	}

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
	if (droppableIdStart !== droppableIdEnd) {
		const listStart = draftState.find((list) => droppableIdStart === list.id);
		const oldIndex = draftState.indexOf(listStart);
		const cardSelected = draftState[oldIndex].cards.splice(
			droppableIndexStart,
			1
		);

		const listEnd = draftState.find((list) => droppableIdEnd === list.id);
		const newIndex = draftState.indexOf(listEnd);
		draftState[newIndex].cards.splice(droppableIndexEnd, 0, ...cardSelected);
	}
};

const editListName = (draftState, action) => {
	const { listId, text } = action;

	draftState.map((list) => {
		if (list.id === listId) {
			return (list.title = text);
		} else return list;
	});
};

const handlers = {
	[Types.ADD_CARD]: addCard,
	[Types.ADD_LIST]: addList,
	[Types.SORT_LIST]: sortList,
	[Types.EDIT_LIST_NAME]: editListName,
};

const listReducers = createReducer(initialState, handlers);

export default listReducers;
