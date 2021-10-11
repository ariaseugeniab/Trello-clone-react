const initialState = [
	{
		title: "title1",
		id: 0,
		cards: [
			{ id: 0, text: "Card1 text!" },
			{ id: 1, text: "other card text!" },
		],
	},
];

const listReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default listReducer;
