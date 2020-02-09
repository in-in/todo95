import React from 'react';
import { WindowHeader } from 'react95';
import styled from 'styled-components';

const StyledHeader = styled(WindowHeader)`
	display: flex;
	justify-content: space-between;
`;

const Header = () => (
	<StyledHeader>
		<h1>ToDo</h1>
		<p>App</p>
	</StyledHeader>
);

export default Header;
