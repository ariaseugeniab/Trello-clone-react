/* eslint-disable  import/no-named-as-default */
import produce from "immer";

/* eslint-disable  import/no-anonymous-default-export */
export default (initialState, handlers) => {
	return (state = initialState, { type, payload }) => {
		return produce(state, (draft) => {
			const handler = handlers[type];
			return handler ? handler(draft, payload) : state;
		});
	};
};
