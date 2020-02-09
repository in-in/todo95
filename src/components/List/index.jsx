import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';

const List = ({ todos }) => {
	const elements = todos.map((el) => {
		const { id, label, important } = el;

		return (
			<li key={id}>
				<ListItem label={label} important={important} />
			</li>
		);
	});

	return (
		<ul>{elements}</ul>
	);
};

List.propTypes = {
	'todos': PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
