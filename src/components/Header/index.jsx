import React from 'react';
import { WindowHeader } from 'react95';
import styled from 'styled-components';

const StyledHeader = styled(WindowHeader)`
	display: flex;
	justify-content: space-between;
`;

const Header = () => (
	<StyledHeader>
		<h1>ToDo95</h1>
		<span role="img" aria-label="Note">📝</span>
	</StyledHeader>
);

export default Header;
