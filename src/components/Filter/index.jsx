/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';
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
	render() {
		return (
			<>
				<StyledFieldset label="Filters">
					<StyledRadio
						checked
						onChange={() => true}
						value="All"
						label="All"
						name="filters"
					/>
					<br />
					<StyledRadio
						onChange={() => true}
						value="Active"
						label="Active"
						name="filters"
					/>
					<br />
					<StyledRadio
						onChange={() => true}
						value="Done"
						label="Done"
						name="filters"
					/>
				</StyledFieldset>
			</>
		);
	}
}

export default Filter;
