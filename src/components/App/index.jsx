import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset, themes } from 'react95';
import Header from '../Header';
import Foo from '../List';

const ResetStyles = createGlobalStyle`
  ${reset}
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
				<Header />
				<Foo todos={data} />
			</ThemeProvider>
		</>
	);
};

export default App;
