import styled from "styled-components";

export const StyledButton = styled.button`
	background-color: #0079bf;
	border: none;
	box-shadow: none;
	color: #fff;
	border-radius: 3px;
	font-size: 14px;
	font-weight: 400;
	justify-content: center;
	line-height: 20px;
	padding: 6px 12px;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		background-color: #026aa7;
	}
`;

export const StyledCancelButton = styled.button`
	cursor: pointer;
	color: #6b778c;
	height: 32px;
	width: 32px;
	border: none;

	&:hover {
		color: #172b4d;
	}
`;

export const OpenFormButtonGroup = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	border-radius: 3px;
	height: 36px;
	width: 272px;
	padding-left: 10px;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;
