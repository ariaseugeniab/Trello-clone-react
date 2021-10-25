import React from "react";
import ActionButton from "../ActionButton/ActionButton";
import TrelloCard from "../TrelloCard";
import { Droppable } from "react-beautiful-dnd";
import { StyledContainer, StyledTitle } from "./TrelloList.styles";

const TrelloList = ({ title, cards, listId }) => {
	return (
		<Droppable droppableId={String(listId)}>
			{(provided) => (
				<StyledContainer {...provided.droppableProps} ref={provided.innerRef}>
					<StyledTitle>{title}</StyledTitle>
					{cards.map((card, index) => (
						<TrelloCard
							key={card.id}
							index={index}
							text={card.text}
							id={card.id}
						/>
					))}
					<ActionButton listId={listId} />
					{provided.placeholder}
				</StyledContainer>
			)}
		</Droppable>
	);
};

export default TrelloList;
