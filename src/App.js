import { connect } from "react-redux";
import React from "react";
import "./App.css";
import TrelloList from "./components/TrelloList/TrelloList";
import ActionButton from "./components/ActionButton/ActionButton";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

function App({ lists }) {
	const onDragEnd = (result) => {
		console.log("drag!");
	};

	return (
		<div className="App">
			<h1>Hello!</h1>
			<DragDropContext onDragEnd={onDragEnd}>
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
		</div>
	);
}

const StyledListContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-right: 8px;
`;

const mapStateToProps = (state) => ({
	lists: state.lists,
});

export default connect(mapStateToProps)(App);
