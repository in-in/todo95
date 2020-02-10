import React from 'react';
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

const Filter = () => (
	<div>
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
	</div>
);

export default Filter;
