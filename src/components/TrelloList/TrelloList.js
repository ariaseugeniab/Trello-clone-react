import React from "react";
import ActionButton from "../ActionButton/ActionButton";
import TrelloCard from "../TrelloCard/TrelloCard";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { StyledContainer, StyledTitle } from "./TrelloList.styles";

const TrelloList = ({ title, cards, listId, index }) => {
	return (
		<Draggable draggableId={String(listId)} index={index}>
			{(provided) => (
				<StyledContainer
					{...provided.draggableProps}
					ref={provided.innerRef}
					{...provided.dragHandleProps}
				>
					<Droppable droppableId={String(listId)}>
						{(provided) => (
							<div {...provided.droppableProps} ref={provided.innerRef}>
								<StyledTitle>{title}</StyledTitle>
								{cards.map((card, index) => (
									<TrelloCard
										key={card.id}
										index={index}
										text={card.text}
										id={card.id}
									/>
								))}
								{provided.placeholder}
								<ActionButton listId={listId} />
							</div>
						)}
					</Droppable>
				</StyledContainer>
			)}
		</Draggable>
	);
};

export default TrelloList;
