/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Fieldset, Radio } from 'react95';

const StyledFieldset = styled(Fieldset)`
	> div {
		display: flex;
		justify-content: center;
	}
`;

const StyledRadio = styled(Radio)`
	margin: .5em;
`;

class Filter extends Component {
	buttons = [
		{ 'name': 'all', 'label': 'All' },
		{ 'name': 'active', 'label': 'Active' },
		{ 'name': 'done', 'label': 'Done' },
	]

	render() {
		const { filter, onFilterChange } = this.props;

		const radios = this.buttons.map(({ name, label }) => (
			<StyledRadio
				key={name}
				checked={filter === name}
				onChange={() => onFilterChange(name)}
				value={name}
				label={label}
				name="filters"
			/>
		));

		return (
			<>
				<StyledFieldset label="Filters">
					{radios}
				</StyledFieldset>
			</>
		);
	}
}

Filter.propTypes = {
	'filter': PropTypes.string.isRequired,
	'onFilterChange': PropTypes.func.isRequired,
};

export default Filter;
