import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ label }) => (
	<span>{label}</span>
);

ListItem.propTypes = {
	'label': PropTypes.string.isRequired,
};

export default ListItem;
