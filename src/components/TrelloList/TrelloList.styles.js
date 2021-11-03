import styled from "styled-components";

export const ListContainer = styled.div`
	background-color: rgb(235, 236, 240);
	border-radius: 3px;
	width: 300px;
	padding: 8px;
	margin-right: 8px;
	height: 100%;
	max-height: 100%;
`;

export const StyledInput = styled.input`
	background-color: #fff;
	box-shadow: inset 0 0 0 2px #0079bf;
	width: 90%;
	border: none;
	outline-color: transparent;
	border-radius: 3px;
	margin-bottom: 3px;
	padding: 4px 8px;

	&::focus {
		outline-color: transparent;
		border: none;
	}
`;
