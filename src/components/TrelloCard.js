import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Draggable } from "react-beautiful-dnd";

const TrelloCard = ({ text, id, index }) => {
	return (
		<Draggable draggableId={String(id)} index={index}>
			{(provided) => (
				<div
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					<Card style={styles.cardContainer} sx={{ minWidth: 275 }}>
						<CardContent>
							<Typography variant="body2">{text}</Typography>
						</CardContent>
					</Card>
				</div>
			)}
		</Draggable>
	);
};

const styles = {
	cardContainer: {
		marginBottom: 8,
		textAlign: "left",
	},
};

export default TrelloCard;
