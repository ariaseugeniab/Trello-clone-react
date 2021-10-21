import React from "react";
import ActionButton from "./ActionButton";
import TrelloCard from "./TrelloCard";
import styled from "styled-components";

const TrelloList = ({ title, cards }) => {
	return (
		<StyledContainer>
			<StyledTitle>{title}</StyledTitle>
			{cards.map((card) => (
				<TrelloCard key={card.id} text={card.text} />
			))}
			<ActionButton />
		</StyledContainer>
	);
};

const StyledContainer = styled.div`
	background-color: rgb(235, 236, 240);
	border-radius: 3px;
	width: 300px;
	padding: 8px;
	margin-right: 8px;
	height: 100%;
`;

const StyledTitle = styled.h3`
	font-weight: 600;
	color: #172b4d;
	font-size: 14px;
	text-align: left;
	padding: 4px 8px;
	margin: 0;
`;

export default TrelloList;
