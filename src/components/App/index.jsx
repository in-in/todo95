import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset, themes, Window } from 'react95';
import Header from '../Header';
import List from '../List';
import Stats from '../Stats';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

const StyledWindow = styled(Window)`
	width: 100%
`;

const App = () => {
	const data = [
		{
			'id': '1',
			'label': 'item1',
			'important': false,
		},
		{
			'id': '2',
			'label': 'item2',
			'important': true,
		},
		{
			'id': '3',
			'label': 'item3',
			'important': false,
		},
	];

	return (
		<>
			<ResetStyles />
			<ThemeProvider theme={themes.default}>
				<StyledWindow>
					<Header />
					<Stats />
					<List todos={data} />
				</StyledWindow>
			</ThemeProvider>
		</>
	);
};

export default App;
