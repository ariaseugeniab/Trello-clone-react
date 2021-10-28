import { connect } from "react-redux";
import React from "react";
import TrelloList from "./components/TrelloList/TrelloList";
import ActionButton from "./components/ActionButton/ActionButton";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sortList } from "./actions/listActions";
import { useDispatch } from "react-redux";

function App({ lists }) {
	const dispatch = useDispatch();

	const onDragEnd = (result) => {
		const { destination, source, draggableId, type } = result;

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
				source.droppableId,
				destination.droppableId,
				parseInt(source.index),
				parseInt(destination.index),
				parseInt(draggableId),
				type
			)
		);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<h1>Hello!</h1>
			<Droppable droppableId="all-lists" direction="horizontal" type="list">
				{(provided) => (
					<StyledListContainer
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						{lists.map((list, index) => (
							<TrelloList
								id={list.id}
								listId={list.id}
								key={list.id}
								title={list.title}
								cards={list.cards}
								index={index}
							/>
						))}
						{provided.placeholder}
						<ActionButton list />
					</StyledListContainer>
				)}
			</Droppable>
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
