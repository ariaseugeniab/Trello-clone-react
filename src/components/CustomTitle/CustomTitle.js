import React from "react";
import { TitleContainer, ListTitle } from "./CustomTitle.styles";

const CustomTitle = ({ content }) => {
	return (
		<TitleContainer>
			<ListTitle>{content}</ListTitle>
		</TitleContainer>
	);
};

export default CustomTitle;
