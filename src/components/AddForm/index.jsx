/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { TextField, Button, Fieldset } from 'react95';
import PropTypes from 'prop-types';

class AddForm extends Component {
	render() {
		const { onAdded } = this.props;

		return (
			<Fieldset>
				<TextField placeholder="Add task" />
				<Button fullWidth onClick={() => onAdded('foo')}>
					<span role="img" aria-label="Exclamation Mark">❗</span>
				</Button>
			</Fieldset>
		);
	}
}

AddForm.propTypes = {
	'onAdded': PropTypes.func.isRequired,
};

export default AddForm;
