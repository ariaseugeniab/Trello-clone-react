import React from "react";
import { TitleContainer, ListTitle } from "./CustomTitle.styles";

const CustomTitle = ({ content }) => {
	// const [textContent, ]
	// function handleEdditContent(){

	// }
	return (
		<TitleContainer>
			<ListTitle>{content}</ListTitle>
		</TitleContainer>
	);
};

export default CustomTitle;
