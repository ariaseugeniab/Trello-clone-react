import React from "react";
import ActionButton from "../ActionButton/ActionButton";
import TrelloCard from "../TrelloCard";
import { StyledContainer, StyledTitle } from "./TrelloList.styles";

const TrelloList = ({ title, cards, listId }) => {
	return (
		<StyledContainer>
			<StyledTitle>{title}</StyledTitle>
			{cards.map((card) => (
				<TrelloCard key={card.id} text={card.text} />
			))}
			<ActionButton listId={listId} />
		</StyledContainer>
	);
};

export default TrelloList;
