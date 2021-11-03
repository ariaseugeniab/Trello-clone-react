import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ActionButton from "../ActionButton/ActionButton";
import TrelloCard from "../TrelloCard/TrelloCard";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { ListContainer, StyledInput } from "./TrelloList.styles";
import CustomTitle from "../CustomTitle/CustomTitle";
import { editListName } from "../../actions/listActions";

const TrelloList = ({ title, cards, listId, index }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [customTitle, setCustomTitle] = useState(title);
	const dispatch = useDispatch();

	const renderEditInput = (title) => {
		return (
			<form onSubmit={handleFinishEditing}>
				<StyledInput
					type="text"
					value={customTitle}
					onChange={handleChange}
					autoFocus
					onFocus={handleFocus}
					onBlur={handleFinishEditing}
				/>
			</form>
		);
	};
	const handleFocus = (e) => {
		e.target.select();
	};

	const handleFinishEditing = (e) => {
		setIsEditing(false);
		if (customTitle.length > 0) {
			dispatch(editListName(customTitle, listId, "list"));
		}
	};
	const handleChange = (e) => {
		e.preventDefault();
		setCustomTitle(e.target.value);
	};

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
								{isEditing ? (
									renderEditInput(title)
								) : (
									<div
										onClick={() => setIsEditing(true)}
										onBlur={setIsEditing(false)}
									>
										<CustomTitle content={title} />
									</div>
								)}

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
