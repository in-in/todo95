import React from 'react';
import PropTypes from 'prop-types';
import { List as List95, ListItem as ListItem95 } from 'react95';
import ListItem from '../ListItem';

const List = ({
	onDeleted,
	onToggleDone,
	onToggleImportant,
	todos,
}) => {
	const elements = todos.map((el) => {
		const {
			done,
			id,
			important,
			label,
		} = el;

		return (
			<ListItem95 key={id}>
				<ListItem
					done={done}
					important={important}
					label={label}
					onDeleted={() => onDeleted(id)}
					onToggleDone={() => onToggleDone(id)}
					onToggleImportant={() => onToggleImportant(id)}
				/>
			</ListItem95>
		);
	});

	return (
		<List95 fullWidth square>{elements}</List95>
	);
};

List.propTypes = {
	'onDeleted': PropTypes.func.isRequired,
	'onToggleDone': PropTypes.func.isRequired,
	'onToggleImportant': PropTypes.func.isRequired,
	'todos': PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
