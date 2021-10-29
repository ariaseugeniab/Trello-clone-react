import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ActionButton from "../ActionButton/ActionButton";
import TrelloCard from "../TrelloCard/TrelloCard";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { ListContainer } from "./TrelloList.styles";
import CustomTitle from "../CustomTitle/CustomTitle";
import { editListName } from "../../actions/listActions";

const TrelloList = ({ title, cards, listId, index }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [customTitle, setCustomTitle] = useState("");
	const dispatch = useDispatch();

	const renderEditInput = (title) => {
		return (
			<form onSubmit={handleFinishEditing}>
				<input
					type="text"
					value={customTitle ? customTitle : title}
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
		// const listId = e.target.
		setIsEditing(false);
		dispatch(editListName(customTitle, listId));
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
