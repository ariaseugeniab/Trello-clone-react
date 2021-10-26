import { connect } from "react-redux";
import React from "react";
import TrelloList from "./components/TrelloList/TrelloList";
import ActionButton from "./components/ActionButton/ActionButton";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import { sortList } from "./actions/listActions";
import { useDispatch } from "react-redux";

function App({ lists }) {
	const dispatch = useDispatch();

	const onDragEnd = (result) => {
		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		dispatch(
			sortList(
				parseInt(source.droppableId),
				parseInt(destination.droppableId),
				parseInt(source.index),
				parseInt(destination.index),
				parseInt(draggableId)
			)
		);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<h1>Hello!</h1>
			<StyledListContainer>
				{lists.map((list) => (
					<TrelloList
						id={list.id}
						listId={list.id}
						key={list.id}
						title={list.title}
						cards={list.cards}
					/>
				))}
				<ActionButton list />
			</StyledListContainer>
		</DragDropContext>
	);
}

const StyledListContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-right: 8px;
	height: 100%;
`;

const mapStateToProps = (state) => ({
	lists: state.lists,
});

export default connect(mapStateToProps)(App);
