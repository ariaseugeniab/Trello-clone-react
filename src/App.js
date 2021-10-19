import { connect } from "react-redux";
import React from "react";
import "./App.css";
import TrelloList from "./components/TrelloList";
import ActionButton from "./components/ActionButton";
import styled from "styled-components";

function App({ lists }) {
	// const lists = this.props.lists;
	return (
		<div className="App">
			<h1>Hello!</h1>
			<StyledListContainer>
				{lists.map((list) => (
					<TrelloList key={list.id} title={list.title} cards={list.cards} />
				))}
				<ActionButton list />
			</StyledListContainer>
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
