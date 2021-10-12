import { connect } from "react-redux";
import React from "react";
import "./App.css";
import TrelloList from "./components/TrelloList";

function App({ lists }) {
	// const lists = this.props.lists;
	return (
		<div className="App">
			<h1>Hello!</h1>
			<div style={styles.listsContainer}>
				{lists.map((list) => (
					<TrelloList key={list.id} title={list.title} cards={list.cards} />
				))}
			</div>
		</div>
	);
}

const styles = {
	title: {
		display: "block",
	},
	listsContainer: {
		backgroundColor: "#294C74",
		display: "flex",
		flexDirection: "row",
		marginRight: 8,
	},
};

const mapStateToProps = (state) => ({
	lists: state.lists,
});

export default connect(mapStateToProps)(App);
