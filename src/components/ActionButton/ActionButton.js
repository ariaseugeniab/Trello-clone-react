import React from "react";
import { Icon } from "@mui/material";
import Card from "@mui/material/Card";
import TextareaAutosize from "react-textarea-autosize";
import { connect } from "react-redux";
// import { addList, addCard } from "../actions";
import {
	StyledButton,
	StyledCancelButton,
	OpenFormButtonGroup,
} from "./ActionButton.styles";

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

	handleAddList = () => {
		const { dispatch } = this.props;
		const { text } = this.state;

		if (text) {
			dispatch(addList(text));
		}
	};

	handleAddCard = () => {
		const { dispatch, listId } = this.props;
		const { text } = this.state;

		if (text) {
			dispatch(addCard(listId, text));
			this.setState({ text: "" });
		}
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
						onBlur={this.closeForm}
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
					<StyledButton
						onMouseDown={list ? this.handleAddList : this.handleAddCard}
					>
						{list ? "Add List" : "Add Card"}
					</StyledButton>
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

export default connect()(ActionButton);
