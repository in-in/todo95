import React from 'react';
import PropTypes from 'prop-types';
import { List as List95, ListItem as ListItem95 } from 'react95';
import ListItem from '../ListItem';

const List = ({ todos }) => {
	const elements = todos.map((el) => {
		const { id, label, important } = el;

		return (
			<ListItem95 key={id}>
				<ListItem label={label} important={important} />
			</ListItem95>
		);
	});

	return (
		<List95 fullWidth square>{elements}</List95>
	);
};

List.propTypes = {
	'todos': PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
