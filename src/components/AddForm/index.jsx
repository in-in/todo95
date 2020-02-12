/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { TextField, Button, Fieldset } from 'react95';
import PropTypes from 'prop-types';

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
				<Fieldset>
					<TextField
						onChange={this.onLabelChange}
						placeholder="Add task"
						value={label}
					/>
					<Button fullWidth type="submit">
						<span role="img" aria-label="Exclamation Mark">❗</span>
					</Button>
				</Fieldset>
			</form>
		);
	}
}

AddForm.propTypes = {
	'onAdded': PropTypes.func.isRequired,
};

export default AddForm;
