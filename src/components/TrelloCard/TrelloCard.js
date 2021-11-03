import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Draggable } from "react-beautiful-dnd";
import { CardContainer } from "./TrelloCard.styles";
import { editListName } from "../../actions/listActions";

const TrelloCard = ({ text, id, index }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [customTitle, setCustomTitle] = useState(text);
	const dispatch = useDispatch();

	const renderEditInput = (text) => {
		return (
			<form onSubmit={handleFinishEditing}>
				<input
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
			dispatch(editListName(customTitle, id, "card"));
		}
	};
	const handleChange = (e) => {
		e.preventDefault();
		setCustomTitle(e.target.value);
	};

	return (
		<Draggable draggableId={String(id)} index={index}>
			{(provided) => (
				<CardContainer
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					<Card sx={{ minWidth: 275 }}>
						<CardContent>
							{isEditing ? (
								renderEditInput(text)
							) : (
								<div
									onClick={() => setIsEditing(true)}
									onBlur={setIsEditing(false)}
								>
									<Typography variant="body2">{text}</Typography>
								</div>
							)}
						</CardContent>
					</Card>
				</CardContainer>
			)}
		</Draggable>
	);
};

export default TrelloCard;
