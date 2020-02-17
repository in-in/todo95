import React, { Component } from 'react';
import { TextField, Button, Fieldset } from 'react95';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled(Button)`
	margin-top: .5em;
`;

class AddForm extends Component {
	constructor() {
		super();
		this.state = {
			'label': '',
		};
	}

	onLabelChange = (e) => {
		this.setState({ 'label': e.target.value });
	}

	onSubmit = (e) => {
		const { onAdded } = this.props;
		const { label } = this.state;

		e.preventDefault();
		onAdded(label);
		this.setState({
			'label': '',
		});
	}

	render() {
		const { label } = this.state;

		return (
			<form onSubmit={this.onSubmit}>
				<Fieldset label={<span className="visually-hidden">Add task</span>}>
					<TextField
						aria-label="Add task"
						onChange={this.onLabelChange}
						placeholder="Add task"
						required
						value={label}
					/>
					<StyledButton fullWidth type="submit">
						<span role="img" aria-label="Plus">➕</span>
					</StyledButton>
				</Fieldset>
			</form>
		);
	}
}

AddForm.propTypes = {
	'onAdded': PropTypes.func.isRequired,
};

export default AddForm;
