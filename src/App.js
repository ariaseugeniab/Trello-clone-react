import { connect } from "react-redux";
import "./App.css";
import TrelloList from "./components/TrelloList";

function App() {
	const { lists } = this.props;
	return (
		<div className="App">
			Hello
			{lists.map((list) => (
				<TrelloList title={list.title} cards={list.cards} />
			))}
			<TrelloList title="test" />
		</div>
	);
}

const mapStateToProps = (state) => ({
	lists: state.lists,
});

export default connect(mapStateToProps)(App);
