import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ label, important }) => {
	const style = {
		'color': important ? 'hotpink' : null,
	};

	return (
		<span style={style}>{label}</span>
	);
};

ListItem.propTypes = {
	'label': PropTypes.string.isRequired,
	'important': PropTypes.bool,
};

ListItem.defaultProps = {
	'important': false,
};

export default ListItem;
