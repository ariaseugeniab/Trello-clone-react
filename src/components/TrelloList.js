import React from "react";
import TrelloCard from "./TrelloCard";

const TrelloList = ({ title, cards }) => {
	return (
		<div style={styles.container}>
			<h3>{title}</h3>
			{cards.map((card) => (
				<TrelloCard key={card.id} text={card.text} />
			))}
		</div>
	);
};

const styles = {
	container: {
		backgroundColor: "#ebecf0",
		borderRadius: 3,
		width: "300px",
		padding: 8,
		marginRight: 8,
	},
};
export default TrelloList;
