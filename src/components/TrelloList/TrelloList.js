import React from "react";
import ActionButton from "../ActionButton/ActionButton";
import TrelloCard from "../TrelloCard/TrelloCard";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { ListContainer } from "./TrelloList.styles";
import CustomTitle from "../CustomTitle/CustomTitle";

const TrelloList = ({ title, cards, listId, index }) => {
	return (
		<Draggable draggableId={String(listId)} index={index}>
			{(provided) => (
				<ListContainer
					{...provided.draggableProps}
					ref={provided.innerRef}
					{...provided.dragHandleProps}
				>
					<Droppable droppableId={String(listId)}>
						{(provided) => (
							<div {...provided.droppableProps} ref={provided.innerRef}>
								<CustomTitle content={title} />
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
				</ListContainer>
			)}
		</Draggable>
	);
};

export default TrelloList;
