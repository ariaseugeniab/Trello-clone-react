import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const TrelloCard = ({ text }) => {
	return (
		<Card style={styles.cardContainer} sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography variant="body2">{text}</Typography>
			</CardContent>
		</Card>
	);
};

const styles = {
	cardContainer: {
		marginBottom: 8,
		textAlign: "left",
	},
};

export default TrelloCard;
