import styled from "styled-components";

export const StyledContainer = styled.div`
	background-color: rgb(235, 236, 240);
	border-radius: 3px;
	width: 300px;
	padding: 8px;
	margin-right: 8px;
	height: 100%;
	max-height: 100%;
`;

export const StyledTitle = styled.h3`
	font-weight: 600;
	color: #172b4d;
	font-size: 14px;
	text-align: left;
	padding: 4px 8px;
	margin: 0;
`;

export const StyledInput = styled.input`
	width: 100%;
	border: none;
	outline-color: blue;
	border-radius: 3px;
	margin-bottom: 3px;
	padding: 5px;
`;

export const TitleContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`;
