import React from "react";
import { Icon } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";

class ActionButton extends React.PureComponent {
	state = {
		formOpen: false,
		text: "",
	};

	openForm = () => {
		this.setState({
			formOpen: true,
		});
	};
	closeForm = (e) => {
		this.setState({
			formOpen: false,
		});
	};

	handleInputChange = (e) => {
		this.setState({
			text: e.target.value,
		});
	};

	renderAddButton = () => {
		const { list } = this.props;
		const textOpacity = list ? 1 : 0.5;
		const textColor = list ? "white" : "inherit";
		const textBackground = list ? "rgba(0,0,0,.15)" : "inherit";

		return (
			<OpenFormButtonGroup
				onClick={this.openForm}
				style={{
					opacity: textOpacity,
					backgroundColor: textBackground,
					color: textColor,
				}}
			>
				<Icon>add</Icon>
				<p>{list ? "Add another list" : "Add another card"}</p>
			</OpenFormButtonGroup>
		);
	};

	renderForm = () => {
		const { list } = this.props;

		return (
			<div>
				<Card
					sx={{ minWidth: 275 }}
					style={{
						overflow: "visible",
						minHeight: 60,
						minWidth: 272,
						padding: "6px 8px 2px",
						marginBottom: "8px",
					}}
				>
					<TextareaAutosize
						placeholder={
							list ? "Enter list title..." : "Enter a title for this card..."
						}
						autoFocus
						// onBlur={this.closeForm}
						value={this.state.text}
						onChange={this.handleInputChange}
						style={{
							resize: "none",
							width: "100%",
							overflow: "hidden",
							borderColor: "transparent",
							outline: "none",
							height: "100%",
						}}
					/>
				</Card>
				<div
					style={{
						display: "flex",
						alignContent: "center",
						justifyContent: "flex-start",
					}}
				>
					<StyledButton>{list ? "Add List" : "Add Card"}</StyledButton>
					<StyledCancelButton onClick={this.closeForm}>
						<Icon>close</Icon>
					</StyledCancelButton>
				</div>
			</div>
		);
	};

	render() {
		return this.state.formOpen ? this.renderForm() : this.renderAddButton();
	}
}
const StyledButton = styled.button`
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

const StyledCancelButton = styled.button`
	cursor: pointer;
	color: #6b778c;
	height: 32px;
	/* line-height: 32px; */
	width: 32px;
	border: none;

	&:hover {
		color: #172b4d;
	}
`;

const OpenFormButtonGroup = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	border-radius: 3px;
	height: 36px;
	width: 272px;
	padding-left: 10px;
`;

export default ActionButton;
