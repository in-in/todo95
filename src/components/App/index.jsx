import React, { Component } from 'react';
import styled, { ThemeProvider, StyleSheetManager } from 'styled-components';
import { themes, Window } from 'react95';
import nanoid from 'nanoid';
import ResetStyles from '../ResetStyles';
import Header from '../Header';
import Filter from '../Filter';
import Stats from '../Stats';
import AddForm from '../AddForm';
import List from '../List';
import Search from '../Search';

const StyledWindow = styled(Window)`
	display: block;
	width: 100%;
	max-width: 425px;
	margin-left: auto;
	margin-right: auto;
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

	static search(items, term) {
		if (term.length === 0) {
			return items;
		}

		return items.filter((i) => i.label
			.toLowerCase().indexOf(term.toLowerCase()) > -1);
	}

	static filter(items, status) {
		switch (status) {
			case 'active':
				return items.filter((i) => !i.done);
			case 'done':
				return items.filter((i) => i.done);
			case 'all':
			default:
				return items;
		}
	}

	items = [
		'Design a prototype',
		'Client meeting',
		'Pack a suitcase',
		'Bring an umbrella',
	].map((label) => App.createItem(label))

	constructor() {
		super();
		this.state = {
			'data': this.items,
			'term': '',
			'filter': 'all',
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

	onTermChange = (term) => {
		this.setState({ term });
	}

	onFilterChange = (filter) => {
		this.setState({ filter });
	}

	render() {
		const { data, term, filter } = this.state;
		const doneCount = data.filter((el) => el.done).length;
		const todoCount = data.length - doneCount;
		const visibleItems = App.filter(App.search(data, term), filter);

		return (
			<StyleSheetManager disableVendorPrefixes>
				<>
					<ResetStyles />
					<ThemeProvider theme={themes.default}>
						<StyledWindow>
							<Header />
							<Search onTermChange={this.onTermChange} />
							<Filter onFilterChange={this.onFilterChange} filter={filter} />
							<Stats todo={todoCount} done={doneCount} />
							<List
								todos={visibleItems}
								onDeleted={this.deleteItem}
								onToggleImportant={this.onToggleImportant}
								onToggleDone={this.onToggleDone}
							/>
							<AddForm onAdded={this.addItem} />
						</StyledWindow>
					</ThemeProvider>
				</>
			</StyleSheetManager>
		);
	}
}

export default App;
