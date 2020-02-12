import React, { Component } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset, themes, Window } from 'react95';
import nanoid from 'nanoid';
import Header from '../Header';
import Filter from '../Filter';
import Stats from '../Stats';
import AddForm from '../AddForm';
import List from '../List';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

const StyledWindow = styled(Window)`
	width: 100%
`;

class App extends Component {
	constructor() {
		super();
		this.state = {
			'data': [
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
			],
		};
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			const idx = data.findIndex((el) => el.id === id);
			const result = data.filter((el, i) => i !== idx);

			return {
				'data': result,
			};
		});
	}

	addItem = (text) => {
		const item = {
			'id': nanoid(),
			'label': text,
		};

		this.setState(({ data }) => ({
			'data': [...data, item],
		}));
	}

	render() {
		const { data } = this.state;

		return (
			<>
				<ResetStyles />
				<ThemeProvider theme={themes.default}>
					<StyledWindow>
						<Header />
						<Filter />
						<Stats />
						<AddForm onAdded={this.addItem} />
						<List
							todos={data}
							onDeleted={this.deleteItem}
						/>
					</StyledWindow>
				</ThemeProvider>
			</>
		);
	}
}

export default App;
