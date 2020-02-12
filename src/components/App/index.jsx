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
	static createItem(text) {
		return {
			'done': false,
			'id': nanoid(),
			'important': false,
			'label': text,
		};
	}

	static toggleProperty(arr, id, propName) {
		const idx = arr.findIndex((el) => el.id === id);
		const oldItem = arr[idx];
		const newItem = { ...oldItem, [propName]: !oldItem[propName] };
		return [
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx + 1),
		];
	}

	constructor() {
		super();
		this.state = {
			'data': [
				App.createItem('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime necessitatibus corporis labore dolorem consequatur eum libero tempora est? Amet odit officiis minus, provident ad aliquam minima eveniet tenetur aut a.'),
				App.createItem('item2'),
				App.createItem('item3'),
				App.createItem('item4'),
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
		this.setState(({ data }) => ({
			'data': [...data, App.createItem(text)],
		}));
	}

	onToggleImportant = (id) => {
		this.setState(({ data }) => ({
			'data': App.toggleProperty(data, id, 'important'),
		}));
	}

	onToggleDone = (id) => {
		this.setState(({ data }) => ({
			'data': App.toggleProperty(data, id, 'done'),
		}));
	}

	render() {
		const { data } = this.state;
		const doneCount = data.filter((el) => el.done).length;
		const todoCount = data.length - doneCount;

		return (
			<>
				<ResetStyles />
				<ThemeProvider theme={themes.default}>
					<StyledWindow>
						<Header />
						<Filter />
						<Stats todo={todoCount} done={doneCount} />
						<AddForm onAdded={this.addItem} />
						<List
							todos={data}
							onDeleted={this.deleteItem}
							onToggleImportant={this.onToggleImportant}
							onToggleDone={this.onToggleDone}
						/>
					</StyledWindow>
				</ThemeProvider>
			</>
		);
	}
}

export default App;
