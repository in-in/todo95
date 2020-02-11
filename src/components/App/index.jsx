import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset, themes, Window } from 'react95';
import Header from '../Header';
import Filter from '../Filter';
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
			'label': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime necessitatibus corporis labore dolorem consequatur eum libero tempora est? Amet odit officiis minus, provident ad aliquam minima eveniet tenetur aut a.',
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
					<Filter />
					<Stats />
					<List todos={data} />
				</StyledWindow>
			</ThemeProvider>
		</>
	);
};

export default App;
