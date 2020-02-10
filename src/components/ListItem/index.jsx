/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react95';

class ListItem extends Component {
	render() {
		const { label, important } = this.props;
		const style = {
			'color': important ? 'hotpink' : null,
		};

		return (
			<div>
				<span style={style}>{label}</span>
				<Button square><span role="img" aria-label="Trash Can">🗑️</span></Button>
				<Button square><span role="img" aria-label="Exclamation Mark">❗</span></Button>
			</div>
		);
	}
}

ListItem.propTypes = {
	'label': PropTypes.string.isRequired,
	'important': PropTypes.bool,
};

ListItem.defaultProps = {
	'important': false,
};

export default ListItem;
