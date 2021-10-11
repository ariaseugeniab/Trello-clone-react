import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const TrelloCard = ({ text }) => {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography variant="body2">
					{text}
					<br />
					{'"a benevolent smile"'}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default TrelloCard;
